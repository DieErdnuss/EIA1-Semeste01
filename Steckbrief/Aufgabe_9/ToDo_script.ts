declare var Artyom: any;

window.addEventListener("load", function() {

    /*============= TODo LIST =============*/
    
    const todolist: HTMLElement = document.getElementById("todolist");
    const addBtn: HTMLElement = document.getElementById("addbtn");
    const totalNumber: HTMLElement = document.getElementById("totalnum");
    const checkedNumber: HTMLElement = document.getElementById("checkednum");
    const deletedNumber: HTMLElement = document.getElementById("deletednum");
    let taskInput: HTMLInputElement = document.querySelector('#TaskInput[type="text"]') as HTMLInputElement;  

    document.getElementById("TaskInput").addEventListener("keydown", keypressed);


    var total: number = 0;
    var checked: number = 0;
    var deleted: number = 0;


    const artyom: any = new Artyom();

    
    

    artyom.addCommands({
        indexes: ["Danke"],
        smart: false,
        action: function(i: any): void {
        artyom.say("Bitteschön. Immer wieder gerne.");
        }
    });

    artyom.addCommands({
        indexes: ["Hallo"],
        smart: false,
        action: function(i: any): void {
        artyom.say("Hallo, wie kann ich dir helfen? Sage 'erstelle neue Aufgabe' um eine neue Aufgabe hinzuzufügen.");
        artyom.shutup("Stop");
        }
    });

    artyom.addCommands({
        indexes: ["Hilfe"],
        smart: false,
        action: function(i: any): void {
        artyom.say("Sage 'erstelle neue Aufgabe' um eine neue Aufgabe hinzuzufügen.");
        }
    });

    artyom.addCommands({
        indexes: ["stop *"],
        smart: true,
        action: function(i: any, stop: string): void {
        artyom.say(stop + " hält die Fresse.");
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
                0);
        };
        
    startContinuousArtyom();    

    /* ======== KEY LISTENER =========*/

    

    function keypressed (key): void {
        if (key.keyCode === 13 && taskInput.value != "") {
            addTaskList();
            
            console.log("Enter Pressed");           
        } else {
                console.log("wert wird eingegeben");
            };
    };
            
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
        action: function(i: any, wildcard: string): void {
            artyom.say("Neue Aufgabe " + wildcard + "wurde erstellt");
            //console.log("Neue Aufgabe wird erstellt: " + wildcard);
            addTaskList();
            
            }
        });   

        var speechInput: string = wildcard.value;

        

    

    function addTaskList(): void {
    //TASKS DIV
        var buildDiv: HTMLElement = document.createElement("div");
        buildDiv.classList.add("tasks");
        console.log("Build Div");
        
        //LIST ELEMENT
        const buildList: HTMLElement = document.createElement("li");
        
        if (taskInput.value != ""){
            buildList.innerHTML = taskInput.value}
            else {
                buildList.innerHTML = speechInput;
            }

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
            console.log("deleted tasks " + deleted);
            console.log(tasks);
            
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
