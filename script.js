const button = document.querySelector('.kuromi-mode');

if (button) {
    button.addEventListener('click', function() {
        const currentPage = window.location.pathname.split('/').pop().toLowerCase();
        if (currentPage && currentPage !== 'index.html' && currentPage !== '') {
            window.location.href = 'index.html';
            return;
        }
        alert("Gracias por haber esperado tanto. Te amo demasiado, simplemente no quiero a nadie más");
    });
}

// Efecto al pasar el mouse
document.querySelectorAll('.char-box').forEach(box => {
    box.addEventListener('mouseenter', function() {
        this.style.transform = 'rotate(2deg) scale(1.05)';
    });
    box.addEventListener('mouseleave', function() {
        this.style.transform = 'rotate(0deg) scale(1)';
    });

    const target = box.dataset.href || box.getAttribute('href');
    if (target) {
        box.style.cursor = 'pointer';
        box.addEventListener('click', function() {
            if (target.startsWith('#')) {
                window.location.hash = target;
            } else {
                window.location.href = target;
            }
        });
    }
});
