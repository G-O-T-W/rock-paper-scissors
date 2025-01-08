let humanScore = 0, computerScore = 0
let round = 0

function getComputerChoice(){
    // generate a random number
    // based on the number assign rock, paper or scissors as computerChoice
    // return the computerChoice
    let rand, computerChoice
    rand = parseInt(Math.random()*3)
    computerChoice = (rand == 0)? "rock": ((rand == 1)? "paper" : "scissors")
    return computerChoice
}


function getHumanChoice(){
    let menu, humanChoice, choice
    menu = `Type any of the options:
Rock
Paper
Scissors
    `
    humanChoice = prompt(menu).toLowerCase()
    while (!(humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors")) {
        console.warn("Please check your spelling!")
        humanChoice = prompt(menu).toLowerCase()
    }
        
    return humanChoice
 
}


function playRound(humanChoice, computerChoice){
    console.log(`Round ${++round}`)
    if ( 
        humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper"
    ) {
        humanScore++
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        console.log(`${humanChoice} beats ${computerChoice}. You win!`)
    }
    else if ( humanChoice == computerChoice ) {
        console.log("It's A Draw!")
    }
    else {
        computerScore++
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        console.log(`${computerChoice} beats ${humanChoice}. You lose!`)
    }
        
}


function playGame(){
    console.time("Game Duration")
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    }
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


playGame()



