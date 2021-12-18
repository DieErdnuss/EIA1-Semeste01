window.addEventListener("load", function () {
    /*============= TODo LIST =============*/
    const todolist = document.getElementById("todolist");
    const addBtn = document.getElementById("addbtn");
    const totalNumber = document.getElementById("totalnum");
    const checkedNumber = document.getElementById("checkednum");
    const deletedNumber = document.getElementById("deletednum");
    let taskInput = document.querySelector('#TaskInput[type="text"]');
    var total = 0;
    var checked = 0;
    var deleted = 0;
    /*========= ADD TASK BUTTON ========*/
    addBtn.addEventListener("click", addTaskList);
    /* ======== KEY LISTENER =========*/
    document.getElementById("TaskInput").addEventListener("keydown", keypressed);
    function keypressed(key) {
        if (key.keyCode === 13 && taskInput.value != "") {
            addTaskList();
            console.log("Enter Pressed");
        }
        else {
            console.log("wert wird eingegeben");
        }
    }
    ;
    /*========== LIST ADDER ============*/
    function addTaskList() {
        //TASKS DIV
        var buildDiv = document.createElement("div");
        buildDiv.classList.add("tasks");
        console.log("Build Div");
        //LIST ELEMENT
        const buildList = document.createElement("li");
        buildList.innerHTML = taskInput.value;
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