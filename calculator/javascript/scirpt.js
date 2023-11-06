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


/* const result = operate(123, 0, "/");

console.log(result); */

let leftOperand = 0; // vou multiplicar por 10 e dps somar o numero digitado
let rightOperand = 0;
let operator = "";
let bufferNum = 0;
let operationResult = 0;

const buttons = document.querySelector(".buttons");

const result = document.querySelector(".result p");
const equation = document.querySelector(".equation p");

buttons.addEventListener("click", (event) => {
	const target = event.target;
	if (target.classList.contains("number")) {
		/* equation.innerText = operationResult; */
		bufferNum *= 10;
		bufferNum += parseInt(target.id);
		result.innerText = bufferNum;
	}
	if (target.classList.contains("operator")) {
		leftOperand = bufferNum;
		equation.innerText += ` ${leftOperand} `;
		equation.innerText += ` ${target.innerText} `;
		bufferNum = 0;
		operator = target.id;
	}
	if (target.classList.contains("eq")) {
		console.log("here");
		switch (operator) {
			case "times":
				operationResult = multiply(leftOperand, bufferNum);
				break ;
			case "add":
				operationResult = add(leftOperand, bufferNum);
				break ;
			case "sub":
				operationResult = subtract(leftOperand, bufferNum);
				break ;
			case "div":
				operationResult = divide(leftOperand, bufferNum);
				break ;
		}
		equation.innerText += ` ${bufferNum} =`;
		result.innerText = operationResult;
		bufferNum = 0;
	}
	
	console.log({bufferNum});
	console.log({leftOperand});
	//console.log({rightOperand});
	console.log({operator});
});