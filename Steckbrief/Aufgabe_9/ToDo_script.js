window.addEventListener("load", function () {
    const todolist = document.getElementById("todolist");
    const AddBtn = document.getElementById("addbtn");
    const TaskCounter = document.getElementById("taskCounter");
    var key = 0;
    let TaskInput = document.querySelector('#TaskInput[type="text"]');
    /* KEY PRESSED */
    document.getElementById("TaskInput").addEventListener("keydown", keypressed);
    function keypressed(key) {
        if (key.keyCode === 13 && TaskInput.value != "") {
            addTaskList();
            console.log("Enter Pressed");
        }
        else {
            console.log("wert wird eingegeben");
        }
    }
    /*========== LIST ADDER ============*/
    function addTaskList() {
        //TASKS DIV
        var buildDiv = document.createElement("div");
        buildDiv.classList.add("tasks");
        console.log("Build Div");
        //LIST ELEMENT
        const buildList = document.createElement("li");
        buildList.innerHTML = TaskInput.value;
        buildList.classList.add("list-item");
        buildDiv.appendChild(buildList);
        console.log("Build List");
        //ADD DELETE BUTTON
        const BtnDel = document.createElement("button");
        BtnDel.innerText = "Löschen";
        BtnDel.classList.add("BtnDel", "fas", "fa-trash");
        buildDiv.appendChild(BtnDel);
        console.log("Add Button Delete");
        //ADD CHECK BUTTON
        const BtnCheck = document.createElement("button");
        BtnCheck.classList.add("BtnCheck");
        buildDiv.appendChild(BtnCheck);
        console.log("Add Button Check");
        //ADD DIV to TODOLIST
        todolist.appendChild(buildDiv);
        TaskInput.value = "";
        key++;
        CountTask();
        console.log(TaskInput.value);
        // DELETE TASK
        BtnDel.addEventListener("click", deleteTask);
        function deleteTask() {
            console.log("delete task");
            buildDiv.remove();
            key--;
            console.log("Delete Count Number");
        }
        ;
        BtnCheck.addEventListener("click", check);
    }
    ;
    // TASK COUNTER
    function CountTask() {
        TaskCounter.innerHTML = key + "";
    }
    // CLASS CHANGE
    function check() {
        if (this.classList.contains("check")) {
            this.classList.remove("check");
            console.log("Check Klasse");
        }
        else {
            this.classList.add("check");
            console.log("keine Klasse");
        }
        ;
    }
    ;
});
//# sourceMappingURL=ToDo_script.js.map