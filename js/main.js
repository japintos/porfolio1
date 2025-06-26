// =========================
// MENÚ HAMBURGUESA
// =========================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !expanded);
  navMenu.classList.toggle('open');
});
// Cerrar menú al hacer click fuera o en un enlace
navMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// =========================
// SCROLL SUAVE PARA ANCLAS
// =========================
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
// Puedes activar dark mode con: document.body.classList.add('dark-mode');
// O quitarlo con: document.body.classList.remove('dark-mode');

// =========================
// DARK MODE TOGGLE BUTTON
// =========================
// ... existing code ... 

// =========================
// 🎯 INITIALIZATION & UTILITIES
// =========================
document.addEventListener('DOMContentLoaded', () => {
    // Add CSS classes for animations
    document.body.classList.add('js-loaded');
    
    // Initialize all functionality
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
// 📱 LOADING SCREEN
// =========================
function initializeLoadingScreen() {
    const loadingScreen = document.querySelector('#loading-screen');
    const content = document.querySelector('.content');
    
    if (loadingScreen && content) {
        // Simulate loading time
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                content.style.opacity = '1';
                content.style.transform = 'translateY(0)';
            }, 500);
        }, 1500);
    }
}

// =========================
// 📊 SCROLL PROGRESS
// =========================
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
// 🧭 SMOOTH SCROLLING
// =========================
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
// 🎬 ANIMATIONS
// =========================
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

    // Observe elements for animation
    document.querySelectorAll('.section, .proyecto-card, .skill-item, .timeline__item').forEach(el => {
        animationObserver.observe(el);
    });

    // AOS-like animations
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
// 🎯 SKILL BARS
// =========================
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
// 🪟 PROJECT MODALS
// =========================
function initializeProjectModals() {
    const projectCards = document.querySelectorAll('.proyecto-card');
    const modal = document.querySelector('#projectModal');
    
    if (projectCards.length > 0 && modal) {
        projectCards.forEach(card => {
            card.addEventListener('click', (e) => {
                // Don't open modal if clicking on links or buttons
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

        // Close modal functionality
        const modalClose = modal.querySelector('.modal-close');
        if (modalClose) {
            modalClose.addEventListener('click', closeProjectModal);
        }

        // Close modal on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeProjectModal();
            }
        });

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                closeProjectModal();
            }
        });
    }
}

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
        // Accesibilidad: foco al modal
        modal.querySelector('.modal-close').focus();
    }, 10);
}

function closeProjectModal() {
    const modal = document.querySelector('#projectModal');
    if (!modal) return;
    
    modal.classList.remove('modal-active');
    setTimeout(() => modal.style.display = 'none', 300);
}

// =========================
// 📝 FORM VALIDATION
// =========================
function initializeFormValidation() {
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation
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
            
            // Simulate form submission
            showNotification('Mensaje enviado correctamente', 'success');
            contactForm.reset();
        });
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// =========================
// 🔔 NOTIFICATIONS
// =========================
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
// 📱 MOBILE MENU
// =========================
function initializeMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !expanded);
            navMenu.classList.toggle('nav-open');
        });

        // Close menu when clicking on links
        navMenu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                navMenu.classList.remove('nav-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('nav-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// =========================
// 💡 TOOLTIPS
// =========================
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
// 📋 COPY BUTTONS
// =========================
function initializeCopyButtons() {
    document.querySelectorAll('.btn-copy').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = btn.getAttribute('data-copy');
            if (email && navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    btn.innerHTML = '<i class="fas fa-check"></i>';
                    setTimeout(() => {
                        btn.innerHTML = '<i class="fas fa-copy"></i>';
                    }, 1500);
                }).catch(() => {
                    showNotification('Error al copiar el email', 'error');
                });
            }
        });
    });
}

// =========================
// ⬆️ SCROLL TOP BUTTON
// =========================
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
// 🎯 PROJECT DETAILS FUNCTION (for onclick handlers)
// =========================
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
            demo: 'https://japintos.github.io/webxpert/',
            code: ''
        },
        proyecto3: {
            title: 'Oudin, Duarte & Asociados',
            description: 'Sitio web institucional para estudio jurídico, con enfoque en experiencia de usuario, accesibilidad y optimización SEO. Incluye presentación de servicios, equipo, publicaciones y contacto.',
            image: 'Img/oudin.jpg',
            technologies: 'HTML5, CSS3, JavaScript, Diseño Web',
            demo: 'https://japintos.github.io/estudioOudin/',
            code: ''
        }
    };
    
    const project = projectData[projectId];
    if (project) {
        showProjectModal(project.title, project.description, project.image, project.technologies, project.demo, project.code);
    }
}

// Evento para los botones de detalles
document.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const projectId = btn.getAttribute('data-project');
        showProjectDetails(projectId);
    });
}); 