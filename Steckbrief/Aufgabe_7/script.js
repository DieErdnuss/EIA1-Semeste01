// var
// funktion
// interaktiveZeug
var sound1 = new Audio('assets/hihat.mp3');
var sound2 = new Audio('assets/kick.mp3');
var sound3 = new Audio('assets/snare.mp3');
var sound4 = new Audio('assets/F.mp3');
var sound5 = new Audio('assets/G.mp3');
var sound6 = new Audio('assets/A.mp3');
var sound7 = new Audio('assets/C.mp3');
var sound8 = new Audio('assets/laugh-1.mp3');
var sound9 = new Audio('assets/laugh-2.mp3');
function playsound(sound1, sound2, sound3) {
    sound1.play();
    sound2.play();
    sound3.play();
}
window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("click", function () {
        playsound(sound1);
    });
    document.querySelector("#button2").addEventListener("click", function () {
        playsound(sound2);
    });
    document.querySelector("#button3").addEventListener("click", function () {
        playsound(sound3);
    });
    document.querySelector("#button4").addEventListener("click", function () {
        playsound(sound4);
    });
    document.querySelector("#button5").addEventListener("click", function () {
        playsound(sound5);
    });
    document.querySelector("#button6").addEventListener("click", function () {
        // Hier findet Funktionsaufruf statt 
        playsound(sound6);
    });
    document.querySelector("#button7").addEventListener("click", function () {
        playsound(sound7);
    });
    document.querySelector("#button8").addEventListener("click", function () {
        playsound(sound8);
    });
    document.querySelector("#button9").addEventListener("click", function () {
        playsound(sound9);
    });
});
var beat = [sound1, sound2, sound3];
window.addEventListener("load", function () {
    document.querySelector(".playbutton").addEventListener("click", function () {
        playsound(beat);
    });
});
//# sourceMappingURL=script.js.map