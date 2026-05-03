// ============================================
// CONTACTO.JS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('form-contacto');
    const notice = document.getElementById('form-notice');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre   = form.nombre.value.trim();
        const telefono = form.telefono.value.trim();
        const mensaje  = form.mensaje.value.trim();

        // Limpiar errores previos
        form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
        notice.textContent = '';
        notice.className = 'form-notice';

        // Validación básica
        let valid = true;

        if (!nombre) {
            form.nombre.classList.add('error');
            valid = false;
        }
        if (!telefono) {
            form.telefono.classList.add('error');
            valid = false;
        }
        if (!mensaje) {
            form.mensaje.classList.add('error');
            valid = false;
        }

        if (!valid) {
            notice.textContent = 'Por favor completa los campos obligatorios.';
            notice.classList.add('error');
            return;
        }

        // Redirigir a WhatsApp con el mensaje
        const texto = `Hola, soy *${nombre}*. Tel: ${telefono}.\n\n${mensaje}`;
        const url = `https://wa.me/51967598773?text=${encodeURIComponent(texto)}`;

        notice.textContent = '¡Redirigiendo a WhatsApp...';
        notice.classList.add('success');

        setTimeout(() => {
            window.open(url, '_blank');
            form.reset();
            notice.textContent = '';
        }, 800);
    });

});
