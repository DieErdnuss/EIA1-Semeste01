window.addEventListener("load", function () {
    /*SoundQuellen*/
    var soundStock = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/F.mp3", "assets/G.mp3",
        "assets/A.mp3", "assets/C.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3"];
    var beatStock = [soundStock[1], soundStock[3], soundStock[4], soundStock[2], soundStock[7], soundStock[8]];
    /*Variablendeklaration*/
    var key = 0;
    var btn = document.querySelector("#button");
    /*FUNKTION PLAY SOUND*/
    function playsound(sound) {
        var newSoundElement = new Audio(sound);
        newSoundElement.play();
    }
    ;
    /*FUNKTION BUTTON SWITCH*/
    function switchButtons() {
        if (btn.getAttribute("class") == "fas fa-play") {
            btn.setAttribute("class", "fas fa-stop");
        }
        else {
            btn.setAttribute("class", "fas fa-play");
        }
    }
    ;
    /*FUNKTION BEAT LOOP*/
    function beatLoop() {
        playsound(beatStock[key]);
        key++;
        if (key >= beatStock.length) {
            key = 0;
        }
    }
    ;
    document.querySelector("#button").addEventListener("click", beatLoop);
    /*
       for (var index:number=0; index <= beatStock.length; index++){
           playsound(beatStock[index])};
       };
       */
    /*Drumpad EventListener*/
    document.querySelector("#button1").addEventListener("click", function () { playsound(soundStock[0]); });
    document.querySelector("#button2").addEventListener("click", function () { playsound(soundStock[1]); });
    document.querySelector("#button3").addEventListener("click", function () { playsound(soundStock[2]); });
    document.querySelector("#button4").addEventListener("click", function () { playsound(soundStock[3]); });
    document.querySelector("#button5").addEventListener("click", function () { playsound(soundStock[4]); });
    document.querySelector("#button6").addEventListener("click", function () { playsound(soundStock[5]); });
    document.querySelector("#button7").addEventListener("click", function () { playsound(soundStock[6]); });
    document.querySelector("#button8").addEventListener("click", function () { playsound(soundStock[7]); });
    document.querySelector("#button9").addEventListener("click", function () { playsound(soundStock[8]); });
    /*Playbutton EventListener*/
});
;
//# sourceMappingURL=script.js.map