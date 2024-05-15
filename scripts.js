//global variable
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    
    let randomNum = Math.floor(Math.random() * 10);
    
    let computerChoice;

    if (randomNum <3)
        computerChoice = "rock";

    else if (randomNum < 6)
        computerChoice = "paper";

    else
        computerChoice = "scissors";

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice (rock, paper, scissors): ");

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
   
    console.log("Computer chose: " + computerChoice);

    //formatting humanChoice to compare effectively
    humanChoice = (humanChoice.toLowerCase()).trim();

    console.log("You chose: " + humanChoice);
    
    
    switch(humanChoice) {

        case "rock":

            if(computerChoice == "paper") {
                console.log("You lose! Paper beats Rock.");
                computerScore++;
            }

            else if(computerChoice == "rock")
              console.log("It is a tie.");
            
            else {
                console.log("You win! Rock beats Scissors.");
                humanScore++;
            }

        break;

        case "paper":

            if(computerChoice == "scissors") {
                console.log("You lose! Scissor beats Paper.");
                computerScore++;
            }

            else if(computerChoice == "paper") 
              console.log("It is a tie.");

            else {
                console.log("You win! Paper beats Rock.");
                humanScore++;
            }

        break;

        case "scissors":

            if(computerChoice == "rock") {
                console.log("You lose! Rock beats Scissors.");
                computerScore++;
            }

            else if(computerChoice == "scissors")
              console.log("It is a tie.");

            else {
                console.log("You win! Scissors beats Paper.");
                humanScore++;
            }

        break;

                
        default:
            console.log("Please check the spelling and try again.")

    }

}

function playGame(rounds) {

    while(rounds > 0){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        rounds--;

    }

}

function displayScores() {
    console.log("Human:" + humanScore + "\tComputer:" + computerScore);
    if(humanScore > computerScore)
        console.log("You Win!");
    else if (humanScore < computerScore)
        console.log("You Lose!");
    else
        console.log("It is a tie.");
}

let playRounds = prompt("How many rounds do you want to play?");

playGame(playRounds);

displayScores();


