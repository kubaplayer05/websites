const calculator = () => {
	// reset input value
	document.addEventListener("DOMContentLoaded", () => {
		input.value = ""
	})

	// declare variable
	const score = document.querySelector(".score")
	const input = document.querySelector(".result-display")
	const numbers = document.querySelectorAll(".numbers")
	const signs = document.querySelectorAll(".math-signs")
	const error = document.querySelector(".error")
	let num = 0,
		equal = 0,
		sign,
		counter = 0

	// add click on each number button and change input value
	numbers.forEach(number => {
		number.addEventListener("click", () => {
			const inputValue = input.value
			const numberValue = number.textContent
			input.value = inputValue + numberValue
		})
		number.addEventListener
	})

	signs.forEach(sign => {
		sign.addEventListener("click", e => {
			if (inputValidator() === true) {
				num = parseInt(input.value)
				input.value = ""

				showScore(num, equal, (equal = mathOperations(num, equal, e)), e)
				if (e.target.id === "equal") {
					equal = 0
				}
				num = 0
			}
		})
	})

	const mathOperations = (number, sum, e) => {
		if (e.target.id === "plus") {
			sum += number
			return sum
		}
		if (e.target.id === "minus") {
			sum -= number
			return sum
		}
		if (e.target.id === "multiply") {
			sum *= number
			return sum
		}
		if (e.target.id === "divide") {
			if (number != 0) {
				sum /= number
				return sum
			}
		}
		if (e.target.id === "equal") {
			counter--
			return sum
		}
	}

	const showScore = (num, sum, equal, e) => {
		const div = document.createElement("div")
		const p = document.createElement("p")
		div.classList.add("score-div")
		p.classList.add("score-text")

		if (e.target.id === "plus") {
			p.textContent = `${sum} + ${num} = ${equal}`
		} else if (e.target.id === "minus") {
			p.textContent = `${sum} - ${num} = ${equal}`
		} else if (e.target.id === "multiply") {
			p.textContent = `${sum} * ${num} = ${equal}`
		} else if (e.target.id === "divide") {
			p.textContent = `${sum} / ${num} = ${equal}`
		} else if (e.target.id === "equal") {
			p.textContent = `${equal}`
		} else {
			p.textContent = `${sum} + ${num} = ${equal}`
		}

		score.appendChild(div)
		div.appendChild(p)
	}

	const inputValidator = () => {
		const validate = new RegExp("^[0-9]*$")
		if (validate.test(input.value)) {
			error.style.opacity = "0"
			return true
		} else {
			error.style.opacity = "1"
			return false
		}
	}
}

calculator()
