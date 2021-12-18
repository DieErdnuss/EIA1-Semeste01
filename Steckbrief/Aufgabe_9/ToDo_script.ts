declare var Artyom: any;

window.addEventListener("load", function() {

    const artyom: any = new Artyom();
    
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function(i: any, wildcard: string): void {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
        }
    });
    
    function startContinuousArtyom(): void {
        artyom.fatality();
    
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
    };
    
    startContinuousArtyom();


    
    /*============= TODo LIST =============*/
   
    const todolist: HTMLElement = document.getElementById("todolist");
    const addBtn: HTMLElement = document.getElementById("addbtn");
    const totalNumber: HTMLElement = document.getElementById("totalnum");
    const checkedNumber: HTMLElement = document.getElementById("checkednum");
    const deletedNumber: HTMLElement = document.getElementById("deletednum");
    let taskInput: HTMLInputElement = document.querySelector('#TaskInput[type="text"]') as HTMLInputElement;  


    var total: number = 0;
    var checked: number = 0;
    var deleted: number = 0;

    /*========= ADD TASK BUTTON ========*/

    

    /* ======== KEY LISTENER =========*/

    document.getElementById("TaskInput").addEventListener("keydown", keypressed);

    function keypressed (key): void {
        if (key.keyCode === 13 && taskInput.value != "") {
            addTaskList();
            console.log("Enter Pressed");           
        } else {
                console.log("wert wird eingegeben");
            };
            

    /*========== LIST ADDER ============*/

        function addTaskList(): void {
    //TASKS DIV
        var buildDiv: HTMLElement = document.createElement("div");
        buildDiv.classList.add("tasks");
        console.log("Build Div");
        
        //LIST ELEMENT
        const buildList: HTMLElement = document.createElement("li");
        buildList.innerHTML = taskInput.value;
        buildList.classList.add("list-item");
        buildDiv.appendChild(buildList);
        console.log("Build List");
            
        //ADD DELETE BUTTON
        const btnDel: HTMLElement = document.createElement("button");
        btnDel.innerText = "Löschen";
        btnDel.classList.add("BtnDel", "fas", "fa-trash");
        buildDiv.appendChild(btnDel);
        console.log("Add Button Delete");
            
        //ADD CHECK BUTTON
        const btnCheck: HTMLElement = document.createElement("button");
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
        function deleteTask(): void {
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
        
    };

    // TASK COUNTER

        function CountTask(): void {
            totalNumber.innerHTML = total + "";
            console.log(totalNumber);
        
        };



    // CLASS CHANGE
    
        function check(): void {
            if (this.classList.contains("check")) {
                this.classList.remove("check");
                checked--;
                checkedNumber.innerHTML = checked + "";
                

                console.log("Check Klasse");

                            
            } else {
                this.classList.add("check");
                console.log("keine Klasse");
                checked++;
                checkedNumber.innerHTML = checked + "";
            }
        };

});
