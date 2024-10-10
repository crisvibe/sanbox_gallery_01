
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
// Counter
//------------------------------

let count = 0;

let countLabel = document.getElementById("counter");

let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");
let increaseBtn = document.getElementById("increase");

decreaseBtn.onclick = function() {
    count = count - 1;
    countLabel.innerHTML = count;
}
resetBtn.onclick = function() {
    count = 0;
    countLabel.innerHTML = count;
}
increaseBtn.onclick = function() {
    count++;
    countLabel.innerHTML = count;
}

//------------------------------
// Snake Eyes dice game
// Random Number Generator
//------------------------------

// We need to roll the dice
// Rolldice()
// Show the result of the random value on the dice
// id="dice1".innerHTML = random value.

//--------------
// Dice Faces
//--------------
const diceFaces = {
    1: [
        ['1', '0', '1'], // First
        ['0', '1', '0'], // 0, 1, 0(second)  // diceFaces[1][1][2]
        ['1', '0', '1'], // 1, 0, 1(third)   // diceFaces[1][2][2]
    ],
    2: [
        ['0', '1', '0'],
        ['0', '1', '0'],
        ['0', '1', '0'],
    ]
}

const container = document.getElementById("diceContainer");

const df = document.getElementById("diceContainer")

console.log(diceFaces[1][1]);       // ['0', '1', '0']  // First
console.log(diceFaces[1][1][2]);    // 0                // Second
console.log(diceFaces[1][2][2]);    // 1                // Third

console.log(diceFaces[1].length)    // 3

function createDiv(diceValue) {

    for (i = 0; i < diceFaces[1].length; i++ ) {
        // const div = document.createElement("div");
        // div.className = "x";
        // container.appendChild(div);
        console.log(diceFaces[diceValue][0][i]);
        console.log(diceFaces[diceValue][1][i]);
        console.log(diceFaces[diceValue][2][i]);

    }
}
createDiv(2);


function addContent() {
    let elements = document.getElementsByClassName('x');
    console.log("x-elements: " + elements.length);

    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "hello";
    }
}
addContent()
//--------------

let rollDice = document.getElementById("rollDice");
let resultMessage = document.getElementById("resultMessage");

let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");

let userScoreBoard = document.getElementById("userScore");
let enemyScoreBoard = document.getElementById("enemyScore");
let userResult = 0;
let enemyResult = 0;

rollDice.onclick = function() {
    let randomNum1 = Math.floor( (Math.random() * 6) + 1 );
    dice1.innerHTML = randomNum1;

    let randomNum2 = Math.floor( (Math.random() * 6) + 1 );
    dice2.innerHTML = randomNum2;

    if (randomNum1 != 0){
        if (randomNum1 > randomNum2) {
            resultMessage.innerText = "You win! 🎉";
            userResult = userResult + 1;
        } else if (randomNum1 < randomNum2) {
            resultMessage.innerText = "Enemie wins 💀";
            enemyResult = enemyResult + 1;
        } else {
            resultMessage.innerText = "It's a draw 👻";
        }
    }
    userScoreBoard.innerHTML = userResult;
    enemyScoreBoard.innerHTML = enemyResult;
} 