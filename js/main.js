// =========================
// MENÚ HAMBURGUESA
// =========================
// Este bloque controla el menú hamburguesa para móviles. Al hacer clic en el botón, abre o cierra el menú de navegación. También se asegura de cerrarlo si hago clic fuera o en un enlace.
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !expanded);
  navMenu.classList.toggle('open');
});
// Cierro el menú si hago clic en un enlace dentro del menú
navMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
// Cierro el menú si hago clic fuera del menú o del botón
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// =========================
// SCROLL SUAVE PARA ANCLAS
// =========================
// Esto hace que al hacer clic en un enlace interno (#ancla), la página se desplace suavemente hasta esa sección.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.length > 1 && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// =========================
// BOTÓN SCROLL TOP
// =========================
// Muestra un botón para volver arriba cuando hago scroll hacia abajo. Al hacer clic, sube suavemente al inicio.
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =========================
// ANIMACIONES DE ENTRADA (AOS-like)
// =========================
// Uso IntersectionObserver para animar elementos cuando entran en pantalla. Así las secciones aparecen con efecto.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aos-animate');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('[data-aos]').forEach(el => {
  observer.observe(el);
});

// =========================
// COPIAR EMAIL AL PORTAPAPELES
// =========================
// Permite copiar mi email al portapapeles al hacer clic en el botón de copiar. Muestra un icono de check como feedback.
document.querySelectorAll('.btn-copy').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = btn.getAttribute('data-copy');
    navigator.clipboard.writeText(email).then(() => {
      btn.innerHTML = '<i class="fas fa-check"></i>';
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-copy"></i>';
      }, 1500);
    });
  });
});

// =========================
// DARK MODE HOOK (sin toggle UI)
// =========================
// Si quiero activar el modo oscuro, solo llamo: document.body.classList.add('dark-mode');
// Para quitarlo: document.body.classList.remove('dark-mode');

// =========================
// DARK MODE TOGGLE BUTTON
// =========================
// (Aquí podría agregar un botón para alternar el modo oscuro, si lo quiero en el futuro)

// =========================
// 🎯 INICIALIZACIÓN Y UTILIDADES
// =========================
// Cuando el DOM está listo, inicializo todas las funciones principales del sitio.
document.addEventListener('DOMContentLoaded', () => {
    // Agrego clase para animaciones iniciales
    document.body.classList.add('js-loaded');
    
    // Inicializo cada funcionalidad personalizada
    initializeLoadingScreen();
    initializeScrollProgress();
    initializeSmoothScrolling();
    initializeAnimations();
    initializeSkillBars();
    initializeProjectModals();
    initializeFormValidation();
    initializeMobileMenu();
    initializeTooltips();
    initializeCopyButtons();
    initializeScrollTopButton();
});

// =========================
// 📱 PANTALLA DE CARGA
// =========================
// Muestra una pantalla de carga al entrar al sitio y la oculta cuando los recursos críticos están listos.
function initializeLoadingScreen() {
    const loadingScreen = document.querySelector('#loading-screen');
    const content = document.querySelector('.content');
    const loadingProgress = document.querySelector('.loading-progress');
    
    if (!loadingScreen || !content) return;
    
    // Recursos críticos a cargar
    const criticalResources = [
        document.querySelector('link[rel="stylesheet"]'),
        document.querySelector('img[src*="foto_Perfil"]'),
        document.fonts.ready
    ].filter(Boolean);
    
    let loadedResources = 0;
    const totalResources = criticalResources.length + 1; // +1 para el DOM
    
    // Actualizar barra de progreso
    function updateProgress(progress) {
        if (loadingProgress) {
            loadingProgress.style.width = progress + '%';
        }
    }
    
    // Verificar si el DOM está listo
    if (document.readyState === 'complete') {
        loadedResources++;
        updateProgress((loadedResources / totalResources) * 100);
    } else {
        window.addEventListener('load', () => {
            loadedResources++;
            updateProgress((loadedResources / totalResources) * 100);
        });
    }
    
    // Verificar recursos críticos
    Promise.all(criticalResources.map(resource => {
        if (resource instanceof Promise) {
            return resource;
        } else if (resource instanceof HTMLLinkElement) {
            return new Promise((resolve) => {
                if (resource.sheet) {
                    resolve();
                } else {
                    resource.addEventListener('load', resolve);
                    resource.addEventListener('error', resolve); // Continuar aunque haya error
                }
            });
        } else if (resource instanceof HTMLImageElement) {
            return new Promise((resolve) => {
                if (resource.complete) {
                    resolve();
                } else {
                    resource.addEventListener('load', resolve);
                    resource.addEventListener('error', resolve);
                }
            });
        }
        return Promise.resolve();
    })).then(() => {
        loadedResources = totalResources;
        updateProgress(100);
        
        // Esperar un mínimo para mostrar la animación
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.pointerEvents = 'none';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                content.style.opacity = '1';
                content.style.transform = 'translateY(0)';
            }, 300);
        }, 500);
    }).catch(() => {
        // Si hay error, ocultar después de un tiempo mínimo
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                content.style.opacity = '1';
                content.style.transform = 'translateY(0)';
            }, 300);
        }, 1000);
    });
}

// =========================
// 📊 BARRA DE PROGRESO DE SCROLL
// =========================
// Muestra una barra arriba que indica cuánto he scrolleado de la página.
function initializeScrollProgress() {
    const progressBar = document.querySelector('#scroll-progress');
    
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }
}

// =========================
// 🧭 SCROLL SUAVE (para anclas internas)
// =========================
// Hace que los enlaces internos se desplacen suavemente a la sección correspondiente.
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// =========================
// 🎬 ANIMACIONES DE ENTRADA
// =========================
// Uso IntersectionObserver para animar secciones, tarjetas de proyectos, skills, etc. cuando aparecen en pantalla.
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observo los elementos que quiero animar
    document.querySelectorAll('.section, .proyecto-card, .skill-item, .timeline__item').forEach(el => {
        animationObserver.observe(el);
    });

    // Animaciones tipo AOS para elementos con data-aos
    const aosObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                aosObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    
    document.querySelectorAll('[data-aos]').forEach(el => {
        aosObserver.observe(el);
    });
}

// =========================
// 🎯 BARRAS DE HABILIDADES
// =========================
// Anima el llenado de las barras de skills cuando aparecen en pantalla.
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    if (skillBars.length > 0) {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBar = entry.target;
                    const percentage = skillBar.getAttribute('data-percentage');
                    const fill = skillBar.querySelector('.skill-fill');
                    
                    if (fill && percentage) {
                        setTimeout(() => {
                            fill.style.width = percentage + '%';
                            fill.style.opacity = '1';
                        }, 200);
                    }
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => skillObserver.observe(bar));
    }
}

// =========================
// 🪟 MODALES DE PROYECTOS
// =========================
// Permite mostrar un modal con detalles del proyecto al hacer clic en una tarjeta de proyecto.
function initializeProjectModals() {
    const projectCards = document.querySelectorAll('.proyecto-card');
    const modal = document.querySelector('#projectModal');
    
    if (projectCards.length > 0 && modal) {
        projectCards.forEach(card => {
            card.addEventListener('click', (e) => {
                // No abro el modal si hago clic en un link o botón dentro de la tarjeta
                if (e.target.closest('a') || e.target.closest('button')) {
                    return;
                }
                
                const title = card.querySelector('.proyecto-card__title')?.textContent || '';
                const description = card.querySelector('.proyecto-card__desc')?.textContent || '';
                const image = card.querySelector('img')?.src || '';
                const technologies = card.querySelector('.project-tech')?.textContent || '';
                
                showProjectModal(title, description, image, technologies);
            });
        });

        // Cierro el modal al hacer clic en la X
        const modalClose = modal.querySelector('.modal-close');
        if (modalClose) {
            modalClose.addEventListener('click', closeProjectModal);
        }

        // Cierro el modal al hacer clic fuera del contenido
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeProjectModal();
            }
        });

        // Cierro el modal con la tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                closeProjectModal();
            }
        });
    }
}

// Muestra el modal de proyecto con los datos recibidos
function showProjectModal(title, description, image, technologies, demo, code) {
    const modal = document.querySelector('#projectModal');
    if (!modal) return;
    const modalTitle = modal.querySelector('.modal-header h2');
    const modalDesc = modal.querySelector('.modal-info p');
    const modalImage = modal.querySelector('.modal-image');
    const modalTech = modal.querySelector('.modal-tech');
    const modalDemo = modal.querySelector('.modal-demo-link');
    const modalCode = modal.querySelector('.modal-code-link');
    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = description;
    if (modalImage) {
        modalImage.src = image;
        modalImage.alt = title;
    }
    if (modalTech) modalTech.innerHTML = `<strong>Tecnologías:</strong> ${technologies}`;
    if (modalDemo) {
        modalDemo.href = demo || '#';
        modalDemo.style.display = demo ? 'inline-block' : 'none';
    }
    if (modalCode) {
        modalCode.href = code || '#';
        modalCode.style.display = code ? 'inline-block' : 'none';
    }
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('modal-active');
        // Accesibilidad: pongo el foco en el botón de cerrar
        modal.querySelector('.modal-close').focus();
    }, 10);
}

// Cierra el modal de proyecto
function closeProjectModal() {
    const modal = document.querySelector('#projectModal');
    if (!modal) return;
    
    modal.classList.remove('modal-active');
    setTimeout(() => modal.style.display = 'none', 300);
}

// =========================
// 📝 VALIDACIÓN DE FORMULARIO DE CONTACTO (NO SE USA SI SOLO WHATSAPP)
// =========================
// Valida el formulario de contacto tradicional (si lo uso). Muestra notificaciones si falta algún campo o el email es inválido.
function initializeFormValidation() {
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validación básica
            const name = contactForm.querySelector('#name')?.value.trim() || '';
            const email = contactForm.querySelector('#email')?.value.trim() || '';
            const message = contactForm.querySelector('#message')?.value.trim() || '';
            
            if (!name || !email || !message) {
                showNotification('Por favor completa todos los campos', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Por favor ingresa un email válido', 'error');
                return;
            }
            
            // Simulo el envío del formulario
            showNotification('Mensaje enviado correctamente', 'success');
            contactForm.reset();
        });
    }
}

// Valida el formato del email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// =========================
// 🔔 NOTIFICACIONES
// =========================
// Muestra mensajes flotantes para dar feedback al usuario (éxito, error, info)
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('notification-show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('notification-show');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// =========================
// 📱 MENÚ MÓVIL (para responsive)
// =========================
// Controla el menú de navegación en móviles, similar al menú hamburguesa.
function initializeMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');
    
    if (!navToggle || !navMenu) return;
    
    function openMenu() {
        navToggle.setAttribute('aria-expanded', 'true');
        navMenu.classList.add('nav-open');
        if (navOverlay) {
            navOverlay.classList.add('active');
            navOverlay.setAttribute('aria-hidden', 'false');
        }
        document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    }
    
    function closeMenu() {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('nav-open');
        if (navOverlay) {
            navOverlay.classList.remove('active');
            navOverlay.setAttribute('aria-hidden', 'true');
        }
        document.body.style.overflow = ''; // Restaurar scroll
    }
    
    // Toggle del menú
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Cerrar al hacer clic en un enlace
    navMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            closeMenu();
        }
    });

    // Cerrar al hacer clic en el overlay
    if (navOverlay) {
        navOverlay.addEventListener('click', closeMenu);
    }

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('nav-open')) {
            closeMenu();
        }
    });

    // Cerrar al hacer clic fuera (solo en desktop)
    if (window.innerWidth > 700) {
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                closeMenu();
            }
        });
    }
    
    // Cerrar menú al redimensionar ventana si es necesario
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 700 && navMenu.classList.contains('nav-open')) {
                closeMenu();
            }
        }, 250);
    });
}

// =========================
// 💡 TOOLTIPS PERSONALIZADOS
// =========================
// Muestra un tooltip al pasar el mouse sobre elementos con data-tooltip.
function initializeTooltips() {
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = e.target.dataset.tooltip;
            document.body.appendChild(tooltip);
            
            const rect = e.target.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        });
        
        element.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                document.body.removeChild(tooltip);
            }
        });
    });
}

// =========================
// 📋 BOTONES DE COPIAR EMAIL
// =========================
// Permite copiar el email al portapapeles desde cualquier botón con la clase .btn-copy
function initializeCopyButtons() {
    document.querySelectorAll('.btn-copy').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            const email = btn.getAttribute('data-copy');
            
            if (!email) {
                showNotification('No hay email para copiar', 'error');
                return;
            }
            
            // Intentar usar Clipboard API moderno
            if (navigator.clipboard && window.isSecureContext) {
                try {
                    await navigator.clipboard.writeText(email);
                    btn.innerHTML = '<i class="fas fa-check"></i>';
                    showNotification('Email copiado al portapapeles', 'success');
                    setTimeout(() => {
                        btn.innerHTML = '<i class="fas fa-copy"></i>';
                    }, 1500);
                } catch (err) {
                    console.error('Error al copiar:', err);
                    // Fallback para navegadores antiguos
                    fallbackCopyToClipboard(email, btn);
                }
            } else {
                // Fallback para navegadores que no soportan Clipboard API
                fallbackCopyToClipboard(email, btn);
            }
        });
    });
}

// Fallback para copiar al portapapeles en navegadores antiguos
function fallbackCopyToClipboard(text, btn) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            btn.innerHTML = '<i class="fas fa-check"></i>';
            showNotification('Email copiado al portapapeles', 'success');
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-copy"></i>';
            }, 1500);
        } else {
            showNotification('No se pudo copiar el email. Por favor cópialo manualmente.', 'error');
        }
    } catch (err) {
        console.error('Error en fallback copy:', err);
        showNotification('No se pudo copiar el email. Por favor cópialo manualmente.', 'error');
    } finally {
        document.body.removeChild(textArea);
    }
}

// =========================
// ⬆️ BOTÓN SCROLL TOP
// =========================
// Muestra el botón para volver arriba y lo hace funcionar.
function initializeScrollTopButton() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// =========================
// 🎯 FUNCIÓN PARA DETALLES DE PROYECTOS (para los botones de detalles)
// =========================
// Muestra el modal con la info del proyecto según el id recibido.
function showProjectDetails(projectId) {
    const projectData = {
        proyecto1: {
            title: 'Sistema de Gestión Local',
            description: 'Aplicación web completa para automatizar procesos administrativos en PyMEs. Incluye gestión de inventario, facturación, reportes y dashboard analítico.',
            image: 'https://via.placeholder.com/600x400?text=Proyecto+1',
            technologies: 'React, Node.js, PostgreSQL',
            demo: 'https://link-al-proyecto.com',
            code: ''
        },
        proyecto2: {
            title: 'Landing para WebXpert',
            description: 'Sitio institucional moderno con diseño responsive y animaciones SVG. Optimizado para conversión y experiencia de usuario.',
            image: 'Img/proyecto2.jpg',
            technologies: 'HTML5, CSS3, JavaScript',
            demo: 'https://www.webxpert.com.ar',
            code: ''
        },
        proyecto3: {
            title: 'Oudin, Duarte & Asociados',
            description: 'Sitio web institucional para estudio jurídico, con enfoque en experiencia de usuario, accesibilidad y optimización SEO. Incluye presentación de servicios, equipo, publicaciones y contacto.',
            image: 'Img/oudin.jpg',
            technologies: 'HTML5, CSS3, JavaScript, Diseño Web',
            demo: 'https://japintos.github.io/estudioOudin/',
            code: ''
        },
        proyecto4: {
            title: 'Concesionario Web',
            description: 'Sitio web moderno y responsivo para concesionaria de autos. Permite visualizar catálogo, detalles de vehículos, filtros avanzados y contacto directo. Optimizado para experiencia de usuario y dispositivos móviles.',
            image: 'Img/web-consecionario.jpg',
            technologies: 'HTML5, CSS3, JavaScript',
            demo: 'https://concesionarioweb.vercel.app/',
            code: ''
        }
    };
    
    const project = projectData[projectId];
    if (project) {
        showProjectModal(project.title, project.description, project.image, project.technologies, project.demo, project.code);
    }
}

// Evento para los botones de detalles de proyectos
// Así puedo abrir el modal desde el botón de cada proyecto
// (Uso stopPropagation para que no se dispare el click de la tarjeta)
document.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const projectId = btn.getAttribute('data-project');
        showProjectDetails(projectId);
    });
}); 

// =========================
// FORMULARIO WHATSAPP CONTACTO
// =========================
// Este bloque hace que el formulario de contacto envíe los datos directo a mi WhatsApp. Toma los datos del formulario, los arma en un mensaje y abre WhatsApp con el mensaje listo para enviar a mi número.
document.addEventListener('DOMContentLoaded', function() {
  const waForm = document.getElementById('whatsapp-contact-form');
  if (!waForm) return;
  
  waForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('wa-name');
    const emailInput = document.getElementById('wa-email');
    const messageInput = document.getElementById('wa-message');
    const submitBtn = waForm.querySelector('button[type="submit"]');
    
    if (!nameInput || !emailInput || !messageInput) {
      showNotification('Error: No se encontraron los campos del formulario', 'error');
      return;
    }
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    
    // Validación de campos
    if (!name || !email || !message) {
      showNotification('Por favor completa todos los campos', 'error');
      // Resaltar campos vacíos
      if (!name) nameInput.focus();
      else if (!email) emailInput.focus();
      else if (!message) messageInput.focus();
      return;
    }
    
    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showNotification('Por favor ingresa un email válido', 'error');
      emailInput.focus();
      return;
    }
    
    // Deshabilitar botón durante el proceso
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    }
    
    try {
      const phone = '3764724207';
      const text = encodeURIComponent(`Hola! Soy ${name} (${email}).%0A%0A${message}`);
      const whatsappUrl = `https://wa.me/${phone}?text=${text}`;
      
      // Intentar abrir WhatsApp
      const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      
      if (whatsappWindow) {
        showNotification('Redirigiendo a WhatsApp...', 'success');
        // Limpiar formulario después de un breve delay
        setTimeout(() => {
          waForm.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar por WhatsApp';
          }
        }, 1000);
      } else {
        // Si el popup fue bloqueado, mostrar mensaje alternativo
        showNotification('Por favor permite popups o copia este link: ' + whatsappUrl, 'info');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar por WhatsApp';
        }
      }
    } catch (error) {
      console.error('Error al abrir WhatsApp:', error);
      showNotification('Error al abrir WhatsApp. Por favor intenta nuevamente.', 'error');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar por WhatsApp';
      }
    }
  });
});
// FIN DEL ARCHIVO: Todo lo que está arriba lo hice para que mi portfolio sea más interactivo, profesional y fácil de usar para mis visitantes (¡y para mí!). 

// =========================
// 🎯 HABILIDADES: ICONOS SELECCIONABLES
// =========================
// (Eliminado: ya no se requiere selección, solo hover) 

// =========================
// INTERNACIONALIZACIÓN (i18n)
// =========================
// Eliminado: toda la lógica de idiomas, setLanguage, getPreferredLang, listeners y referencias a data-i18n. 