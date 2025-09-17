// devrunner.js
// Juego DevXpert Runner: El Juego del Desarrollador
// Inspirado en el T-Rex de Google Chrome, pero con temática de desarrollo.
// Créditos: Desarrollado por WebXpert

// Selecciono el canvas y el contexto para dibujar
const canvas = document.getElementById('devrunner-canvas');
const ctx = canvas.getContext('2d');

// Variables globales del juego
let gameActive = false; // Indica si el juego está en curso
let score = 0; // Puntaje actual
let speed = 6; // Velocidad inicial del juego
let gravity = 1.2; // Gravedad para el salto
let obstacles = []; // Lista de obstáculos en pantalla
let frame = 0; // Contador de frames para control de generación

// =============================
// IMÁGENES PARA EL JUEGO
// =============================
// Cargo las imágenes de los logos y el personaje desde la web (devicon y flaticon)
const images = {
  // Personaje desarrollador (puedes cambiar la URL por otra si prefieres)
  dev: new Image(),
  // Herramientas/tecnologías (obstáculos de suelo)
  npm: new Image(),
  react: new Image(),
  node: new Image(),
  js: new Image(),
  html: new Image(),
  css: new Image(),
  csharp: new Image(),
  // Sistemas operativos (obstáculos voladores)
  windows: new Image(),
  linux: new Image(),
  mac: new Image(),
};
// Asigno las URLs de las imágenes
images.dev.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
images.npm.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg';
images.react.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg';
images.node.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg';
images.js.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
images.html.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg';
images.css.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg';
images.csharp.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg';
images.windows.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg';
images.linux.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg';
images.mac.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg';

// Listas de obstáculos posibles
const groundLogos = ['npm', 'react', 'node', 'js', 'html', 'css', 'csharp'];
const flyLogos = ['windows', 'linux', 'mac'];

// Defino el jugador (desarrollador)
const player = {
  x: 60, // Posición horizontal fija
  y: 0, // Posición vertical (se calcula)
  width: 44, // Ancho del personaje
  height: 60, // Alto normal
  vy: 0, // Velocidad vertical
  grounded: true, // ¿Está en el suelo?
  ducking: false, // ¿Está agachado?
  color: '#22d3ee', // Color del personaje (luego se reemplaza por imagen)
};
player.y = canvas.height - player.height - 24; // Posición inicial en el suelo

// =============================
// SONIDOS RETRO PARA EL JUEGO
// =============================
// Creo sonidos sintéticos con Web Audio API para evitar dependencias externas
let audioContext;

// Inicializo el contexto de audio la primera vez que se necesite
function initAudio() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
}

// Función para crear un sonido de salto retro (beep corto)
function playJumpSound() {
  if (!audioContext) initAudio();
  
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
  
  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.1);
}

// Función para crear un sonido de game over retro (buzz descendente)
function playGameOverSound() {
  if (!audioContext) initAudio();
  
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.5);
  
  gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.5);
}

// Objeto de sonidos para mantener compatibilidad con el código existente
const sounds = {
  jump: { play: playJumpSound },
  gameover: { play: playGameOverSound }
};

// =============================
// CONTROL DE SONIDO (ON/OFF)
// =============================
let soundOn = true; // Estado inicial: sonido activado
const soundBtn = document.getElementById('sound-btn');
const soundIcon = document.getElementById('sound-icon');
const soundText = document.getElementById('sound-text');

function updateSoundButton() {
  if (soundOn) {
    soundIcon.textContent = '🔊';
    soundText.textContent = 'Sonido ON';
    soundBtn.setAttribute('aria-label', 'Desactivar sonido');
  } else {
    soundIcon.textContent = '🔇';
    soundText.textContent = 'Sonido OFF';
    soundBtn.setAttribute('aria-label', 'Activar sonido');
  }
}

soundBtn.addEventListener('click', function() {
  soundOn = !soundOn;
  // Silencio o activo todos los sonidos
  for (const key in sounds) {
    sounds[key].muted = !soundOn;
  }
  updateSoundButton();
});

// Inicializo el estado del botón al cargar
updateSoundButton();

// Manejo de teclas para saltar y agacharse
window.addEventListener('keydown', function(e) {
  // Si el foco está en el botón de sonido, no hago nada especial con la barra espaciadora
  if (document.activeElement === soundBtn && e.code === 'Space') {
    e.preventDefault(); // Evito que la barra espaciadora active el botón de sonido
    return;
  }
  if (!gameActive && (e.code === 'Space' || e.code === 'ArrowUp')) {
    startGame();
  }
  if (gameActive) {
    if ((e.code === 'Space' || e.code === 'ArrowUp') && player.grounded) {
      // Salto
      player.vy = -18;
      player.grounded = false;
      // Reproduzco sonido de salto
      if (soundOn) {
        sounds.jump.play();
      }
    }
    if (e.code === 'ArrowDown') {
      // Agacharse
      player.ducking = true;
    }
  }
});
window.addEventListener('keyup', function(e) {
  if (e.code === 'ArrowDown') {
    player.ducking = false;
  }
});

// Función para iniciar/reiniciar el juego
function startGame() {
  gameActive = true;
  score = 0;
  speed = 6;
  obstacles = [];
  frame = 0;
  player.y = canvas.height - player.height - 24;
  player.vy = 0;
  player.grounded = true;
  player.ducking = false;
  document.getElementById('restart-btn').style.display = 'none';
  loop();
}

// Función para terminar el juego
function gameOver() {
  gameActive = false;
  ctx.save();
  ctx.globalAlpha = 0.7;
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
  ctx.fillStyle = '#e11d48';
  ctx.font = 'bold 32px Poppins, Arial';
  ctx.textAlign = 'center';
  ctx.fillText('¡Game Over!', canvas.width / 2, 110);
  ctx.font = '20px Poppins, Arial';
  ctx.fillStyle = '#fff';
  ctx.fillText('Puntaje: ' + score, canvas.width / 2, 150);
  document.getElementById('restart-btn').style.display = 'inline-block';
  // Reproduzco sonido de game over
  if (soundOn) {
    sounds.gameover.play();
  }
}

document.getElementById('restart-btn').onclick = function() {
  startGame();
};

// Modifico la clase Obstacle para usar imágenes
class Obstacle {
  constructor(type) {
    this.type = type; // 'ground' o 'fly'
    this.logo = type === 'ground' ? groundLogos[Math.floor(Math.random() * groundLogos.length)] : flyLogos[Math.floor(Math.random() * flyLogos.length)];
    this.width = type === 'ground' ? 44 : 44;
    this.height = type === 'ground' ? 44 : 36;
    this.x = canvas.width + 10;
    // Ajusto la altura de los obstáculos voladores para que estén un poco más arriba
    if (type === 'ground') {
      this.y = canvas.height - this.height - 24;
    } else {
      this.y = canvas.height - this.height - 80; // Subo de 60 a 80
    }
  }
  update() {
    this.x -= speed;
  }
  draw() {
    // Dibujo la imagen del logo si está cargada, si no, un rectángulo de color
    const img = images[this.logo];
    if (img && img.complete) {
      ctx.drawImage(img, this.x, this.y, this.width, this.height);
    } else {
      ctx.fillStyle = this.type === 'ground' ? '#6366f1' : '#f59e42';
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
}

// Modifico el dibujo del jugador para usar la imagen de dev
function drawPlayer() {
  let h = player.ducking ? 36 : player.height;
  let y = player.ducking ? (canvas.height - h - 24) : player.y;
  if (images.dev && images.dev.complete) {
    ctx.drawImage(images.dev, player.x, y, player.width, h);
  } else {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, y, player.width, h);
  }
}

// Bucle principal del juego
function loop() {
  if (!gameActive) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujo el suelo
  ctx.fillStyle = '#bdbdbd';
  ctx.fillRect(0, canvas.height - 20, canvas.width, 4);

  // Actualizo y dibujo el jugador
  drawPlayer();

  // Físicas del salto
  if (!player.grounded) {
    player.vy += gravity;
    player.y += player.vy;
    if (player.y >= canvas.height - player.height - 24) {
      player.y = canvas.height - player.height - 24;
      player.vy = 0;
      player.grounded = true;
    }
  }

  // Genero obstáculos aleatorios
  if (frame % Math.floor(80 - speed * 4) === 0) {
    // 70% probabilidad de obstáculo en el suelo, 30% volador
    let type = Math.random() < 0.7 ? 'ground' : 'fly';
    obstacles.push(new Obstacle(type));
  }

  // Actualizo y dibujo obstáculos
  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].update();
    obstacles[i].draw();
    // Colisión
    let pw = player.width, ph = player.ducking ? 36 : player.height;
    // Si está agachado, la hitbox debe estar más abajo (pegada al suelo)
    let py = player.ducking ? (canvas.height - ph - 24) : player.y;
    let px = player.x;
    let ox = obstacles[i].x, oy = obstacles[i].y, ow = obstacles[i].width, oh = obstacles[i].height;
    if (
      px < ox + ow &&
      px + pw > ox &&
      py < oy + oh &&
      py + ph > oy
    ) {
      gameOver();
      return;
    }
    // Elimino obstáculos fuera de pantalla
    if (obstacles[i].x + obstacles[i].width < 0) {
      obstacles.splice(i, 1);
      score++;
      document.getElementById('score').textContent = 'Puntaje: ' + score;
    }
  }

  // Aumento la velocidad progresivamente
  if (frame % 120 === 0 && speed < 18) {
    speed += 0.3;
  }

  frame++;
  requestAnimationFrame(loop);
}

// Dibujo la pantalla inicial del juego
function drawStartScreen() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#222';
  ctx.font = 'bold 32px Poppins, Arial';
  ctx.textAlign = 'center';
  ctx.fillText('DevXpert Runner', canvas.width / 2, 80);
  ctx.font = '20px Poppins, Arial';
  ctx.fillText('Presiona ESPACIO para comenzar', canvas.width / 2, 130);
  ctx.font = '16px Poppins, Arial';
  ctx.fillText('Salta con ↑ o ESPACIO, agáchate con ↓', canvas.width / 2, 170);
}

drawStartScreen();

// TODO: Implementar el jugador, obstáculos, colisiones y reinicio

// ... Continuará ... 