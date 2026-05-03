// ============================================
// SERVICIOS.JS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // Animación de entrada para ventajas
    const ventajas = document.querySelectorAll('.ventaja');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, i * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        ventajas.forEach(v => {
            v.style.opacity = '0';
            v.style.transform = 'translateY(20px)';
            v.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(v);
        });
    }

});
