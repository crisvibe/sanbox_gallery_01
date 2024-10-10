let operator = null;
document.getElementById("addButton").addEventListener("click", () => {
    operator = "+";
    document.getElementById("operatorMessage").innerHTML = "Add";
});
document.getElementById("subtractButton").addEventListener("click", () => {
    operator = "-";
    document.getElementById("operatorMessage").innerHTML = "Subtract";
});
document.getElementById("multiplyButton").addEventListener("click", () => {
    operator = "*";
    document.getElementById("operatorMessage").innerHTML = "Multiply";
});
document.getElementById("divideButton").addEventListener("click", () => {
    operator = "/";
    document.getElementById("operatorMessage").innerHTML = "Divide";
});


document.getElementById("calculate").addEventListener("click", calculate);
function calculate(){
    let input1 = Number(document.getElementById("firstInput").value);
    let input2 = Number(document.getElementById("secondInput").value);
    let display = document.getElementById("display");

    switch (operator) {
        case ("+"):
            display.value = input1 + input2;
            break;
        case ("-"):
            display.value = input1 - input2;
            break;
        case ("*"):
            display.value = input1 * input2;
            break;
        case ("/"):
            display.value = input1 / input2;
            break;
        default:
            console.log("Please choose operator");
            break;
    }
}