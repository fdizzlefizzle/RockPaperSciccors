const choices = ["scissors", "paper", "rock"];
let playerSelection
let computerSelection
let playerTotal 
let computerTotal
let turn

function computerPlay(choices) {
    let computerOutput = choices[Math.floor(Math.random()* choices.length)]
    return computerOutput;
}

function roundWin() {
    return playerTotal = playerTotal + 1;
}

function roundLose() {
    return computerTotal = computerTotal + 1;
}

function resetGame() {
    playerTotal = 0;
    computerTotal = 0;
    turn = 0;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie Game";
    } else if (
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissors")
    ) {
        roundWin();
        return "Congratulations you win";
    } else {
        roundLose();
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    resetGame()
    for (i = 0; i <5; i++) {
        turn = turn + 1
        console.log(`Turn ${turn}`)
        
        while (true) {
            playerSelection = prompt("Scissors, Paper, or Rock?"); 
            
            if (playerSelection === null){ 
                continue;                
            } else if (
                (playerSelection.toLowerCase() === "scissors") ||
                (playerSelection.toLowerCase() === "paper") ||
                (playerSelection.toLowerCase() === "rock")
            ) {
                playerSelection = playerSelection.toLowerCase()
                break;
            }
        }

        console.log(`Player chooses ${playerSelection}`)

        computerSelection = computerPlay(choices)
        console.log(`Computer chooses ${computerSelection}`)

        playRound(playerSelection, computerSelection)
        console.log(playRound(playerSelection, computerSelection))
    }
    (playerTotal === computerTotal) ?
        (console.log(`After ${turn} rounds, the game has ended in a draw! YOU DUMB BITCH`)):
        (playerTotal > computerTotal) ?
        (console.log(`After ${turn} rounds, YOU ARE THE WINNER YOU DUMB BITCH!!`)) : (console.log(`After ${turn} rounds, YOU FUCKING LOST YOU DUMB BITCH`))    
}
game()