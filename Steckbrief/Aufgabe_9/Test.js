window.addEventListener("load", function () {
    const AddBtn = document.getElementById("addbtn");
    AddBtn.addEventListener("click", listbuilder);
    const taskCounter = document.getElementById("taskCounter");
    const TaskInput = document.getElementById("TaskInput");
    var key = 0;
    const todolist = document.getElementById("todolist");
    function listbuilder() {
        //BUILD DIV
        const builddiv = document.createElement("div");
        builddiv.classList.add("todo");
        //BUILD LIST
        const buildli = document.createElement("li");
        buildli.classList.add("todotext");
        buildli.innerText = TaskInput.value;
        builddiv.appendChild(buildli);
        //BUILD BUTTON DELETE
        const buildBtnDel = document.createElement("button");
        buildBtnDel.classList.add("btnDel");
        buildBtnDel.innerText = "Delete";
        builddiv.appendChild(buildBtnDel);
        //BUILD BUTTON CHECK
        const buildBtnCheck = document.createElement("button");
        buildBtnCheck.classList.add("btnCheck");
        buildBtnCheck.innerHTML = "Check";
        builddiv.appendChild(buildBtnCheck);
        //APPEND TO TODOLIST
        todolist.appendChild(builddiv);
        key++;
    }
    ;
    console.log(todolist);
});
//# sourceMappingURL=Test.js.map