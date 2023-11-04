function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}


function operate(numA, numB, operator) {
	switch(operator) {
		case "+":
			return add(numA, numB);
		case "-":
			return subtract(numA, numB);
		case "*":
			return multiply(numA, numB);
		case "/":
			if(numB == 0) {
			//	alert("division by 0 not allowed!");
				console.log("division by 0 not allowed!");
				break ;
			}
			return divide(numA, numB);
		default:
			throw new Error("invalid operation");
	}
}


const result = operate(123, 0, "/");

console.log(result);

let leftOperand = 0; // vou multiplicar por 10 e dps somar o numero digitado
let rightOperand = 0;
let bufferNum = 0;

const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (event) => {
	const target = event.target;
	if (target.classList.contains("number")) {
		bufferNum *= 10;
		bufferNum += parseInt(target.id);
	}
	console.log({bufferNum})
});