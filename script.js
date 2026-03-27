// Function for mobile menu responsiveness
const mobileMenu = () => {
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinksLi = document.querySelectorAll('.nav-links li');

    menuToggle.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');

        // Animate Links
        navLinksLi.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        menuToggle.classList.toggle('toggle');
    });
};

// Function for smooth scroll-reveal animations
const scrollReveal = () => {
    const reveals = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = () => {
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150; // Trigger when element is 150px into view

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
            // Optional: Remove class when scrolled past (reveals again when scrolling up)
            // else {
            //     reveals[i].classList.remove('active');
            // }
        }
    };

    // Run once on load to catch elements already in view
    revealOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', revealOnScroll);
};

// Initialize functions
const init = () => {
    mobileMenu();
    scrollReveal();
};

document.addEventListener('DOMContentLoaded', init);