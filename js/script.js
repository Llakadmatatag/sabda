// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, section h2');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
};

// Language switcher
document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get selected language
        const lang = this.getAttribute('data-lang');
        
        // Here you would typically load the appropriate language content
        // For now, we'll just log the selected language
        console.log('Selected language:', lang);
        
        // Example of how you might handle language changes:
        // translatePage(lang);
    });
});

// Initial check on page load
window.addEventListener('load', animateOnScroll);

// Check on scroll
window.addEventListener('scroll', animateOnScroll);

// Header scroll behavior
const header = document.querySelector('.header');
const topBar = document.querySelector('.top-bar');
const headerHeight = 120; // Total height of both top bar and header
const topBarHeight = topBar.offsetHeight;

// Adjust main content padding to account for fixed headers
const mainContent = document.querySelector('main, .hero');
if (mainContent) {
    mainContent.style.paddingTop = `${header.offsetHeight + topBarHeight}px`;
}

window.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        header.classList.add('scrolled');
        topBar.style.transform = 'translateY(-100%)';
        header.style.top = '0';
    } else {
        header.classList.remove('scrolled');
        topBar.style.transform = 'translateY(0)';
        header.style.top = `${topBarHeight}px`;
    }
});
