const canva = document.querySelector(".canva");

let	squaresPerSize = 16;
let	color = "#000000";

const canvaSize = 500; // same as css

let divSize =	Math.round(canvaSize / squaresPerSize)
				  	.toString()
					.concat("px");

console.log(divSize);

function fillCanva(size) {
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
	console.log(event);
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


