let upButton = document.getElementById("upbutton");
console.log("ran")

window.onscroll = function(){
    if (document.body.scrollTop > document.body.scrollHeight * 0.8 || document.documentElement.scrollTop > document.documentElement.scrollHeight * 0.8){
        console.log("ran2")
        upButton.style.display = "flex";
    } else{
        upButton.style.display = "none";
        console.log("ran3")
    }
};
