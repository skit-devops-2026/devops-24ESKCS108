// DigitalBank — mobile navigation toggle

document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');

    if (!navbar || !menuToggle) return;

    menuToggle.addEventListener('click', () => {

        const isOpen = navbar.classList.toggle('nav-open');

        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.textContent = isOpen ? '✕' : '☰';

    });

    // Close the mobile panel if the viewport grows back to desktop size
    window.addEventListener('resize', () => {

        if (window.innerWidth > 768 && navbar.classList.contains('nav-open')) {
            navbar.classList.remove('nav-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.textContent = '☰';
        }

    });

});
