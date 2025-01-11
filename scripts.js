let humanScore = 0, computerScore = 0;
let round = 0;

function updateScoreboard() {
    if (!(humanScore > 5 || computerScore > 5)) {
        const score = document.querySelector("div.score");
        score.textContent = `Human: ${humanScore} \t|\t Computer: ${computerScore}`;
    }  
}

function checkWinner() {
    const winner = document.querySelector("div.winner");
    if (humanScore == 5) {
        winner.textContent = "Human Won!";
        setTimeout(function() {
            alert("You won! AI who?? More like AI'nt nothing :D");
        }, 0);
        
    }

    if (computerScore == 5) {
        winner.textContent = "Computer Won!";
        setTimeout(function() {
            alert("You lost! AI takes over the world. ;(");
        }, 0);
    }
}

function getComputerChoice(){
    // Math.random() * n will give a random number from 0 to (n - 1)
    let rand, computerChoice;
    rand = parseInt(Math.random() * 3);
    computerChoice = (rand == 0)? "Rock": ((rand == 1)? "Paper" : "Scissors");
    const choiceText = document.querySelector("div.computerChoice");
    choiceText.textContent = `Computer Chose: ${computerChoice}`;
    return computerChoice
}

function playRound(humanChoice, computerChoice) {
    console.log(`Round ${++round}`)
    if ( humanChoice == computerChoice ) {
        console.log("It's A Draw!")
    } else if ( 
        humanChoice == "Rock" && computerChoice == "Scissors" ||
        humanChoice == "Paper" && computerChoice == "Rock" ||
        humanChoice == "Scissors" && computerChoice == "Paper"
    ) {
        humanScore++;
        // console code
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        console.log(`${humanChoice} beats ${computerChoice}. You win!`);
    } else {
        computerScore++;
        //console code
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        console.log(`${computerChoice} beats ${humanChoice}. You lose!`);
    }
    updateScoreboard();
    checkWinner();      
}

let humanChoice, computerChoice;
const buttons = document.querySelectorAll("button.btn");
buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        humanChoice = e.target.value;
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});




