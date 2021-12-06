window.addEventListener("load", function () {
    /*SoundQuellen*/
    var soundStock = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/F.mp3", "assets/G.mp3",
        "assets/A.mp3", "assets/C.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3"];
    var beatStock = [soundStock[1], soundStock[3], soundStock[4], soundStock[2], soundStock[7], soundStock[8]];
    /*Variablendeklaration*/
    var key = 0;
    function playsound(sound) {
        var newSoundElement = new Audio(sound);
        newSoundElement.play();
    }
    ;
    /*Looped Beat*/
    function beatLoop() {
        do {
            playsound(beatStock[key]);
            key++;
        } while (key <= beatStock.length);
    }
    ;
    /*Drumpad Buttons*/
    document.querySelector("#button1").addEventListener("click", function () { playsound(soundStock[0]); });
    document.querySelector("#button2").addEventListener("click", function () { playsound(soundStock[1]); });
    document.querySelector("#button3").addEventListener("click", function () { playsound(soundStock[2]); });
    document.querySelector("#button4").addEventListener("click", function () { playsound(soundStock[3]); });
    document.querySelector("#button5").addEventListener("click", function () { playsound(soundStock[4]); });
    document.querySelector("#button6").addEventListener("click", function () { playsound(soundStock[5]); });
    document.querySelector("#button7").addEventListener("click", function () { playsound(soundStock[6]); });
    document.querySelector("#button8").addEventListener("click", function () { playsound(soundStock[7]); });
    document.querySelector("#button9").addEventListener("click", function () { playsound(soundStock[8]); });
    /*Playbutton Funktion und EventListener*/
    document.querySelector(".playbutton").addEventListener("click", beatLoop);
    /*
    
    function playbeat(){
        setInterval(function(){
            playsound(soundStock[1]);
        },500);
        setInterval(function(){
            playsound(soundStock[3]);
        },1000)
        setInterval(function(){
            playsound(soundStock[4]);
        },250)
        setInterval(function(){
            playsound(soundStock[2]);
        },1000)
        setInterval(function(){
            playsound(soundStock[7]);
        },2000)
        setInterval(function(){
            playsound(soundStock[8]);
        },4000)
    
        */
});
//# sourceMappingURL=script.js.map