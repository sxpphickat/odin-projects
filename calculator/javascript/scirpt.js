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

let leftOperand = 0; // vou multiplicar por 10 e dps somar o numero digitado
let rightOperand = 0;
let operationResult = 0;
let hadOperation = false;
let operator = "";

const buttons = document.querySelector(".keyboard");
const result = document.querySelector(".result p");
const equation = document.querySelector(".equation p");

function handleNumber(target) {
	if (hadOperation) {
		equation.innerText = "";
		hadOperation = false;
	}
	rightOperand *= 10;
	rightOperand += parseInt(target.id);
	result.innerText = rightOperand;
}

function handleOperator(target) {
	if (hadOperation) {
		leftOperand = operationResult;
	} else {
		leftOperand = rightOperand;
	}
	equation.innerText = ` ${leftOperand} ${target.innerText} `;
	operator = target.id;
}

function handleEquals(target) {
	switch (operator) {
		case "times":
			operationResult = multiply(leftOperand, rightOperand);
			break ;
		case "add":
			operationResult = add(leftOperand, rightOperand);
			break ;
		case "sub":
			operationResult = subtract(leftOperand, rightOperand);
			break ;
		case "div":
			operationResult = divide(leftOperand, rightOperand);
			break ;		
	}
	equation.innerText += ` ${rightOperand} =`;
	result.innerText = operationResult;
	rightOperand = 0;
	leftOperand = operationResult;
	hadOperation = true;
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
});