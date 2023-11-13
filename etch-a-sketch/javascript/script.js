const canva = document.querySelector(".canva");

let	squaresPerSize = 16;
let	color = "#000000";

const canvaSize = 500; // same as css

function fillCanva(size) {
	let divSize =	(canvaSize / squaresPerSize)
						.toString()
						.concat("px");
	//create single row
	for (let i = 0; i < size; i += 1) {
		const row = document.createElement("div");
		row.classList.toggle("row");

		for (let i = 0; i < size; i += 1) {
			const div = document.createElement("div");
			div.classList.toggle("grid");
			div.style.height = divSize;
			div.style.width = divSize;
			row.appendChild(div);
		}
	canva.appendChild(row);
	}
}

fillCanva(squaresPerSize);


canva.addEventListener("mousedown", (event) => {
	if (!event.target.classList.contains("grid")) {
		return ;
	}
	if (event.button == 0) { // 0 == left mouse button
		event.target.style.backgroundColor = color;
		canva.addEventListener("mouseover", draw);
	} else if (event.button == 2) { // 2 == right mouse button
		event.target.style.backgroundColor = "#ffffff";
		canva.addEventListener("mouseover", erase);
	}
});

canva.addEventListener("mouseup", (event) => {
	if (event.button == 0) {
		canva.removeEventListener("mouseover", draw);
	} else if (event.button == 2) {
		canva.removeEventListener("mouseover", erase);
	}
});

canva.addEventListener("contextmenu", (event) => {
	event.preventDefault();
});

function draw(event) {
	if (!event.target.classList.contains("grid")) {
		return ;
	}
	event.target.style.backgroundColor = color;
};

function erase(event) {
	if (!event.target.classList.contains("grid")) {
		return ;
	}
	event.target.style.backgroundColor = "#ffffff";
}

const setSquaresPerSize = document.querySelector("#squares-per-size");

setSquaresPerSize.addEventListener("click", () => {
	let size = -1;
	while (size < 1 || size > 100 || isNaN(size)) {
		size = Number(prompt("Select a size between 1 and 100"));
		if (size == 0) {
			return ;
		}
	}
	squaresPerSize = size;
	setSquaresPerSize.innerText = size + " x " + size;
	canva.innerHTML = "";
	fillCanva(squaresPerSize);
});

const clearCanva = document.querySelector("#clear-canva");

clearCanva.addEventListener("click", () => {
	canva.innerHTML = "";
	fillCanva(squaresPerSize);
});

const colorPicker = document.querySelector("#color-picker");

colorPicker.addEventListener("input", () => {
	color = colorPicker.value;
});