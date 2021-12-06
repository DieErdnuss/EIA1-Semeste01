var maxMember = 15;
window.addEventListener("load", function () {
    document.querySelector("#btn").addEventListener("click", Member);
    function Member() {
        for (var anzahlMember = 0; anzahlMember <= maxMember; anzahlMember++) {
            document.querySelector("#MemberNr").innerHTML = anzahlMember + "";
            console.log("Anzahl Member" + anzahlMember);
        }
    }
});
//# sourceMappingURL=script.js.map