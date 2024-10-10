let display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function calculateResult() {
    // let calculation = eval(display.value);
    // display.value = calculation;
    if (display.value != "" ) {
        try {
            display.value = eval(display.value);
        } catch(error) {
            display.value = "Error 🤦‍♀️";
        }
    }
}

function clearDisplay() {
    display.value = "";
}

function deleteCharacter() {
    let slizeOne = display.value.slice(0, -1);
    display.value = slizeOne;
}

// Change Background Color
let colorIndex = 0;
function changeBackground() {
    let colors = ["red", "green", "blue", "orange", "yellow", "purple"];
    document.getElementsByTagName("body")[0].style.backgroundColor = colors[colorIndex];
    colorIndex = colorIndex + 1;
    
    if (colorIndex > colors.length - 1) {
        colorIndex = 0;
    }
}