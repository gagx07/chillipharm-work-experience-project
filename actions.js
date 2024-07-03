// scroll
let upButton = document.getElementById("upbutton");
function checkScrollPosition(){
    const scrollThreshold = (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > scrollThreshold){
        upButton.style.display = "flex";
    } else {
        upButton.style.display = "none";
    }
}
checkScrollPosition();
window.onscroll = checkScrollPosition;
// buttons
var r = document.querySelector(':root');
var counter = 0;
document.addEventListener("DOMContentLoaded", (event) => {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const button4 = document.getElementById('button4');

    button1.addEventListener('click', () => {
        r.style.setProperty('--bg-color', '#8A9A5B');
        document.getElementById("FTitle").innerHTML = "Title-1";
        document.getElementById("FText").innerHTML = "Text-1";
        document.getElementById("STitle").innerHTML = "Title-1";
        document.getElementById("TText").innerHTML = "Text-1";
        document.getElementById("imgtext").innerHTML = "Text-1";
    });
    button2.addEventListener('click', () => {
        r.style.setProperty('--bg-color', '#FFEFA8');
        document.getElementById("FTitle").innerHTML = "Title-2";
        document.getElementById("FText").innerHTML = "Text-2";
        document.getElementById("STitle").innerHTML = "Title-2";
        document.getElementById("TText").innerHTML = "Text-2";
        document.getElementById("imgtext").innerHTML = "Text-2";
    });
    button3.addEventListener('click', () => {
        r.style.setProperty('--bg-color', '#3CDCFF');
        document.getElementById("FTitle").innerHTML = "Title-3";
        document.getElementById("FText").innerHTML = "Text-3";
        document.getElementById("STitle").innerHTML = "Title-3";
        document.getElementById("TText").innerHTML = "Text-3";
        document.getElementById("imgtext").innerHTML = "Text-3";
    });
    button4.addEventListener('click', () => {
        if (counter == 0){
            r.style.setProperty("linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 80%, #00C0FF 100%)");
            button4.style.display = "flex";
            counter = 1;
        } else
        {
            r.style.setProperty("");
            button4.style.display = "none";
            counter = 0;   
        }
    })
})
