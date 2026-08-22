// DigitalBank — homepage interactions

document.addEventListener('DOMContentLoaded', () => {

    const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const targets = document.querySelectorAll(
        '.feature-card, .account-card, .manage-item, .testimonial'
    );

    if (!('IntersectionObserver' in window) || !targets.length) return;

    targets.forEach((el) => el.classList.add('reveal'));

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }

            });

        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));

});
