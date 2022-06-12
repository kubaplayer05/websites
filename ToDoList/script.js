const btn = document.querySelector(".send");
const input = document.querySelector(".i-send");
const bottom = document.querySelector(".bottom");
const err = document.querySelector(".error");
const editWindow = document.querySelector(".edit-window");
const editInput = document.querySelector(".i-edit");
const editBtn = document.querySelector(".accept-edit");

const createTask = () => {
	if (input.value == "") {
		err.textContent = "You must write sth";
	} else {
		const div = document.createElement("div");
		const div2 = document.createElement("div");
		const p = document.createElement("p");
		const checkbox = document.createElement("input");
		const btnd = document.createElement("button");
		const btne = document.createElement("button");

		div.setAttribute("class", "task");
		checkbox.setAttribute("type", "checkbox");
		checkbox.setAttribute("class", "checkbox");
		div2.setAttribute("class", "options");
		btnd.setAttribute("class", "delete");
		btne.setAttribute("class", "edit");
		p.setAttribute("class", "task-desc");

		btnd.textContent = "delete";
		btne.textContent = "edit";
		p.textContent = input.value;

		bottom.appendChild(div);
		div.appendChild(p);
		div.appendChild(div2);
		div2.appendChild(checkbox);
		div2.appendChild(btne);
		div2.appendChild(btnd);

		input.value = "";
		err.textContent = "";
	}
};

const taskEvents = e => {
	if (e.target.className == "delete") {
		e.target.closest(".task").setAttribute("style", "display:none;");
	}
	if (e.target.className == "checkbox") {
		if (e.target.checked == true) {
			e.target.closest(".task").classList.add("done");
		} else e.target.closest(".task").classList.remove("done");
	}

	if (e.target.className == "edit") {
		console.log(e.target.closest(".task").firstElementChild.textContent);
		editWindow.setAttribute("style", "display: flex");
		editInput.value = e.target.closest(".task").firstElementChild.textContent;
		editBtn.addEventListener("click", () => {
			if (editInput.value == "") {
				editInput.setAttribute("placeholder", "You must text sth");
			} else {
				e.target.closest(".task").firstElementChild.textContent =
					editInput.value;
				editWindow.setAttribute("style", "display: none");
			}
		});
	}
};

btn.addEventListener("click", createTask);
bottom.addEventListener("click", taskEvents);
