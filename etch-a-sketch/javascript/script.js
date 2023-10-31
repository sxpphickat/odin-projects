const canva = document.querySelector(".canva");



const	canvaSize = 16;
let		color = "#000000";

function fillCanva(size) {
	//create single row
	for (let i = 0; i < size; i += 1) {
		const row = document.createElement("div");
		row.classList.toggle("row");

		for (let i = 0; i < size; i += 1) {
			const div = document.createElement("div");
			div.classList.toggle("grid");
			row.appendChild(div);
		}
		canva.appendChild(row);
	}
}

fillCanva(canvaSize);

/* canva.addEventListener("click", (event) => {
	const target = event.target;

	target.style.backgroundColor = color;
	console.log("aa");
}); */

let mouseDown = false;

canva.addEventListener("mousedown", () => {
	mouseDown = true;
});

canva.addEventListener("mouseup", () => {
	mouseDown = false;
});

canva.addEventListener("mouseover", (event) => {
	if (mouseDown) {
		console.log(color);
		event.target.style.backgroundColor = color;
	}
	console.log(color);
});