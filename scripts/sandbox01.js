
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
    0: [
        ['0', '0', '0'], // First
        ['0', '•', '0'], // 0, 1, 0(second)  // diceFaces[1][1][2]
        ['0', '0', '0'], // 1, 0, 1(third)   // diceFaces[1][2][2]
    ],
    1: [
        ['•', '0', '0'], // Fourth
        ['0', '0', '0'],
        ['0', '0', '•'],
    ],
    2: [
        ['•', '0', '0'],
        ['0', '•', '0'],
        ['0', '0', '•']
    ],
    3: [
        ['•', '0', '•'], // Fourth
        ['0', '0', '0'],
        ['•', '0', '•'],
    ],
    4: [
        ['•', '0', '•'], // Fourth
        ['0', '•', '0'],
        ['•', '0', '•'],
    ],
    5: [
        ['•', '0', '•'], // Fourth
        ['•', '0', '•'],
        ['•', '0', '•'],
    ],
}


// console.log(diceFaces[1][0]);       // ['1', '0', '1']  // First
// console.log(diceFaces[1][1][2]);    // 0                // Second
// console.log(diceFaces[1][2][2]);    // 1                // Third
// console.log(diceFaces[2][0][1]);    // 1                // Fourth

// console.log(diceFaces[1].length)    // 3
console.log("------- Dice Face: ------")

const diceContainer1 = document.getElementById("diceContainer1");
const diceContainer2 = document.getElementById("diceContainer2");

function createDice1(diceValue) {
    for (i = 0; i < diceFaces[1].length; i++ ) {
        for (y = 0; y < 3; y++) {
            // console.log(diceFaces[diceValue][i][y]);
            const div = document.createElement("div");
            div.className = "diceFace diceFace-" + diceFaces[diceValue][i][y];
            div.innerHTML = diceFaces[diceValue][i][y];
            diceContainer1.appendChild(div);
        }
    }
}
function createDice2(diceValue) {
    for (i = 0; i < diceFaces[1].length; i++ ) {
        for (y = 0; y < 3; y++) {
            // console.log(diceFaces[diceValue][i][y]);
            const div = document.createElement("div");
            div.className = "diceFace diceFace-" + diceFaces[diceValue][i][y];
            div.innerHTML = diceFaces[diceValue][i][y];
            diceContainer2.appendChild(div);
        }
    }
}
createDice1(5);
createDice2(5);


function deleteChildDiv() {
    if (diceContainer1.hasChildNodes() == true && diceContainer2.hasChildNodes() == true) {
        let i = 0;
        while (i <= 8 ) {
            diceContainer1.removeChild(diceContainer1.firstElementChild); // #diceContainer
            diceContainer2.removeChild(diceContainer2.firstElementChild); // #diceContainer
            i++;
        }
    } else {
        console.log("no child nodes");
    }
}
// deleteChildDiv();
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
    deleteChildDiv();

    let randomNum1 = Math.floor((Math.random() * 6) + 1);
    console.log(randomNum1);
    createDice1(randomNum1 - 1);

    let randomNum2 = Math.floor((Math.random() * 6) + 1);
    console.log(randomNum2);
    createDice2(randomNum2 - 1);

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