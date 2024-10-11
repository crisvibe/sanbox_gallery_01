
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
    let diceContainer = document.getElementById(`diceContainer${player}`)
    for (i = 0; i < diceFaces[1].length; i++ ) {
        for (y = 0; y < 3; y++) {
            // console.log(diceFaces[diceValue][i][y]);
            const div = document.createElement("div");
            div.className = "diceFace diceFace-" + diceFaces[diceValue][i][y];
            div.innerHTML = diceFaces[diceValue][i][y];
            diceContainer.appendChild(div);
        }
    }
}

createDice(5, 1);
createDice(5, 2);

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

    let min = 1;
    let max = 6;

    let randomNum1 = Math.floor((Math.random() * max) + min);
    // console.log(randomNum1);
    createDice(randomNum1 - 1, 1);

    let randomNum2 = Math.floor((Math.random() * max) + min);
    // console.log(randomNum2);
    createDice(randomNum2 - 1, 2);

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