// JavaScript код для управления анимацией текста

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('animated-text');
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff'];
    let colorIndex = 0;

    setInterval(() => {
        textElement.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 1000);
});

