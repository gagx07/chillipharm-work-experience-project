document.addEventListener("DOMContentLoaded", (event) => {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
    const box = document.querySelector("button1.box");

    button1.addEventListener('click', () => {
        box.style.setProperty('--main-color', '#FFEFA8');
    });
    button1.addEventListener('click', () => {
        box.style.setProperty('--main-color', '#8A9A5B');
    });
    button1.addEventListener('click', () => {
        box.style.setProperty('--main-color', '#007BFF');
    });
})