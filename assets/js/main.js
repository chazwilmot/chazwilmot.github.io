// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', currentTheme);
themeToggle.checked = currentTheme === 'dark';

themeToggle.addEventListener('change', function() {
    const newTheme = this.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        }
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Show More/Less Functionality
function setupShowMore(buttonSelector, contentSelector) {
    const button = document.querySelector(buttonSelector);
    const content = document.querySelector(contentSelector);

    if (button && content) {
        button.addEventListener('click', function() {
            const isExpanding = !content.classList.contains('show');
            content.classList.toggle('show');
            this.classList.toggle('active');
            
            // Update button text and icon
            if (this.classList.contains('active')) {
                this.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
            } else {
                this.innerHTML = 'Show More <i class="fas fa-chevron-down"></i>';
            }

            // Smooth scroll to the button when collapsing
            if (!isExpanding) {
                setTimeout(() => {
                    button.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300); // Wait for animation to complete
            }
        });
    }
}

// Setup show more for portfolio and experience sections
setupShowMore('.portfolio-section .show-more-btn', '.portfolio-hidden');
setupShowMore('.experience-section .show-more-btn', '.experience-hidden');

// Scroll Animation
const sections = document.querySelectorAll('.section');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Add visible class to hero section on load
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.classList.add('visible');
    }
    initTypingAnimation();
});

// Portfolio Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const portfolioHidden = document.querySelector('.portfolio-hidden');

if (filterButtons.length && portfolioItems.length) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Translation data
const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-experience': 'Experience',
        'nav-education': 'Education',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Hi, I\'m Charles Wilmot II',
        'hero-subtitle': 'Engineer | Entrepreneur | Leader',
        
        // About Section
        'about-title': 'About Me',
        
        // Experience Section
        'experience-title': 'Professional Experience',
        'show-more': 'Show More',
        'show-less': 'Show Less',
        
        // Education Section
        'education-title': 'Education',
        
        // Portfolio Section
        'portfolio-title': 'Portfolio',
        
        // Contact Section
        'contact-title': 'Contact Me',
        'contact-email': 'Email',
        'contact-linkedin': 'LinkedIn',
        'contact-github': 'GitHub',
        'contact-resume': 'Download Resume'
    },
    es: {
        // Navigation
        'nav-home': 'Inicio',
        'nav-about': 'Sobre Mí',
        'nav-experience': 'Experiencia',
        'nav-education': 'Educación',
        'nav-portfolio': 'Portafolio',
        'nav-contact': 'Contacto',
        
        // Hero Section
        'hero-title': 'Hola, soy Charles Wilmot II',
        'hero-subtitle': 'Ingeniero | Emprendedor | Líder',
        
        // About Section
        'about-title': 'Sobre Mí',
        
        // Experience Section
        'experience-title': 'Experiencia Profesional',
        'show-more': 'Mostrar Más',
        'show-less': 'Mostrar Menos',
        
        // Education Section
        'education-title': 'Educación',
        
        // Portfolio Section
        'portfolio-title': 'Portafolio',
        
        // Contact Section
        'contact-title': 'Contáctame',
        'contact-email': 'Correo',
        'contact-linkedin': 'LinkedIn',
        'contact-github': 'GitHub',
        'contact-resume': 'Descargar CV'
    }
};

// Typing Animation
let typingText;
let cursor;
let isTyping = false;
let currentTimeout;

function type(text) {
    if (!typingText || !cursor || isTyping) return;
    
    isTyping = true;
    // Reset text and index
    let index = 0;
    typingText.textContent = '';

    // Clear any existing timeout
    if (currentTimeout) {
        clearTimeout(currentTimeout);
    }

    function typeChar() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            currentTimeout = setTimeout(typeChar, 100);
        } else {
            isTyping = false;
            cursor.style.animation = 'none';
            setTimeout(() => {
                cursor.style.animation = 'blink 1s infinite';
            }, 10);
        }
    }

    // Start typing animation after a short delay
    currentTimeout = setTimeout(typeChar, 500);
}

function initTypingAnimation() {
    typingText = document.querySelector('.typing-text-content');
    cursor = document.querySelector('.typing-cursor');
    if (typingText && cursor) {
        // Clear any existing content
        typingText.textContent = '';
        type(translations[currentLanguage]['hero-title']);
    }
}

// Language toggle functionality
const languageToggle = document.getElementById('language-toggle');
const flagIcon = document.querySelector('.flag-icon');
let currentLanguage = 'en';

function updateLanguage(lang) {
    currentLanguage = lang;
    const translation = translations[lang];
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translation[key]) {
            element.textContent = translation[key];
        }
    });
    
    // Update flag
    flagIcon.src = `assets/images/flags/${lang === 'en' ? 'us' : 'mx'}.svg`;
    flagIcon.alt = lang === 'en' ? 'English' : 'Español';

    // Trigger typing animation with new language
    type(translations[lang]['hero-title']);
}

// Initialize with English
document.addEventListener('DOMContentLoaded', () => {
    initTypingAnimation();
    updateLanguage('en');
});

languageToggle.addEventListener('click', () => {
    const newLang = currentLanguage === 'en' ? 'es' : 'en';
    updateLanguage(newLang);
});

// Color Theme Switcher
document.addEventListener('DOMContentLoaded', () => {
    const colorOptions = document.querySelectorAll('.color-option');
    const root = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');

    // Load saved color theme
    const savedColor = localStorage.getItem('color-theme') || 'default';
    root.setAttribute('data-color', savedColor);
    
    // Update active state of color options
    colorOptions.forEach(option => {
        if (option.getAttribute('data-color') === savedColor) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });

    // Handle color theme changes
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            const color = option.getAttribute('data-color');
            
            // Update active state
            colorOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            // Set color theme
            root.setAttribute('data-color', color);
            
            // Save preference
            localStorage.setItem('color-theme', color);
        });
    });

    // Handle dark mode toggle
    themeToggle.addEventListener('change', function() {
        const isDark = this.checked;
        const theme = isDark ? 'dark' : 'light';
        const currentColor = root.getAttribute('data-color') || 'default';
        
        root.setAttribute('data-theme', isDark ? 'dark' : '');
        localStorage.setItem('theme', theme);
        
        // Ensure color theme persists
        root.setAttribute('data-color', currentColor);
    });
}); 