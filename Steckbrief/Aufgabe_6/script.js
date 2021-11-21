/*VARIABELN*/
/*DEFINITION NAMEN*/
var AF = "Africa";
var SA = "South America";
var EU = "Europe";
var NA = "North America";
var AS = "Asia";
var AU = "Australia";
/*Africa*/
var africa08 = 1028;
var africa18 = 1235.5;
/*South America*/
var samerica08 = 1132.6;
var samerica18 = 1261.5;
/*Europe*/
var europe08 = 4965.7;
var europe18 = 4209.3;
/*North America*/
var namerica08 = 6600.4;
var namerica18 = 6035.6;
/*Asia*/
var asia08 = 12954.7;
var asia18 = 16274.1;
/*Australia*/
var australia08 = 1993;
var australia18 = 2100.5;
/*Global*/
var global = africa18 + samerica18 + europe18 + namerica18 + asia18 + australia18;
var global1 = global / 100;
/*CALCULATION RATIO*/
/*Africa*/
var ratio_africa = africa18 / global1;
var ratio_africa_africa = africa18 / (africa08 / 100);
var ratio_africa_kg = africa18 - africa08;
/*South America*/
var ratio_samerica = samerica18 / global1;
var ratio_samerica_samerica = samerica18 / (samerica08 / 100);
var ratio_samerica_kg = samerica18 - samerica08;
/*Europe*/
var ratio_europe = europe18 / global1;
var ratio_europe_europa = europe18 / (europe08 / 100);
var ratio_europe_kg = europe18 - europe08;
/*North America*/
var ratio_namerica = namerica18 / global1;
var ratio_namerica_namerica = namerica18 / (namerica08 / 100);
var ratio_namerica_kg = namerica18 - namerica08;
/*Asia*/
var ratio_asia = asia18 / global1;
var ratio_asia_asia = asia18 / (asia08 / 100);
var ratio_asia_kg = asia18 - asia08;
/*Australia*/
var ratio_australia = australia18 / global1;
var ratio_australia_australia = australia18 / (australia08 / 100);
var ratio_australia_kg = australia18 - australia08;
console.log(ratio_australia_kg);
/*DISPLAY*/
window.addEventListener("load", function () {
    document.querySelector(".europe").addEventListener("click", function () {
        document.querySelector("#titleRegion").innerHTML = EU;
        document.querySelector(".absolute").innerHTML = String(europe18);
        document.querySelector(".relative").innerHTML = Math.round(ratio_europe) + "%";
        document.querySelector(".between0818").innerHTML = Number(Math.round(ratio_europe_europa)) + "%";
        document.querySelector(".between").innerHTML = String(Math.round(ratio_europe_kg)) + " kg";
        document.getElementById("chart").style.height = "14%";
    });
});
window.addEventListener("load", function () {
    document.querySelector(".northamerica").addEventListener("click", function () {
        document.querySelector("#titleRegion").innerHTML = NA;
        document.querySelector(".absolute").innerHTML = String(namerica18);
        document.querySelector(".relative").innerHTML = Math.round(ratio_namerica) + "%";
        document.querySelector(".between0818").innerHTML = Number(Math.round(ratio_namerica_namerica)) + "%";
        document.querySelector(".between").innerHTML = String(Math.round(ratio_namerica_kg)) + " kg";
        document.getElementById("chart").style.height = "19%";
    });
});
window.addEventListener("load", function () {
    document.querySelector(".southamerica").addEventListener("click", function () {
        document.querySelector("#titleRegion").innerHTML = SA;
        document.querySelector(".absolute").innerHTML = String(samerica18);
        document.querySelector(".relative").innerHTML = Math.round(ratio_samerica) + "%";
        document.querySelector(".between0818").innerHTML = Number(Math.round(ratio_samerica_samerica)) + "%";
        document.querySelector(".between").innerHTML = String(Math.round(ratio_samerica_kg)) + " kg";
        document.getElementById("chart").style.height = "4%";
    });
});
window.addEventListener("load", function () {
    document.querySelector(".africa").addEventListener("click", function () {
        document.querySelector("#titleRegion").innerHTML = AF;
        document.querySelector(".absolute").innerHTML = String(africa18);
        document.querySelector(".relative").innerHTML = Math.round(ratio_africa) + "%";
        document.querySelector(".between0818").innerHTML = Number(Math.round(ratio_africa_africa)) + "%";
        document.querySelector(".between").innerHTML = String(Math.round(ratio_africa_kg)) + " kg";
        document.getElementById("chart").style.height = "4%";
    });
});
window.addEventListener("load", function () {
    document.querySelector(".asia").addEventListener("click", function () {
        document.querySelector("#titleRegion").innerHTML = AS;
        document.querySelector(".absolute").innerHTML = String(asia18);
        document.querySelector(".relative").innerHTML = Math.round(ratio_asia) + "%";
        document.querySelector(".between0818").innerHTML = Number(Math.round(ratio_asia_asia)) + "%";
        document.querySelector(".between").innerHTML = String(Math.round(ratio_asia_kg)) + " kg";
        document.getElementById("chart").style.height = "52%";
    });
});
window.addEventListener("load", function () {
    document.querySelector(".australia").addEventListener("click", function () {
        document.querySelector("#titleRegion").innerHTML = AU;
        document.querySelector(".absolute").innerHTML = String(australia18);
        document.querySelector(".relative").innerHTML = Math.round(ratio_australia) + "%";
        document.querySelector(".between0818").innerHTML = Number(Math.round(ratio_australia_australia)) + "%";
        document.querySelector(".between").innerHTML = String(Math.round(ratio_australia_kg)) + " kg";
        document.getElementById("chart").style.height = "7%";
    });
});
//# sourceMappingURL=script.js.map