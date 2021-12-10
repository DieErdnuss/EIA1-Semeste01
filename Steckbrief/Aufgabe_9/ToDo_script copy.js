window.addEventListener("load", function () {
    /* KEY PRESSED FUNC*/
    function keypressed(key) {
        if (key.keyCode === 13) {
            addTask();
            //neues HTML element muss entstehenn//
        }
        else {
            console.log("wert wird eingegeben");
        }
    }
    ;
    /* CLEAR BOX */
    function clearInput() {
        document.querySelector("input").innerHTML = "";
    }
    /* DELETE TASK */
    function deleteTask() {
        console.log("delete");
        tasks.pop();
    }
    /* TASK ARREY */
    const tasks = [];
    /* ADD TASK FUNC */
    function addTask() {
        let newTask = document.getElementById("newTask").value + "";
        tasks.push(newTask);
        const buildDiv = document.createElement("div");
        buildDiv.classList.add("tasks");
        const buildList = document.createElement("li");
        buildList.innerHTML = tasks + "";
        console.log(tasks);
    }
    ;
    document.getElementsByClassName("check").addEventListener("click", check);
    document.getElementById("newTask").addEventListener("keydown", keypressed);
    document.getElementsByClassName("delete").addEventListener("click", deleteTask);
});
//# sourceMappingURL=ToDo_script%20copy.js.map