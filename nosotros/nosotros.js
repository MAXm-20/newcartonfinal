// ============================================
// NOSOTROS.JS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Animación de entrada para mv-cards
    const cards = document.querySelectorAll('.mv-card');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, i * 120);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(c => {
            c.style.opacity = '0';
            c.style.transform = 'translateY(20px)';
            c.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(c);
        });
    }
});
