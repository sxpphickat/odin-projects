function getComputerChoice() {
	const options = [
		"rock",
		"paper",
		"scissors"
	];
	const randomIndex = Math.floor(Math.random() * 3);
	return (options[randomIndex]);
}

function getPlayerChoice() {
	let playerSelection = prompt("type your choice:").toLowerCase();

	while (!["rock", "paper", "scissors"].includes(playerSelection)) {
		playerSelection = prompt(`invalid option, type rock, paper, or scissors`).toLowerCase();
	}
	return (playerSelection);
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	console.log("you play: ".concat(playerSelection));
	console.log("computer plays: ".concat(computerSelection));
	if (playerSelection == computerSelection) {
		return "It's a tie!";
	} else if (
		(playerSelection == "rock" && computerSelection == "scissors") ||
		(playerSelection == "scissors" && computerSelection == "paper") ||
		(playerSelection == "paper" && computerSelection == "rock")
	) {
		playerPoints += 1;
		return "You Win!";
	} else {
		computerPoints += 1;
		return "You Lose!";
	}
}

let playerPoints = 0;
let computerPoints = 0;

function game() {
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

game();

