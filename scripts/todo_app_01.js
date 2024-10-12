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
        inputBox.value =  "";
    }
}