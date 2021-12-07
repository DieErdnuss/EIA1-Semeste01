
window.addEventListener("load", function(){

    /*SoundQuellen*/ 

    var soundStock =["assets/hihat.mp3","assets/kick.mp3", "assets/snare.mp3", "assets/F.mp3","assets/G.mp3",
                    "assets/A.mp3", "assets/C.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3"];

    var beatStock =[soundStock[2], soundStock[2], soundStock[1], soundStock[0]];
    
    /*Variablendeklaration*/
    var key:number = 0;
    var btn:HTMLElement = document.querySelector("#button");
    var intervalID;
    
    /*FUNKTION PLAY SOUND*/

    function playsound(sound:string){
                var newSoundElement= new Audio(sound);
                newSoundElement.play();
             };
  
    /*FUNKTION BUTTON SWITCH*/

    function switchButtons(){
        if (btn.getAttribute("class") == "fas fa-play"){
            btn.setAttribute("class", "fas fa-stop");
            intervalID = setInterval(beatLoop, 200);
        }else {
            btn.setAttribute("class", "fas fa-play");
            clearInterval(intervalID);
            key=0;
        }   
    };        

    /*INTERVAL*/

    function interval(){
        
    };

    /*FUNKTION BEAT LOOP*/

    function mix(){
        key = Math.round(Math.random()*3);
            setInterval(random, 200)
        function random(){
            playsound(beatStock[key]);
        }         
    };

    function beatLoop(){
            playsound(beatStock[key]);
            key++;
            if (key >= beatStock.length){
                key=0;
            }
        };
    document.querySelector("#button").addEventListener("click", switchButtons);
    document.querySelector("#button").addEventListener("click", interval);  
    document.querySelector("#mixer").addEventListener("click", mix);   


    /*Drumpad EventListener*/

        document.querySelector("#button1").addEventListener("click", function(){playsound(soundStock[0])});
        document.querySelector("#button2").addEventListener("click", function(){playsound(soundStock[1])});
        document.querySelector("#button3").addEventListener("click", function(){playsound(soundStock[2])});
        document.querySelector("#button4").addEventListener("click", function(){playsound(soundStock[3])});
        document.querySelector("#button5").addEventListener("click", function(){playsound(soundStock[4])});
        document.querySelector("#button6").addEventListener("click", function(){playsound(soundStock[5])});
        document.querySelector("#button7").addEventListener("click", function(){playsound(soundStock[6])});
        document.querySelector("#button8").addEventListener("click", function(){playsound(soundStock[7])});
        document.querySelector("#button9").addEventListener("click", function(){playsound(soundStock[8])});      
            
});