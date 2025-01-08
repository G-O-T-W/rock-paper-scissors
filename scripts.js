const log = console.log("Reached")
let humanScore = 0, computerScore = 0

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
    if ( 
        humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper"
    ) {
        humanScore++
        console.log("Human Won")
    }
    else if ( humanChoice == computerChoice ) {
        console.log("It's A Draw!")
    }
    else {
        computerScore++
        console.log("Computer Won")
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
    if(humanScore > computerScore)
        console.log("Human Won!")
    else 
        console.log("Computer Won!")
}


playGame()



