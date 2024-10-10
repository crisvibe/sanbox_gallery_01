
// document.getElementById('myH1').textContent = "My JS Site";
// document.getElementById("paragraph1").style.fontSize = "45px";
// document.getElementById("paragraph1").style.display = "none";

// This is an object
const cars = ["Volvo", "Audi", "Volkswagen"]; 
cars.push("Toyota");
function showCars() {
    let message;
    for (let car in cars) {
        message += cars[car] + " ";
    }
    document.getElementById("carCollection").innerHTML = message;
};

// Object
const car2 = { brand:"Fiat", model:"500", color:"white"};
// You can change a property:
car2.color = "red";
// You can add a property:
car2.owner = "Jonathan";

let selection = 'model';
car2[selection] = "martha";

console.log(car2[selection]);
console.log(car2['brand']);

function changeColor() {
    // Don't assign the color var outside of the function
    var currentColor = document.getElementById("colorChange").innerHTML;

    if (currentColor == "Red") {
        document.getElementById("colorChange").innerHTML = "Blue";
    } else {
        document.getElementById("colorChange").innerHTML = "Red";
    }
};

// Array literal. Initialize and array with the keyword selectedColors,
// and the variable let.
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 5;
console.log(selectedColors);

//------------------------------
// Functions
//------------------------------

function greet(name, lastName) {
    console.log("Hello " + name + " " + lastName);
}
greet("Cris", "Dev");

// Calculate a value
function square(number) {
    // let result = number * number;
    // console.log(result);
    return number * number;
}
console.log(square(16));
document.getElementById("squareResult").innerText = square(4);


//------------------------------
// Functions
//------------------------------