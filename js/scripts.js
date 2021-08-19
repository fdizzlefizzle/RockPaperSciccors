const choices = ["scissors", "paper", "rock"];
const round = document.getElementById("round")
const icons = document.getElementsByClassName("icon");
const playerScore = document.getElementById("player-score")
const computerScore = document.getElementById("computer-score")
const roundResult = document.getElementById("round-result")
const startGame = document.getElementById("start-game")

startGame.addEventListener("click", beginGame, false);
startGame.setAttribute('draggable', false);

function beginGame() {
    resetGame()
    playerScore.innerText = `${playerTotal}`;
    computerScore.innerText = `${computerTotal}`; 
    round.innerText = `${turn}`
} 

function resetGame() {
    playerTotal = 0;
    computerTotal = 0;
    turn = 1;
}

function getPlayerSelection() {
    playerSelection = this.getAttribute("id");
    this.classList.add("selected")
    this.addEventListener('transitionend', removeTransition => this.classList.remove("selected"))
    playRound(playerSelection)
}

for (i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', getPlayerSelection, false);
    icons[i].setAttribute('draggable', false)
}

function getComputerChoice(choices) {
    let computerOutput = choices[Math.floor(Math.random()* choices.length)]
    return computerOutput;
}

function roundWin() {
    playerTotal = playerTotal + 1;
    playerScore.innerText = playerTotal;
}

function roundLose() {
    computerTotal = computerTotal + 1;
    computerScore.innerText = computerTotal;
}



function playRound(playerSelection) {
    computerSelection = getComputerChoice(choices)
    if (playerSelection === computerSelection) {
        roundResult.innerText = "The round is tied!"
    } else if (
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissors")
    ) {
        roundWin();
        roundResult.innerText = `You WIN! ${playerSelection} beats ${computerSelection}`
    } else {
        roundLose();
        roundResult.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}


function game() {
    resetGame()
    turn = turn + 1
    console.log(turn)
    round.innerText = `${turn}`;
    playRound(playerSelection);
    (playerTotal === computerTotal) ?
        (console.log(`After ${turn} rounds, the game has ended in a draw! YOU DUMB BITCH`)):
        (playerTotal > computerTotal) ?
        (console.log(`After ${turn} rounds, YOU ARE THE WINNER YOU DUMB BITCH!!`)) : (console.log(`After ${turn} rounds, YOU FUCKING LOST YOU DUMB BITCH`))
}