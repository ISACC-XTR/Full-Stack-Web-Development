 let tasks = [];

 const taskInput = document.getElementById("taskInput");
 const taskList = document.getElementById("taskList");
 const addButton = document.getElementById("addButton");

 
 
 function addTask() {
    if(!taskInput.value.trim()) {
         return alert("Please enter a task");
    } else {

        const inputValue = taskInput.value.trim();
   
        tasks.push({title: taskInput.value, completed: false}); 
        console.log("Current tasks:", tasks);

        console.log(inputValue);

        // Create new list item
        const itemList = document.createElement("li");
        itemList.className = "list-item";

        // Put the input value in the new list item
            itemList.innerHTML = `
            <span class="task-text">${inputValue}</span>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        `;

        // Adding the child element to the div
        taskList.appendChild(itemList);

        console.log(taskList);
    }
    taskInput.value = "";
    taskInput.focus();

    
 };

 // making the delete and complete buttons active
 taskList.addEventListener('click', function(YouJustClickedHere){
    const listItem = YouJustClickedHere.target.closest("li");

    // function for complete button
    if(YouJustClickedHere.target.classList.contains("complete-btn")){
        const taskText = listItem.querySelector(".task-text");
        taskText.classList.toggle("completed");

        // now let's change the text from "complete to undo"
        if(taskText.classList.contains("completed")){
            YouJustClickedHere.target.textContent = "Undo";
        }  else {
            YouJustClickedHere.target.textContent = "Complete";
        }
    }

    // the delete button
    if(YouJustClickedHere.target.classList.contains("delete-btn")){
        
        if(confirm("Are you sure you want to delete this task?")){
        listItem.remove();
    }
    }
    
 })