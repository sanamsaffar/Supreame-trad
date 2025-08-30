// Add scroll class to body when scrolling
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

// Floating image animation on scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const laptopIcon = document.getElementById('laptop-icon');
    const goldCoin = document.getElementById('gold-coin');
    const bullIcon = document.getElementById('bull-icon');
    
    // Main laptop moves slightly up and down
    if (laptopIcon) {
        laptopIcon.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.05}px))`;
    }
    
    // Gold coin rotates and moves in circular pattern
    if (goldCoin) {
        goldCoin.style.transform = `translateY(${scrollPosition * 0.1}px) rotate(${scrollPosition * 0.2}deg) translateX(${Math.sin(scrollPosition * 0.01) * 20}px)`;
    }
    
    // Bull icon moves up and down with bounce effect
    if (bullIcon) {
        bullIcon.style.transform = `translateY(${Math.sin(scrollPosition * 0.02) * 25}px) translateX(${scrollPosition * 0.05}px)`;
    }
});

// Side-to-side fade animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const featureItems = document.querySelectorAll('.feature-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    featureItems.forEach(item => {
        observer.observe(item);
    });
});

// Enhanced intersection observer with multiple thresholds
document.addEventListener('DOMContentLoaded', function() {
    const marketItems = document.querySelectorAll('.market-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { 
        threshold: 0.1 
    });
    
    marketItems.forEach(item => {
        observer.observe(item);
    });
});

// Scroll animation for floating elements
document.addEventListener('DOMContentLoaded', function() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        floatingElements.forEach((el, index) => {
            const speed = 0.05 + (index * 0.02);
            const yPos = scrollPosition * speed;
            el.style.transform = `translateY(${yPos}px)`;
        });
    });
});

// Animate features when scrolling into view
document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.platform-feature');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    features.forEach((feature, index) => {
        feature.style.transitionDelay = `${index * 100}ms`;
        observer.observe(feature);
    });
});

// Form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        form.classList.add('was-validated');
    }, false);
    
    // Smooth scroll for FAQ items
    const faqItems = document.querySelectorAll('.accordion-item');
    
    faqItems.forEach(item => {
        const button = item.querySelector('.accordion-button');
        
        button.addEventListener('click', function() {
            setTimeout(() => {
                const collapse = item.querySelector('.accordion-collapse');
                if (collapse.classList.contains('show')) {
                    item.style.transform = 'translateY(-5px)';
                    item.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                } else {
                    item.style.transform = '';
                    item.style.boxShadow = '';
                }
            }, 50);
        });
    });
});