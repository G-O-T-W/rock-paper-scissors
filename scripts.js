let humanScore = 0, computerScore = 0;
let round = 0;

function getComputerChoice(){
    // Math.random() * n will give a random number from 0 to (n - 1)
    let rand, computerChoice;
    rand = parseInt(Math.random() * 3);
    computerChoice = (rand == 0)? "rock": ((rand == 1)? "paper" : "scissors");
    const choiceText = document.querySelector("div.computerChoice");
    choiceText.textContent = `Computer Chose: ${computerChoice}`;
    return computerChoice
}

function playRound(button){
    let humanChoice, computerChoice;
    humanChoice = button.value;
    console.log(humanChoice);
    // computerChoice = getComputerChoice();

    // console.log(`Round ${++round}`)
    // if ( 
    //     humanChoice == "rock" && computerChoice == "scissors" ||
    //     humanChoice == "paper" && computerChoice == "rock" ||
    //     humanChoice == "scissors" && computerChoice == "paper"
    // ) {
    //     humanScore++
    //     humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    //     computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    //     console.log(`${humanChoice} beats ${computerChoice}. You win!`)
    // }
    // else if ( humanChoice == computerChoice ) {
    //     console.log("It's A Draw!")
    // }
    // else {
    //     computerScore++
    //     humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    //     computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    //     console.log(`${computerChoice} beats ${humanChoice}. You lose!`)
    // }
        
}

function playGame(){
    console.time("Game Duration")
    
    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)

    console.timeEnd("Game Duration")
    scoreboard = `SCOREBOARD
    Computer: ${computerScore}
    Human: ${humanScore}
    `
    console.log(scoreboard)
    if (humanScore > computerScore)
        console.log("Human Won!")
    else if (humanScore < computerScore)
        console.log("Computer Won!")
    else
        console.log("It's a Draw!")
}

const buttons = document.querySelectorAll("button.btn");
buttons.forEach((button) => {
    button.addEventListener("click", playRound(button));
});




