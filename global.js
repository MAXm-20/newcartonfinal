// ============================================
// GLOBAL.JS - Cartoneria Orvi E.I.R.L
// JS compartido: navbar, modales
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // --- Menú hamburguesa ---
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
        });

        // Cerrar al hacer click en un link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
            });
        });
    }

    // --- Marcar link activo según página actual ---
    const currentPage = window.location.pathname.split('/').filter(Boolean).pop() || 'index.html';
    document.querySelectorAll('.navbar__links a, .navbar__mobile a').forEach(link => {
        const href = link.getAttribute('href');
        if (
            (currentPage === 'index.html' && (href === 'index.html' || href === '../index.html')) ||
            href && href.includes(currentPage)
        ) {
            link.classList.add('active');
        }
    });

    // --- Smooth scroll para anclas ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
            }
        });
    });

    // --- Modal global ---
    // Abre cualquier modal: data-modal="id-del-overlay"
    document.querySelectorAll('[data-modal]').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) modal.classList.add('open');
        });
    });

    // Cierra modal al click en overlay o botón close
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.classList.remove('open');
        });
    });

    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal-overlay').classList.remove('open');
        });
    });

    // Cerrar con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
        }
    });

});
