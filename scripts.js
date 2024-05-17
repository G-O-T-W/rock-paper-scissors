//global variable
let playerScore = 0;
let computerScore = 0;

function getComputerSelection() {
    
    let randomNum = Math.floor(Math.random()*3);

    switch(randomNum) {
        case 0: return "rock";
        break;
        case 1: return "paper";
        break;
        case 2: return "scissors";
        break;
        default: return console.log("error(1)");
    }
}

function fetchResult(playerChoice, computerChoice) {

    if(playerChoice == computerChoice) return "tie";

    else if ((playerChoice == "rock" && computerChoice == "scissors") || 
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")) return "win";

    else return "lose";
}

function updateScore(result) {
    if(result == "win") {
        playerScore++;
        let player = document.querySelector("#player");
        player.textContent = "Player: "+ playerScore;
    }
    if(result == "lose") {
        //debugger
        console.log(computerScore);
        computerScore++;
        let computer = document.querySelector("#computer");
        computer.textContent = "Computer: " + computerScore;
    }

}
//Need this function to capitalize first letter of a string 
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function updateMessage(result, playerChoice, computerChoice) {

    let message = document.querySelector("#message");
    switch(result) {
        case "win":
            message.textContent = "Computer chose " + computerChoice + ". You win! " + capitalize(playerChoice) + " beats " + computerChoice + ".";
        break;
        case "lose": 
            message.textContent = "Computer chose " + computerChoice +". You lose! " + capitalize(playerChoice) + " loses to " + computerChoice + ".";
        break;
        case "tie":
            message.textContent = "Computer chose " + computerChoice + ". It is a tie!"
        break;
        default: console.log("error(2)");
    }

}

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    let message = document.querySelector("#message");
    message.textContent = "Can you beat the computer?"

    let player = document.querySelector("#player");
    player.textContent = "Player: 0"

    let computer = document.querySelector("#computer");
    computer.textContent = "Computer: 0";

}

function playRound(playerSelection) {
   
    let computerSelection = getComputerSelection();
    let result = fetchResult(playerSelection, computerSelection);
    updateMessage(result, playerSelection, computerSelection);
    updateScore(result);

    if(playerScore == 5 || computerScore == 5)
        displayFinalScore();
}


function displayFinalScore() {
    if(playerScore > computerScore)
        alert("You Win!");
    else 
        alert("You Lose!");

    resetGame();
}

// Adding event listeners on buttons to call playRound() on click
const buttonsList = document.querySelectorAll("button");

// this.id returns the id of the button that was clicked 
buttonsList.forEach(button => {
    button.addEventListener("click", function (){
        playRound(this.id); 
    });
});


