
var r = document.querySelector(':root');
document.addEventListener("DOMContentLoaded", (event) => {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');

    button1.addEventListener('click', () => {
        r.style.setProperty('--bg-color', '#8A9A5B');
    });
    button2.addEventListener('click', () => {
        r.style.setProperty('--bg-color', '#FFEFA8');
    });
    button3.addEventListener('click', () => {
        r.style.setProperty('--bg-color', 'purple');
    });
})
