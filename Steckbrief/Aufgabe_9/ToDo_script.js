window.addEventListener("load", function () {
    /*============= TODo LIST =============*/
    const todolist = document.getElementById("todolist");
    const addBtn = document.getElementById("addbtn");
    const totalNumber = document.getElementById("totalnum");
    const checkedNumber = document.getElementById("checkednum");
    const deletedNumber = document.getElementById("deletednum");
    let taskInput = document.querySelector('#TaskInput[type="text"]');
    document.getElementById("TaskInput").addEventListener("keydown", keypressed);
    var total = 0;
    var checked = 0;
    var deleted = 0;
    const artyom = new Artyom();
    artyom.addCommands({
        indexes: ["Danke"],
        smart: false,
        action: function (i) {
            artyom.say("Bitteschön. Immer wieder gerne.");
        }
    });
    artyom.addCommands({
        indexes: ["Hallo"],
        smart: false,
        action: function (i) {
            artyom.say("Hallo, wie kann ich dir helfen? Sage 'erstelle neue Aufgabe' um eine neue Aufgabe hinzuzufügen.");
            artyom.shutup("Stop");
        }
    });
    artyom.addCommands({
        indexes: ["Hilfe"],
        smart: false,
        action: function (i) {
            artyom.say("Sage 'erstelle neue Aufgabe' um eine neue Aufgabe hinzuzufügen.");
        }
    });
    artyom.addCommands({
        indexes: ["stop *"],
        smart: true,
        action: function (i, stop) {
            artyom.say(stop + " hält die Fresse.");
        }
    });
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 0);
    }
    ;
    startContinuousArtyom();
    /* ======== KEY LISTENER =========*/
    function keypressed(key) {
        if (key.keyCode === 13 && taskInput.value != "") {
            addTaskList();
            console.log("Enter Pressed");
        }
        else {
            console.log("wert wird eingegeben");
        }
        ;
    }
    ;
    //========== PUSH TASK TO ARREY ==========//
    /* ARREY

        var tasks: string [] = [];

    // FUNCTION
        function pushTasktoArrey(): void {
            tasks.push(taskInput.value);
            console.log(tasks);
        }
    */
    /*========== LIST ADDER ============*/
    artyom.addCommands({
        indexes: ["erstelle neue Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            artyom.say("Neue Aufgabe " + wildcard + "wurde erstellt");
            //console.log("Neue Aufgabe wird erstellt: " + wildcard);
            addTaskList();
        }
    });
    var speechInput = wildcard.value;
    function addTaskList() {
        //TASKS DIV
        var buildDiv = document.createElement("div");
        buildDiv.classList.add("tasks");
        console.log("Build Div");
        //LIST ELEMENT
        const buildList = document.createElement("li");
        if (taskInput.value != "") {
            buildList.innerHTML = taskInput.value;
        }
        else {
            buildList.innerHTML = speechInput;
        }
        buildList.classList.add("list-item");
        buildDiv.appendChild(buildList);
        console.log("Build List");
        //ADD DELETE BUTTON
        const btnDel = document.createElement("button");
        btnDel.innerText = "Löschen";
        btnDel.classList.add("BtnDel", "fas", "fa-trash");
        buildDiv.appendChild(btnDel);
        console.log("Add Button Delete");
        //ADD CHECK BUTTON
        const btnCheck = document.createElement("button");
        btnCheck.classList.add("BtnCheck");
        buildDiv.appendChild(btnCheck);
        console.log("Add Button Check");
        //ADD DIV to TODOLIST
        todolist.appendChild(buildDiv);
        // TASK INPUT CLEAR
        taskInput.value = "";
        total++;
        CountTask();
        console.log(taskInput.value);
        // DELETE TASK
        btnDel.addEventListener("click", deleteTask);
        function deleteTask() {
            console.log("delete task");
            buildDiv.remove();
            total--;
            deleted++;
            if (btnCheck.classList.contains("check")) {
                checked--;
            }
            totalNumber.innerHTML = total + "";
            checkedNumber.innerHTML = checked + "";
            deletedNumber.innerHTML = deleted + "";
            console.log("Delete Count Number");
            console.log("deleted tasks " + deleted);
            console.log(tasks);
        }
        btnCheck.addEventListener("click", check);
    }
    ;
    // TASK COUNTER
    function CountTask() {
        totalNumber.innerHTML = total + "";
        console.log(totalNumber);
    }
    ;
    // CLASS CHANGE
    function check() {
        if (this.classList.contains("check")) {
            this.classList.remove("check");
            checked--;
            checkedNumber.innerHTML = checked + "";
            console.log("Check Klasse");
        }
        else {
            this.classList.add("check");
            console.log("keine Klasse");
            checked++;
            checkedNumber.innerHTML = checked + "";
        }
    }
    ;
});
//# sourceMappingURL=ToDo_script.js.map