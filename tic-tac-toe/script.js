const pitches = document.querySelectorAll(".pitch");
let turn = 0;

const check = e => {
	console.log(e.target);
	if (turn == 0) {
		const img = document.createElement("img");
		img.setAttribute("src", "./icons/close.png");
		e.target.classList.add("x-square");
		e.target.appendChild(img);
	}
};

const checkWin = () => {};

pitches.forEach(pitch => {
	pitch.addEventListener("click", check);
});

console.log(pitches);
