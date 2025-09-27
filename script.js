// Menú móvil
document.getElementById('menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            window.scrollTo({
                top: target.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const backgrounds = [
        'fondo1.jpg',
        'fondo2.jpg',
        'fondo3.jpg'
    ];
    const hero = document.querySelector('.hero-image');
    let current = 0;
    function changeBackground() {
        hero.style.backgroundImage = `url('${backgrounds[current]}')`;
        current = (current + 1) % backgrounds.length;
    }
    changeBackground();
    setInterval(changeBackground, 5000);
});
// Modal Calibre
document.getElementById('btn-calibre').addEventListener('click', function() {
  document.getElementById('modal-calibre').style.display = 'flex';
});
document.getElementById('close-modal').addEventListener('click', function() {
  document.getElementById('modal-calibre').style.display = 'none';
});
// Opcional: cerrar si se hace click fuera del modal
document.getElementById('modal-calibre').addEventListener('click', function(e) {
  if(e.target === this) {
    this.style.display = 'none';
  }
});
