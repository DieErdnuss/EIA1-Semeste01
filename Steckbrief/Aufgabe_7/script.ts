// var
// funktion
// interaktiveZeug


var sound1:HTMLAudioElement = new Audio('assets/hihat.mp3');
var sound2:HTMLAudioElement = new Audio('assets/kick.mp3');
var sound3:HTMLAudioElement = new Audio('assets/snare.mp3');
var sound4:HTMLAudioElement = new Audio('assets/F.mp3');
var sound5:HTMLAudioElement = new Audio('assets/G.mp3');
var sound6:HTMLAudioElement = new Audio('assets/A.mp3');
var sound7:HTMLAudioElement = new Audio('assets/C.mp3');
var sound8:HTMLAudioElement = new Audio('assets/laugh-1.mp3');
var sound9:HTMLAudioElement = new Audio('assets/laugh-2.mp3');


function playsound(sound1: HTMLAudioElement, sound2: HTMLAudioElement, sound3: HTMLAudioElement){
    sound1.play();
    sound2.play(); 
    sound3.play();     
}

window.addEventListener("load", function(){
    document.querySelector("#button1").addEventListener("click", function(){
        playsound(sound1)})
    document.querySelector("#button2").addEventListener("click", function(){
        playsound(sound2)})
    document.querySelector("#button3").addEventListener("click", function(){
        playsound(sound3)})
    document.querySelector("#button4").addEventListener("click", function(){
        playsound(sound4)})
    document.querySelector("#button5").addEventListener("click", function(){
        playsound(sound5)})
    document.querySelector("#button6").addEventListener("click", function(){
        playsound(sound6)})
    document.querySelector("#button7").addEventListener("click", function(){
        playsound(sound7)})
    document.querySelector("#button8").addEventListener("click", function(){
        playsound(sound8)})
    document.querySelector("#button9").addEventListener("click", function(){   
        playsound(sound9)});

        var beat:HTMLAudioElement[]=[sound1, sound2, sound3];

        document.querySelector(".playbutton").addEventListener("click", function(){
            console.log("beat.length");
})
