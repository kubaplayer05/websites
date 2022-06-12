const input = document.querySelector("input");
const btn = document.querySelector(".add");
const topDiv = document.querySelector(".top");
const gridContainer = document.querySelector(".bottom");
const fullView = document.querySelector(".full-p-view-window");
const fullViewP = document.querySelector(".full-view-desc");
const close = document.querySelector(".close");
let counter = 1;

const createNote = () => {
	if (checkInput() == true) {
		const card = document.createElement("div");
		const title = document.createElement("h2");
		const cardDesc = document.createElement("p");
		const fullView = document.createElement("button");

		card.classList.add("card");
		title.classList.add("card-h2");
		cardDesc.classList.add("card-desc");
		fullView.classList.add("full-view");

		title.textContent = "Note " + counter;
		cardDesc.textContent = input.value;
		fullView.textContent = "View detail";

		gridContainer.appendChild(card);
		card.append(title, cardDesc, fullView);

		input.value = "";
		counter++;
	}
};

const checkInput = () => {
	if (input.value == "") {
		input.setAttribute("placeholder", "You must text sth.");
	} else {
		input.setAttribute("placeholder", "Write your note here!");
		return true;
	}
};

const events = e => {
	console.log(e.target);

	if (e.target.className == "full-view") {
		fullViewP.textContent = e.target.previousSibling.textContent;
		fullView.setAttribute("style", "display: flex;");
		topDiv.classList.add("shadow");
		gridContainer.classList.add("shadow");
	}

	if(e.target.className == 'close') {
		fullViewP.textContent = ''
		fullView.setAttribute("style", "display: none;");
		topDiv.classList.remove("shadow");
		gridContainer.classList.remove("shadow");
	}
};

btn.addEventListener("click", createNote);
gridContainer.addEventListener("click", events);
fullView.addEventListener("click", events);
