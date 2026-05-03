// ============================================
// INICIO.JS - JS específico de la página de inicio
// Hero slider con fondos
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // --- Hero Slider ---
    const hero = document.querySelector('.hero');
    const dotsContainer = document.getElementById('hero-dots');

    // Lista de imágenes del slider (ajusta rutas si es necesario)
    const backgrounds = [
        'imgs/fondo1.jpg',
        'imgs/fondo2.jpg',
        'imgs/fondo3.jpg',
    ];

    if (!hero) return;

    let current = 0;
    let intervalId;

    // Crear dots
    backgrounds.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('hero__dot');
        dot.setAttribute('aria-label', `Imagen ${i + 1}`);
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.hero__dot');

    function goTo(index) {
        current = index;
        hero.style.backgroundImage = `url('${backgrounds[current]}')`;
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function next() {
        goTo((current + 1) % backgrounds.length);
    }

    // Iniciar
    goTo(0);
    intervalId = setInterval(next, 5000);

    // Pausar al hover
    hero.addEventListener('mouseenter', () => clearInterval(intervalId));
    hero.addEventListener('mouseleave', () => { intervalId = setInterval(next, 5000); });

});
