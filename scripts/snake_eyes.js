
//------------------------------
// Snake Eyes dice game
// Random Number Generator
//------------------------------

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

function createDice(diceValue, player) {
    // Where the new div is to be appended
    let diceDivContainer = document.getElementById(`diceContainer${player}`)
    for (i = 0; i < 3; i++ ) {          // Counter for the dice-face row | 3 = diceFaces[1].length
        for (y = 0; y < 3; y++) {       // Counter for the dice-face cell
            // console.log(diceFaces[diceValue][i][y]);
            const div = document.createElement("div");
            div.className = "diceFace diceFace-" + diceFaces[diceValue][i][y];  // The .diceFace-0 is utlized to hide the 0-value. The .diceFace is to position and style the dice-dots.
            div.innerHTML = diceFaces[diceValue][i][y]; // Prints the individual dice-dot-graphics
            diceDivContainer.appendChild(div);
        }
    }
}

createDice(5, 1);
createDice(5, 2);

// Will be called when the user initializes the roll button | rollDice.onclick()
function deleteChildDiv() {
    if (diceContainer1.hasChildNodes() == true && diceContainer2.hasChildNodes() == true) {
        let i = 0;
        // Make sure to remove entire dice-graphics before creating new graphics to replace.
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

let rollDice = document.getElementById("rollDice");             // Get the button the user clicks on
let resultMessage = document.getElementById("resultMessage");   // For printing the results

// let dice1 = document.getElementById("dice1");
let dice = document.getElementById("dice");

let userScoreBoard = document.getElementById("userScore");
let enemyScoreBoard = document.getElementById("enemyScore");

let userResult = 0;
let enemyResult = 0;

rollDice.onclick = function() {
    deleteChildDiv();

    let min = 1;
    let max = 6;

    // To pass a random number into the createDice function. createDice creates the div and design. rollDice.onclick() creates the random dice values that are passed.
    let randomNum1 = Math.floor((Math.random() * max) + min);
    // console.log(randomNum1);
    createDice(randomNum1 - 1, 1);      // Parameters are diceValue, and Player #

    let randomNum2 = Math.floor((Math.random() * max) + min);
    // console.log(randomNum2);
    createDice(randomNum2 - 1, 2);

    // Here we determine the winners, using the randomNum variable.
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