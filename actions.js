        // upbutton
        let upButton = document.getElementById("upbutton");
        function checkScrollPosition(){
            const scrollThreshold = (document.documentElement.scrollHeight - document.documentElement.clientHeight);
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollTop-700 > scrollThreshold){
                upButton.style.display = "flex";
            } else {
                upButton.style.display = "none";
            }
        }
        checkScrollPosition();
        window.onscroll = checkScrollPosition;
        //nav bar
        var r = document.querySelector(':root');
        var mode = 0;
        document.addEventListener("DOMContentLoaded", (event) => {
            const button1 = document.getElementById('button1');
            const button2 = document.getElementById('button2');
            const button3 = document.getElementById('button3');
            const button4 = document.getElementById('button4')

            button1.addEventListener('click', () => {
                r.style.setProperty('--bg-color', '#8A9A5B');
                r.style.setProperty('--txt-color', 'rgba(42, 101, 42, 0.75)');
                document.getElementById("classimg").scr = "https://www.dndbeyond.com/avatars/thumbnails/6/346/420/618/636272691461725405.png";
                document.getElementById("FText").innerHTML = "Druids are a type of spell caster that get their magic from nature. thier spells mainly revolve around manipulating the eviroment in cobat this could include: healing, chaning terrain type, limiting or granting movment. they also have the extra abilty to shape shift into spesific animals";
                document.getElementById("imgtext").innerHTML = "In the late game druids gain acses to unlimited ussage of thier shape shifting as well as acses to alot more spells that alow them to both damage oponats and help teammates.";
                document.getElementById("TText").innerHTML = "Druids main feature is thier wild shape which is what alows them to shape shift. they gain this at level 2 and can change into chalange rating 1/8 beasts. at level 4 they can change into chalange rating 1/2 beasts who can swim and finaly at level 6 they can change into chalange rating 1 who can fly";
                });
            button2.addEventListener('click', () => {
                console.log("wtf")
                r.style.setProperty('--bg-color', '#FFEFA8');
                r.style.setProperty('--txt-color', 'rgba(220, 172, 178, 0.75)');
                document.getElementById("classimg").scr = "https://www.dndbeyond.com/avatars/thumbnails/6/357/420/618/636272696881281556.png";
                document.getElementById("FText").innerHTML = "Artificers are a type of half caster that get most of their power from magic items they create. they mainly focuse on either dealing damage or preventing thier alies from taking damage rather then healing. They are also the onlly class that can create magic items ";
                document.getElementById("imgtext").innerHTML = "In late game artificers gain acsees to a larger number of magic items to create as well as the abilty to create more at a time. They can use these mainly to make themselevs more powerfull but are also able to create a few traps fo their oponents";
                document.getElementById("TText").innerHTML = "Artificers main ability is their archane infusion this alows them to create magical items or add magical propertys to itmes. this could include making a automaticly reloading crossbow or boots that alow flight. their secondary abitly would depend on what subclass they pick which could be cannon creasion potion making armour upgrading or robot creation";
            });
            button3.addEventListener('click', () => {
                r.style.setProperty('--bg-color', '#3CDCFF');
                r.style.setProperty('--txt-color', 'rgba(70, 142, 201, 0.75)');
                document.getElementById("classimg").scr = "https://www.dndbeyond.com/attachments/thumbnails/7/107/350/435/1-39.png";
                document.getElementById("FText").innerHTML = "Wizards are a type of spell caster that mainly focuse on damaging enermys however they have accses to the most spells in the game and thus can do alot of things. Such as damaging oponets or inconvience them giving alies an advantage";
                document.getElementById("imgtext").innerHTML = "In the late game wizards have the ability to cast any two low level spells of thier choise an unlimited number of times. This could alow them to deal much more dammage consistently then other classes.";
                document.getElementById("TText").innerHTML = "wizzards main ability is there spell casting they have accses to the most spells this alows them to adapt to diferent situations and still be able to damage enemies";
            });
            button4.addEventListener('click', () => {
        if (mode == 0){
            r.style.setProperty("--rain", "linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 80%, #00C0FF 100%)");
            document.getElementById("inv").src = "https://media.dndbeyond.com/mega-menu/5188e9cd133362e349708cd3c859a6d2.gif";
            mode = 1;
        } else{
            r.style.setProperty("--rain", "");
            document.getElementById("inv").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1280px-HD_transparent_picture.png";
            mode = 0;   
        }
    })
})