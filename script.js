const time = document.querySelector(".time");
const d = document.querySelector(".date");

setInterval(
	(setTime = () => {
		const date = new Date();
		const fullTime = [date.getHours(), date.getMinutes(), date.getSeconds()];
		const fullDate = [date.getDate(), date.getMonth(), date.getFullYear()];

		time.textContent = `${fullTime[0]}:${fullTime[1]}:${fullTime[2]}`;
		d.textContent = `${fullDate[0]}/${fullDate[1]}/${fullDate[2]}`;
	}),
	1000
);
