/*VARIABELN*/
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
/*DISPLAY*/
console.log('Die Emission von Africa ist:', Math.round(africa18), 'kg CO².', "\n", 'Relativ zur Gesamtemission der Welt verursacht Africa damit', Math.round(ratio_africa), '%.', "\n", 'Für Africa hat sich 2018 im Vergleich zu 2008 die Emission um', Math.round(ratio_africa_africa), '% verändert.', "\n", '2018 im Vergleich zu 2008 sind das', Math.round(ratio_africa_kg), 'kg CO2.');
console.log("Die Emission von Süd Amerika ist:", Math.round(samerica18), "kg CO².", "\n", "Relativ zur Gesamtemission der Welt verursacht Süd Amerika damit", Math.round(ratio_samerica), "%.", "\n", "Für Süd Amerika hat sich 2018 im Vergleich zu 2008 die Emission um", Math.round(ratio_samerica_samerica), "% verändert.", "\n", "2018 im Vergleich zu 2008 sind das", Math.round(ratio_samerica_kg), "kg CO2.");
console.log("Die Emission von Europa ist:", Math.round(africa18), "kg CO².", "\n", "Relativ zur Gesamtemission der Welt verursacht Europa damit", Math.round(ratio_europe), "%.", "\n", "Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um", Math.round(ratio_europe_europa), "% verändert.", "\n", "2018 im Vergleich zu 2008 sind das", Math.round(ratio_europe_kg), "kg CO2.");
console.log("Die Emission von Nord Amerika ist:", Math.round(namerica18), "kg CO².", "\n", "Relativ zur Gesamtemission der Welt verursacht Nord Amerika damit", Math.round(ratio_namerica), "%.", "\n", "Für Nord Amerika hat sich 2018 im Vergleich zu 2008 die Emission um", Math.round(ratio_namerica_namerica), "% verändert.", "\n", "2018 im Vergleich zu 2008 sind das", Math.round(ratio_namerica_kg), "kg CO2.");
console.log("Die Emission von Asien ist:", Math.round(africa18), "kg CO².", "\n", "Relativ zur Gesamtemission der Welt verursacht Asien damit", Math.round(ratio_asia), "%.", "\n", "Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um", Math.round(ratio_asia_asia), "% verändert.", "\n", "2018 im Vergleich zu 2008 sind das", Math.round(ratio_asia_kg), "kg CO2.");
console.log("Die Emission von Australien ist:", Math.round(australia18), "kg CO².", "\n", "Relativ zur Gesamtemission der Welt verursacht Australien damit", Math.round(ratio_australia), "%.", "\n", "Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um", Math.round(ratio_australia_australia), "% verändert.", "\n", "2018 im Vergleich zu 2008 sind das", Math.round(ratio_australia_kg), "kg CO2.");
//# sourceMappingURL=script.js.map