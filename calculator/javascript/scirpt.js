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
		case "times":
			return multiply(numA, numB);
		case "add":
			return add(numA, numB);
		case "sub":
			return subtract(numA, numB);
		case "div":
			if(numB == 0) {
				alert("division by 0 not allowed!");
				console.log("division by 0 not allowed!");
				break ;
			}
			return divide(numA, numB);
		default:
			throw new Error("invalid operation");
	}
}

let leftOperand = 0;
let rightOperand = 0;
let operationResult = 0;
let hadOperation = false;
let operator = null;

const buttons = document.querySelector(".keyboard");
const result = document.querySelector(".result p");
const equation = document.querySelector(".equation p");

function handleNumber(target) {
	rightOperand *= 10;
	rightOperand += parseInt(target.id);
	result.innerText = rightOperand;
}

function handleOperator(target) {
	if (operator != null) {
		console.log("here");
		console.log({leftOperand});
		console.log({rightOperand});
		leftOperand = operate(leftOperand, rightOperand, operator);
		operator = target.id;
		if (leftOperand == undefined) {
			clean();
			return;
		}
		console.log({leftOperand});
		equation.innerText = `${leftOperand} ${target.innerText}`;
	} else {
		if (!hadOperation) {
			leftOperand = rightOperand;
			hadOperation = true;
		}
		result.innerText = rightOperand;
		operator = target.id;
		equation.innerText = ` ${leftOperand} ${target.innerText} `;
	}
	rightOperand = 0;
	result.innerText = rightOperand;
}

function handleEquals(target) {
	operationResult = operate(leftOperand, rightOperand, operator);
	if (operationResult == undefined) {
		clean();
		return ;
	}
	equation.innerText += ` ${rightOperand} =`;
	result.innerText = operationResult;
	rightOperand = 0;
	leftOperand = operationResult;
	hadOperation = true;
	operator = null;
}

function clean() {
	result.innerText = 0;
	equation.innerText = "";
	leftOperand = 0;
	rightOperand = 0;
	operationResult = 0;
	hadOperation = false;
	operator = null;
}

buttons.addEventListener("click", (event) => {
	const target = event.target;
	if (target.classList.contains("number")) {
		handleNumber(target);
	}
	if (target.classList.contains("operator")) {
		handleOperator(target);
	}
	if (target.classList.contains("eq")) {
		handleEquals(target);
	}
	if (target.classList.contains("clean-btn")) {
		clean();
	}
});