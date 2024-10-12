const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addTaskButton = document.getElementById("add-task");

addTaskButton.addEventListener("click", addTask);
function addTask() {
    if (inputBox.value === '') {
        alert("Input can't be empty");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName = "SPAN") {
        e.target.parentElement.remove();
    }
    saveData();
}, 
false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function displayData() {
    if (localStorage.data != "") {
        // listContainer.innerHTML = localStorage.data;
        listContainer.innerHTML = localStorage.getItem("data");
    }
}
displayData();