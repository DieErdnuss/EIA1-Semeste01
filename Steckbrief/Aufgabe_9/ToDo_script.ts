
window.addEventListener("load", function(){
   
const todolist:HTMLElement = document.getElementById("todolist");
const AddBtn:HTMLElement = document.getElementById("addbtn");
const TaskInput:HTMLInputElement = document.getElementById("TaskInput");
const TaskCounter:HTMLElement = document.getElementById("taskCounter");
var key:number = 0;

//let TaskIn = document.querySelector('TaskInput[type="text"]') as HTMLInputElement;

/* ADD TASK - BUTTON */

AddBtn.addEventListener("click", function(){
    addTasktoArrey();
    addTaskList();
});

//function CountTask(){
    TaskCounter.innerHTML = key + "";
//}

/* KEY PRESSED */

document.getElementById("TaskInput").addEventListener("keydown", keypressed);

    function keypressed(key){
       if (key.keyCode === 13){
        addTasktoArrey();
        addTaskList();     
        //neues HTML element muss entstehenn//
        } else {
            console.log("wert wird eingegeben");
        }
    };

    /* CLEAR BOX */

    function clearInput(){
        document.querySelector("input").innerHTML="";
    };

    /* TASK ARREY */
    
    const tasks:string [] =[];

    /* ADD TASK FUNC */

    function addTasktoArrey(){
        let newTask = TaskInput.value;
        tasks.push(newTask);
    };

/*========== LIST ADDER ============*/



    function addTaskList(){
    //TASKS DIV
        const buildDiv = document.createElement("div");
        buildDiv.classList.add("tasks");
        //LIST ELEMENT
            const buildList:HTMLElement = document.createElement("li");
            buildList.innerHTML = TaskInput.value;
            buildList.classList.add("list-item");
            buildDiv.appendChild(buildList);
        //ADD DELETE BUTTON
            const BtnDel = document.createElement("button");
            BtnDel.innerText = "Löschen";
            BtnDel.classList.add("BtnDel", "fas", "fa-trash");
            buildDiv.appendChild(BtnDel);
        //ADD CHECK BUTTON
            const BtnCheck = document.createElement("button");
            BtnCheck.classList.add("BtnCheck");
            buildDiv.appendChild(BtnCheck);
    //ADD DIV to TODOLIST
        todolist.appendChild(buildDiv);

        TaskInput.value="";

        key++;

        console.log(tasks);
    };

    const BtnCheck = document.getElementsByClassName("BtnCheck");

    for ( let i=0 ; i < BtnCheck.length; i++){
        BtnCheck[i].addEventListener("click", check)
    };
    
    function check(){
            if (this.classList.contains("check")){
                this.classList.remove("check")
                console.log("Klasse");
                            
            } else {
                this.classList.add("check")
                console.log("keine Klasse");
                
            };
    };
        
    

    });


    
    
   

    
    
    
    

});