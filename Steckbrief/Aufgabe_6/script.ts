/*VARIABELN*/

/*DEFINITION NAMEN*/

var AF:string="Africa";
var SA:string="South America";
var EU:string="Europe";
var NA:string="North America";
var AS:string="Asia";
var AU:string="Australia";


/*Africa*/
var africa08 : number=1028;
var africa18 : number=1235.5;

/*South America*/
var samerica08 : number=1132.6;
var samerica18 : number=1261.5;

/*Europe*/
var europe08 : number=4965.7;
var europe18 : number=4209.3;

/*North America*/
var namerica08 : number=6600.4;
var namerica18 : number=6035.6;

/*Asia*/
var asia08 : number=12954.7;
var asia18 : number=16274.1;

/*Australia*/
var australia08 : number=1993;
var australia18 : number=2100.5;

/*Global*/
var global : number=africa18 + samerica18 + europe18 + namerica18 + asia18 + australia18;
var global1 : number=global/100;


/*CALCULATION RATIO*/

/*Africa*/
var ratio_africa : number=africa18/global1;
var ratio_africa_africa : number=africa18/(africa08/100);
var ratio_africa_kg : number=africa18-africa08;

/*South America*/
var ratio_samerica : number=samerica18/global1;
var ratio_samerica_samerica : number=samerica18/(samerica08/100);
var ratio_samerica_kg : number=samerica18-samerica08;

/*Europe*/
var ratio_europe : number=europe18/global1;
var ratio_europe_europa : number=europe18/(europe08/100);
var ratio_europe_kg : number=europe18-europe08;

/*North America*/
var ratio_namerica : number=namerica18/global1;
var ratio_namerica_namerica : number=namerica18/(namerica08/100);
var ratio_namerica_kg : number=namerica18-namerica08;

/*Asia*/
var ratio_asia : number=asia18/global1;
var ratio_asia_asia : number=asia18/(asia08/100);
var ratio_asia_kg : number=asia18-asia08;

/*Australia*/
var ratio_australia : number=australia18/global1;
var ratio_australia_australia : number=australia18/(australia08/100);
var ratio_australia_kg : number=australia18-australia08;

console.log(ratio_australia_kg);



/*DISPLAY*/

window.addEventListener("load", function(){
    document.querySelector(".europe").addEventListener("click", function(){
        document.querySelector("#titleRegion").innerHTML=EU;
        document.querySelector(".absolute").innerHTML= String(europe18);
        document.querySelector(".relative").innerHTML= Math.round(ratio_europe) + "%";
        document.querySelector(".between0818").innerHTML= Number(Math.round(ratio_europe_europa)) + "%";
        document.querySelector(".between").innerHTML= String(Math.round(ratio_europe_kg)) + " kg";
        document.getElementById("chart").style.height= "14%";

    })
})

window.addEventListener("load", function(){
    document.querySelector(".northamerica").addEventListener("click", function(){
        document.querySelector("#titleRegion").innerHTML=NA;
        document.querySelector(".absolute").innerHTML= String(namerica18);
        document.querySelector(".relative").innerHTML=Math.round(ratio_namerica) + "%";
        document.querySelector(".between0818").innerHTML= Number (Math.round(ratio_namerica_namerica)) + "%";
        document.querySelector(".between").innerHTML= String(Math.round(ratio_namerica_kg)) + " kg";
        document.getElementById("chart").style.height= "19%";
    })
})

window.addEventListener("load", function(){
    document.querySelector(".southamerica").addEventListener("click", function(){
        document.querySelector("#titleRegion").innerHTML= SA;
        document.querySelector(".absolute").innerHTML=String(samerica18);
        document.querySelector(".relative").innerHTML=Math.round(ratio_samerica) + "%";
        document.querySelector(".between0818").innerHTML= Number (Math.round(ratio_samerica_samerica)) + "%";
        document.querySelector(".between").innerHTML= String(Math.round(ratio_samerica_kg)) + " kg";
        document.getElementById("chart").style.height= "4%";
    
    })
})

window.addEventListener("load", function(){
    document.querySelector(".africa").addEventListener("click", function(){
        document.querySelector("#titleRegion").innerHTML= AF;
        document.querySelector(".absolute").innerHTML =  String(africa18);
        document.querySelector(".relative").innerHTML=Math.round(ratio_africa) + "%";
        document.querySelector(".between0818").innerHTML= Number (Math.round(ratio_africa_africa)) + "%";
        document.querySelector(".between").innerHTML= String(Math.round(ratio_africa_kg)) + " kg";
        document.getElementById("chart").style.height= "4%";

    })
})

window.addEventListener("load", function(){
    document.querySelector(".asia").addEventListener("click", function(){
        document.querySelector("#titleRegion").innerHTML= AS;
        document.querySelector(".absolute").innerHTML =  String(asia18);
        document.querySelector(".relative").innerHTML=Math.round(ratio_asia) + "%";
        document.querySelector(".between0818").innerHTML= Number (Math.round(ratio_asia_asia)) + "%";
        document.querySelector(".between").innerHTML= String(Math.round(ratio_asia_kg)) + " kg";
        document.getElementById("chart").style.height= "52%";
    })
})

window.addEventListener("load", function(){
    document.querySelector(".australia").addEventListener("click", function(){
        document.querySelector("#titleRegion").innerHTML= AU;
        document.querySelector(".absolute").innerHTML =  String(australia18);
        document.querySelector(".relative").innerHTML=Math.round(ratio_australia) + "%";
        document.querySelector(".between0818").innerHTML= Number (Math.round(ratio_australia_australia)) + "%";
        document.querySelector(".between").innerHTML= String(Math.round(ratio_australia_kg)) + " kg";
        document.getElementById("chart").style.height= "7%";
    })
})

