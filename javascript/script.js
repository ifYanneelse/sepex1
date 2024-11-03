//Movimentação scroll dos blocos de section e h3
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.reveal');
    const headings = document.querySelectorAll('.reveal-h3');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1 // Começa a animar quando 10% do elemento está visível
    });

    // Observa as seções que se revelam de baixo para cima
    sections.forEach(section => {
        observer.observe(section);
    });

    // Observa os h3 que se revelam de cima para baixo
    headings.forEach(heading => {
        observer.observe(heading);
    });
});


//Movimentação slide na página acervo
function slide(direction) {
    const slideWrapper = document.querySelector('.slide-wrapper');
    const slideAmount = slideWrapper.offsetWidth / 5; // A quantidade que será deslizada (metade da largura visível)
    slideWrapper.scrollBy({
        top: 0,
        left: direction * slideAmount,
        behavior: 'smooth'
    });
}


function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle("open");
}

