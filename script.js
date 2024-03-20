// function for submiting the value by clicking the submit button
let button = document.querySelector("button");
let listItem
let form
let clearIcon 

button.addEventListener("click",(e) => {
    form = document.querySelector("form");
    // getting the input field
    let TaskName = form.elements["TaskName"].value;
    let taskTiming = form.elements["TaskTiming"].value;
    let taskPriority = form.elements["Taskpriority"].value;
    
    
    // Check the form value
    if(TaskName ==="" && taskTiming === "" && taskPriority!==""){
        alert("Give all information for showing proper list");
    }
   
    let list = document.querySelector("#list");
    listItem = document.createElement("ul");
    listItem.setAttribute('style', 'display:flex; justify-content:space-evenly; list-style:none; cursor:pointer; font-size:20px;');
    listItem.innerHTML = `<li> ${taskTiming} </li>
   <li> ${taskPriority}</li>
   <li> ${TaskName}</li>`;
   

    if (TaskName != "" && taskTiming != ""){
        list.append(listItem );
    }
    e.preventDefault();
})
// Reset the form
button.addEventListener("click", (e) => {
    form.reset()
})

// creating a function that show or hide the to-do list
let seeYourList = document.querySelector("#seeYourList");
seeYourList.addEventListener("click", () => {
    let listSection = document.querySelector(".listSection");
    listSection.classList.toggle("invisibel");
})

       
       
        
       



    




























