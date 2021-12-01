window.addEventListener("load", function () {
    var ton = [new Audio("assets/hihat.mp3"), new Audio("assets/kick.mp3"), new Audio("assets/snare.mp3"), new Audio('assets/F.mp3'), new Audio('assets/G.mp3'),
        new Audio('assets/A.mp3'), new Audio('assets/C.mp3'), new Audio('assets/laugh-1.mp3'), new Audio('assets/laugh-2.mp3')];
    document.querySelector("#button1").addEventListener("click", function () { (ton[0]).play(); });
    document.querySelector("#button2").addEventListener("click", function () { (ton[1]).play(); });
    document.querySelector("#button3").addEventListener("click", function () { (ton[2]).play(); });
    document.querySelector("#button4").addEventListener("click", function () { (ton[3]).play(); });
    document.querySelector("#button5").addEventListener("click", function () { (ton[4]).play(); });
    document.querySelector("#button6").addEventListener("click", function () { (ton[5]).play(); });
    document.querySelector("#button7").addEventListener("click", function () { (ton[6]).play(); });
    document.querySelector("#button8").addEventListener("click", function () { (ton[7]).play(); });
    document.querySelector("#button9").addEventListener("click", function () { (ton[8]).play(); });
    function playbeat() {
        setInterval(function () {
            ton[1].play();
        }, 20);
        setInterval(function () {
            ton[2].play();
        }, 130);
        setInterval(function () {
            ton[0].play();
        }, 100);
    }
    ;
    document.querySelector(".playbutton").addEventListener("click", playbeat);
});
//# sourceMappingURL=script.js.map