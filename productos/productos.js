// ============================================
// PRODUCTOS.JS - JS específico de la página de productos
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // Animación de entrada para las filas de productos
    const rows = document.querySelectorAll('.producto-row');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        rows.forEach(row => {
            row.style.opacity = '0';
            row.style.transform = 'translateY(30px)';
            row.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(row);
        });
    }

    // Marcar como visible
    document.querySelectorAll('.producto-row.visible').forEach(row => {
        row.style.opacity = '1';
        row.style.transform = 'translateY(0)';
    });

    // Escuchar cambios del observer
    const styleEl = document.createElement('style');
    styleEl.textContent = `.producto-row.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(styleEl);

});
