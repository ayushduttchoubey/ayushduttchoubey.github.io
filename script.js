document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Theme Toggle (Dark / Light Mode) --- */
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;
    
    // Check local storage for preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        
        if (isDarkMode) {
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    });

    /* --- 2. Mobile Navigation Toggle --- */
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const isActive = navLinks.classList.contains('active');
        mobileMenuBtn.innerHTML = isActive ? '<i class="fa-solid fa-times"></i>' : '<i class="fa-solid fa-bars"></i>';
    });

    /* --- 3. Disclaimer Modal --- */
    const modal = document.getElementById('disclaimer-modal');
    const agreeBtn = document.getElementById('agree-btn');
    
    if (modal && agreeBtn) {
        // Check if user has already agreed
        const hasAgreed = localStorage.getItem('disclaimerAgreed');
        
        if (!hasAgreed) {
            // Show modal after a short delay
            setTimeout(() => {
                modal.classList.add('show');
                body.style.overflow = 'hidden'; // Prevent scrolling
            }, 500);
        }

        agreeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
            body.style.overflow = 'auto'; // Restore scrolling
            localStorage.setItem('disclaimerAgreed', 'true');
        });
    }

    /* --- 4. Scroll Reveal Animations --- */
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    };
    
    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();

    /* --- 5. Back to Top Button --- */
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
});
