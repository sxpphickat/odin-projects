let playerPoints = 0;
let computerPoints = 0;

const playerChoice = document.querySelector("#choice");
playerChoice.addEventListener("click", getPlayerChoice);


function getComputerChoice() {
	const options = [
		"rock",
		"paper",
		"scissors"
	];
	const randomIndex = Math.floor(Math.random() * 3);
	return (options[randomIndex]);
}

const result = document.querySelector("#result");

function getPlayerChoice(event) {
	const target = event.target;
	let choice;

	switch (target.id) {
		case "rock":
			choice = "rock";
			break ;
		case "paper":
			choice = "paper";
			break ;
		case "scissors":
			choice = "scissors";
			break ;
		default:
			return ;

		}
	playRound(choice, getComputerChoice());
}

function checkWinner() {
	if (playerPoints == 5) {
		document.querySelector("#overlay h1").innerText = "YOU WIN 🏆🏆🏆";
		overlayOn();
	//	alert("You Win !!");
	//	window.location.reload();
	} else if (computerPoints == 5) {
		document.querySelector("#overlay h1").innerText = "COMPUTER WINS 🏆🏆🏆";
		overlayOn();
		///	alert("Computer Win!!");
	//	window.location.reload();
	}
}

const playerChoiceEmoji = document.querySelector("#player-result");
const computerChoiceEmoji = document.querySelector("#computer-result");
const winner = document.querySelector("#winner");


function getEmojiFromSelection(selection) {
	switch (selection) {
		case "rock":
			return "🪨";
		case "paper":
			return "📜";
		case "scissors":
			return "✂️";
	}
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();

	playerChoiceEmoji.innerText = getEmojiFromSelection(playerSelection);
	computerChoiceEmoji.innerText = getEmojiFromSelection(computerSelection);

	if (playerSelection == computerSelection) {
		winner.innerText = "🤝";
		//return "It's a tie!";
	} else if (
		(playerSelection == "rock" && computerSelection == "scissors") ||
		(playerSelection == "scissors" && computerSelection == "paper") ||
		(playerSelection == "paper" && computerSelection == "rock")
	) {
		playerPoints += 1;
		winner.innerText = "🫵";
	} else {
		computerPoints += 1;
		winner.innerText = "🤖";
	}
	updateScoreBoard();
	checkWinner();
}

const playerScore = document.querySelector("#player-score .score");
const computerScore = document.querySelector("#computer-score .score");

function updateScoreBoard() {
	playerScore.innerHTML = playerPoints;
	computerScore.innerHTML = computerPoints;
}

const overlay = document.querySelector(".overlay");


function overlayOn() {
	document.querySelector("#overlay").style.display = "block";
}


function overlayOff() {
	document.querySelector("#overlay").style.display = "none";
}


const overlayButton = document.querySelector("#overlay button");

overlayButton.addEventListener("click", () => {
	window.location.reload();
});

/* function game() {
	for (let i = 0; i < 5; i += 1) {
		console.log("| scoreboar  |");
		console.log(`| computer: ${computerPoints}|`);
		console.log(`| player: ${playerPoints}  |`);
		console.log(playRound(getPlayerChoice(), getComputerChoice()));
	}
	console.log(`Final Scoce:`);
	console.log(`| computer: ${computerPoints}|`);
	console.log(`| player: ${playerPoints}  |`);
	if (playerPoints > computerPoints) {
		console.log("PLAYER WINS MD5 🏆");
	} else {
		console.log("COMPUTER WINS MD5 🏆");
	}
}

game(); */

