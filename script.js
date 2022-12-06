// To create a tic tac toe game
// Ask user if they want to go first or if they want the computer to go first. 
// Could set it up with 9 divs in html/css
// Player is X and the computer is O 
// Restrict input to valid (X)
// Maybe use a button below each box instead of having an input for convenience sake.

const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");
const fourth = document.querySelector("#fourth");
const fifth = document.querySelector("#fifth");
const sixth = document.querySelector("#sixth");
const seventh = document.querySelector("#seventh");
const eighth = document.querySelector("#eighth");
const ninth = document.querySelector("#ninth");
const playerButton = document.querySelector("#player-button");
const computerButton = document.querySelector("#computer-button");
const playAgain = document.querySelector("#play-again");
const instructions = document.querySelector("#instructions");
const TOTAL_BOXES = 9;
// For gameState, 0 would be empty, 1 would be player clicked, 2 would be computer clicked. 
let gameState = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let gameEnded = false;

function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

function gameOver(player) {
    if (player === "human") {
        //player wins!
        gameEnded = true;
        instructions.innerText = "You win! Congratulations! Please click Reset if you would like to play again.";
    }
    else if (player === "computer") {
        //computer wins!
        gameEnded = true;
        instructions.innerText = "The computer wins. Better luck next time! Please click Reset if you would like to play again.";
    }
    else {
        //it's a tie!
        gameEnded = true;
        instructions.innerText = "The game ends in a tie. Please click Reset if you would like to play again.";
    }
}

function checkWinner() {
    let winner = "";
    // I decided not to use nested arrays here so the logic is kind of ugly, but I don't want to go back and rewrite it all unless I have a lot of extra time. 
//If any of these are true, human player wins. 
    if (gameState[0] === 1 && gameState[1] === 1 && gameState[2] === 1) {
        winner = "human";
        first.style.backgroundColor = "green";
    }
    else if (gameState[3] === 1 && gameState[4] === 1 && gameState[5] === 1) {
        first.style.backgroundColor = "green";
        winner = "human";
    }
    else if (gameState[6] === 1 && gameState[7] === 1 && gameState[8] === 1) {
        first.style.backgroundColor = "green";
        winner = "human";
    }
    else if (gameState[0] === 1 && gameState[3] === 1 && gameState[6] === 1) {
        first.style.backgroundColor = "green";
        winner = "human";
    }
    else if (gameState[1] === 1 && gameState[4] === 1 && gameState[7] === 1) {
        first.style.backgroundColor = "green";
        winner = "human";
    }
    else if (gameState[2] === 1 && gameState[5] === 1 && gameState[8] === 1) {
        first.style.backgroundColor = "green";
        winner = "human";
    }
    else if (gameState[0] === 1 && gameState[4] === 1 && gameState[8] === 1) {
        first.style.backgroundColor = "green";
        winner = "human";
    }
    else if (gameState[2] === 1 && gameState[4] === 1 && gameState[6] === 1) {
        first.style.backgroundColor = "green";
        winner = "human";
    }
//If any of these are true, computer wins.
    else if (gameState[0] === 2 && gameState[1] === 2 && gameState[2] === 2) {
        winner = "computer";
    }
    else if (gameState[3] === 2 && gameState[4] === 2 && gameState[5] === 2) {
        winner = "computer";
    }
    else if (gameState[6] === 2 && gameState[7] === 2 && gameState[8] === 2) {
        winner = "computer";
    }
    else if (gameState[0] === 2 && gameState[3] === 2 && gameState[6] === 2) {
        winner = "computer";
    }
    else if (gameState[1] === 2 && gameState[4] === 2 && gameState[7] === 2) {
        winner = "computer";
    }
    else if (gameState[2] === 2 && gameState[5] === 2 && gameState[8] === 2) {
        winner = "computer";
    }
    else if (gameState[0] === 2 && gameState[4] === 2 && gameState[8] === 2) {
        winner = "computer";
    }
    else if (gameState[2] === 2 && gameState[4] === 2 && gameState[6] === 2) {
        winner = "computer";
    }
    else if (gameState.includes(0) === false) {
        winner = "nobody";
    }
    return winner;
}

function checkMove(num) {
    if (gameState[num] === 0){
        return true;
    }
    return false;
}

function playerTurn(e) {
    if (computerButton.disabled === false && playerButton.disabled === false) {
        computerButton.disabled = true;
    }
    if (gameEnded === false && e.currentTarget.innerText === "") {
        e.currentTarget.innerText = "X";
        //Have to subtract one here to help it work with the array. 
        let currentNum = parseInt(e.currentTarget.dataset.number) - 1;
        // Set state to 1 for player clicked
        gameState[currentNum] = 1;
        if (checkWinner() === "human") {
            gameOver("human");
        }
        else if (checkWinner() === "nobody") {
            gameOver("nobody");
        }
        enemyTurn();
    }
}

function playerStart() {
    computerButton.disabled = true;
    instructions.classList.remove("hidden");
}

function computerStart() {
    playerButton.disabled = true;
    enemyTurn();
}


function enemyTurn() {
    // Make computer's move
    if (gameEnded === false) {
        let goodMove = false;
        let rand = 0;
        if (gameState.includes(0) === false) {
            gameOver("nobody");
        }
        while (goodMove === false) {
            rand = generateRandomNumber(TOTAL_BOXES);
            goodMove = checkMove(rand);
        }
        gameState[rand] = 2;
        // Convert it back away from array format. 
        boxNumber = rand + 1;
        // I don't love the look of all these ifs but I couldn't think of a better way to do it
        if (boxNumber === 1) {
            first.innerText = "O";
        }
        if (boxNumber === 2) {
            second.innerText = "O";
        }
        if (boxNumber === 3) {
            third.innerText = "O";
        }
        if (boxNumber === 4) {
            fourth.innerText = "O";
        }
        if (boxNumber === 5) {
            fifth.innerText = "O";
        }
        if (boxNumber === 6) {
            sixth.innerText = "O";
        }
        if (boxNumber === 7) {
            seventh.innerText = "O";
        }
        if (boxNumber === 8) {
            eighth.innerText = "O";
        }
        if (boxNumber === 9) {
            ninth.innerText = "O";
        }
        if (checkWinner() === "computer") {
            gameOver("computer");
        }
        else if (checkWinner() === "nobody") {
            gameOver("nobody");
        }
        instructions.classList.remove("hidden");
    }
}

function resetGame() {
    first.innerText = "";
    second.innerText = "";
    third.innerText = "";
    fourth.innerText = "";
    fifth.innerText = "";
    sixth.innerText = "";
    seventh.innerText = "";
    eighth.innerText = "";
    ninth.innerText = "";
    first.style.backgroundColor = "#ffffff"
    second.style.backgroundColor = "#ffffff"
    third.style.backgroundColor = "#ffffff"
    fourth.style.backgroundColor = "#ffffff"
    fifth.style.backgroundColor = "#ffffff"
    sixth.style.backgroundColor = "#ffffff"
    seventh.style.backgroundColor = "#ffffff"
    eighth.style.backgroundColor = "#ffffff"
    ninth.style.backgroundColor = "#ffffff"
    playerButton.disabled = false;
    computerButton.disabled = false;
    instructions.classList.add("hidden");
    instructions.innerText = "Please click a box to mark it";
    gameEnded = false;
    gameState = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}


playerButton.addEventListener("click", playerStart)
computerButton.addEventListener("click", computerStart);
playAgain.addEventListener("click", resetGame);
first.addEventListener("click", playerTurn);
second.addEventListener("click", playerTurn);
third.addEventListener("click", playerTurn);
fourth.addEventListener("click", playerTurn);
fifth.addEventListener("click", playerTurn);
sixth.addEventListener("click", playerTurn);
seventh.addEventListener("click", playerTurn);
eighth.addEventListener("click", playerTurn);
ninth.addEventListener("click", playerTurn);
