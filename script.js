/* Javascript Logic for Interactivity and Animations */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // --- Typed.js Initialization ---
    // This adds the typing effect to the hero section
    if (document.querySelector('.typed-text')) {
        var typed = new Typed(".typed-text", {
            strings: [
                "Full Stack Developer",
                "Frontend Specialist",
                "UI/UX Enthusiast",
                "Problem Solver"
            ],
            loop: true,
            typeSpeed: 100, // Speed of typing
            backSpeed: 50,  // Speed of deleting
            backDelay: 2000 // Time before backspacing
        });
    }

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navMenu.classList.remove('active'); // Close menu on click
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Scroll Reveal Animation ---
    // Uses Intersection Observer to fade in elements when they scroll into view
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('.section, .service-card, .project-card, .skill-card, .timeline-item').forEach(el => {
        // el.classList.add('hidden'); // Optional: explicitly add class if CSS doesn't hide by default
        observer.observe(el);
    });
});
