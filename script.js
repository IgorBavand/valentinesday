// JavaScript para animar os corações
document.addEventListener('DOMContentLoaded', function() {
    animateHearts();
});

function animateHearts() {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        setTimeout(() => {
            heart.style.opacity = '1';
        }, index * 500); // Ajuste o intervalo de tempo conforme necessário
    });
}
