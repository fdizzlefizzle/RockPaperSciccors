const choices = ["scissors", "paper", "rock"];
const round = document.getElementById("round")
const icons = document.getElementsByClassName("icon");
const playerScore = document.getElementById("player-score")
const computerScore = document.getElementById("computer-score")
const roundResult = document.getElementById("round-result")
const startGame = document.getElementById("start-game")
const restart = document.getElementById("restart")
const gameResult = document.getElementById("game-result")
const playAgain = document.getElementById("play-again")

startGame.addEventListener("click", beginGame, false);
startGame.setAttribute('draggable', false);
restart.addEventListener("click", resetGame, true);
restart.setAttribute('draggable', false);

function beginGame() {
    resetGame()
    document.getElementById("startScreen").style.width = "0%";
} 

function resetGame() {
    playerTotal = 0;
    computerTotal = 0;
    turn = 1;
    playerScore.innerText = `${playerTotal}`;
    computerScore.innerText = `${computerTotal}`; 
    round.innerText = `${turn}`
    for (i = 0; i < icons.length; i++) {
        icons[i].addEventListener('click', getPlayerSelection, false);
        icons[i].setAttribute('draggable', false)
    }
}

function getPlayerSelection() {
    playerSelection = this.getAttribute("id");
    this.classList.add("selected")
    this.addEventListener('transitionend', removeTransition => this.classList.remove("selected"))
    playRound(playerSelection)
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

function checkWinner() {
    if (playerTotal === 5 || computerTotal === 5) {
        for (i = 0; i < icons.length; i++) {
            icons[i].removeEventListener('click', getPlayerSelection, false);
        }
        return true
    }
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
        roundResult.innerText = `You win this round! ${playerSelection} beats ${computerSelection}`
    } else {
        roundLose();
        roundResult.innerText = `You lose this round! ${computerSelection} beats ${playerSelection}`;
    }
    
    //activate overlay and announce winner

    if (checkWinner()) {
        document.getElementById("startScreen").style.width = "100%";
        (playerTotal > computerTotal) ? gameResult.innerText = "YOU WON!!": gameResult.innerText = "YOU LOSE!!";
        playAgain.innerText = "Play Again?"
        
    }
}
