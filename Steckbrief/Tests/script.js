window.addEventListener("load", function () {
    var btn = document.querySelector("#button");
    function changecolor() {
        if (btn.getAttribute("class") == "active") {
            btn.setAttribute("class", "inactive");
        }
        else {
            btn.setAttribute("class", "active");
        }
    }
    ;
    document.querySelector("#button").addEventListener("click", changecolor);
});
//# sourceMappingURL=script.js.map