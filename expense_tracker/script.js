const expenseName = document.querySelector(".i-text");
const date = document.querySelector(".i-date");
const numb = document.querySelector(".i-number");
const btn = document.querySelector(".accept");
const warn = document.querySelector(".warning");
const table = document.querySelector(".table");
const trDef = document.querySelector(".tr-def");

const createExpense = () => {
	if (checkInputs() == true) {
		const tr = document.createElement("tr");
		const del = document.createElement("button");
		const td = [
			document.createElement("td"),
			document.createElement("td"),
			document.createElement("td"),
			document.createElement("td"),
		];

		td.forEach(element => {
			element.classList.add("table-desc");
		});
		del.classList.add("delete");

		td[0].textContent = expenseName.value;
		td[1].textContent = date.value;
		td[2].textContent = `${numb.value}$`;
		del.textContent = "del.";

		table.appendChild(tr);
		tr.append(td[0], td[1], td[2], td[3]);
		td[3].appendChild(del);

		clearInputs();
	}
};

const clearInputs = () => {
	expenseName.value = "";
	date.value = "";
	numb.value = "";
};

const checkInputs = () => {
	if (expenseName.value == "" || date.valu == "" || numb.value == "") {
		warn.setAttribute("style", "display:inline;");
	} else {
		warn.setAttribute("style", "display:none;");
		return true;
	}
};

const deleteExpense = e => {
	if (e.target.className == "delete") {
		e.target.closest("tr").setAttribute("style", "display:none;");
	}
};

btn.addEventListener("click", createExpense);
table.addEventListener("click", deleteExpense);
