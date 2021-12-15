
window.addEventListener("load", function(){
   
    const todolist:HTMLElement = document.getElementById("todolist");
    const AddBtn:HTMLElement = document.getElementById("addbtn");
    const TaskCounter:HTMLElement = document.getElementById("taskCounter");
    var key:number = 0;

    let TaskInput = document.querySelector('#TaskInput[type="text"]') as HTMLInputElement;  
   

    /* KEY PRESSED */

    document.getElementById("TaskInput").addEventListener("keydown", keypressed);

    function keypressed(key) {
        if (key.keyCode === 13 && TaskInput.value != ""){
            addTaskList();
            console.log("Enter Pressed");           
        } else {
                console.log("wert wird eingegeben");
            }
        }

/*========== LIST ADDER ============*/

    function addTaskList(){
    //TASKS DIV
        var buildDiv:HTMLElement = document.createElement("div");
        buildDiv.classList.add("tasks");
        console.log("Build Div");
        
        //LIST ELEMENT
        const buildList:HTMLElement = document.createElement("li");
        buildList.innerHTML = TaskInput.value;
        buildList.classList.add("list-item");
        buildDiv.appendChild(buildList);
        console.log("Build List");
            
        //ADD DELETE BUTTON
        const BtnDel:HTMLElement = document.createElement("button");
        BtnDel.innerText = "Löschen";
        BtnDel.classList.add("BtnDel", "fas", "fa-trash");
        buildDiv.appendChild(BtnDel);
        console.log("Add Button Delete");
            
        //ADD CHECK BUTTON
        const BtnCheck:HTMLElement = document.createElement("button");
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
        function deleteTask(){
            console.log("delete task");
            buildDiv.remove();
            key--;
            console.log("Delete Count Number");            
        };
        
        BtnCheck.addEventListener("click", check);
        
    };

    // TASK COUNTER

    function CountTask(){
        TaskCounter.innerHTML = key + "";
        }



    // CLASS CHANGE
    
    function check(){
            if (this.classList.contains("check")){
                this.classList.remove("check")
                console.log("Check Klasse");
                            
            } else {
                this.classList.add("check")
                console.log("keine Klasse");
            };
        };

   

    
});
