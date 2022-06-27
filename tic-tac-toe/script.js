const game = () => {
	// define variables
	const turnIcon = document.querySelector(".turn-icon")
	const scoreText = document.querySelector(".score-text")
	const squares = document.querySelectorAll(".square") // get all squares to array
	const turn = ["x", "circle"] // this array helps for set player turn
	let turnCounter = 0 // this is used as index for turn array
	const restart = document.querySelector(".restart")

	//score variables
	let xCounter = 0 // counter for x wins
	let circleCounter = 0 // counter for circle wins
	const xScore = document.querySelector(".x-counter")
	const circleScore = document.querySelector(".circle-counter")

	// I used this arrays in winChecker fuction
	const check1 = [0, 1, 2]
	const check2 = [3, 4, 5]
	const check3 = [6, 7, 8]
	const check4 = [0, 3, 6]
	const check5 = [1, 4, 7]
	const check6 = [2, 5, 8]
	const check7 = [0, 4, 8]
	const check8 = [2, 4, 6]
	// numbers in arrays above means possible square index to win
	const check = [check1, check2, check3, check4, check5, check6, check7, check8]
	let checkingSquares = []

	// fuction that add icon on the square

	squares.forEach(square => {
		square.addEventListener("click", () => {
			if (validator(square) === false) {
				// I checked there if square is empty
				const icon = document.createElement("img")
				icon.classList.add("icon")
				icon.setAttribute("src", `./svg/${turn[turnCounter]}.svg`)
				icon.style.animation = "turn-on 0.7s ease"
				square.classList.add("taken")
				square.setAttribute("data-score", `${turn[turnCounter]}`)
				square.appendChild(icon)
				if (turnCounter === 0) {
					turnCounter++
				} else {
					turnCounter--
				}

				turnIconChange()
				winChecker()
			}
		})
	}) // that function adds for all squares add click event wich add img tag to square div, then add icon class, set src attribute and animation. Square gets a taken class and has set the data-score for x or circle depending on player turn. Next was an if that check and change turnCounter and in the last part I called turnIconChange and winChecker function

	// square validator

	const validator = square => {
		if (square.classList.contains("taken")) {
			return true
		} else {
			return false
		}
	}

	// if square have taken class function return true, so if the square is empty then function return false

	// turn icon

	const turnIconChange = () => {
		turnIcon.setAttribute("src", `./svg/${turn[turnCounter]}.svg`)
	}

	// winChecker

	const winChecker = () => {
		for (
			let i = 0;
			i < 8;
			i++ // do loop that do reapeats 8 times beacuse check array have 8 index (0-7)
		) {
			let a = check[i] // creating variable that gets array from check array
			a.forEach(i => {
				checkingSquares.push(squares[i])
			}) // each number in a array is used as square index .The squares are add to empty array that was declared on the top of game function
			if (
				// checks that selected squares have data-score attribute equal to x
				checkingSquares[0].dataset.score === "x" &&
				checkingSquares[1].dataset.score === "x" &&
				checkingSquares[2].dataset.score === "x"
			) {
				squares.forEach(square => {
					square.classList.add("taken")
				})
				scoreText.textContent = "Player X win"
				xCounter++
				xScore.textContent = `X wins: ${xCounter}`
				break
			} else if (
				// checks that selected squares have data-score attribute equal to circle
				checkingSquares[0].dataset.score === "circle" &&
				checkingSquares[1].dataset.score === "circle" &&
				checkingSquares[2].dataset.score === "circle"
			) {
				squares.forEach(square => {
					square.classList.add("taken")
				})
				scoreText.textContent = "Player O win"
				circleCounter++
				circleScore.textContent = `O wins: ${circleCounter}`
				break
			}
			checkingSquares = []

			// if the selected square haves data-sore equal to x or circle then all the squares get a taken class so the further game is impossible. Then score text was changed and the circle or x counter was incremented. I added break because this helps to avoid double win bug
		}
	}

	restart.addEventListener("click", e => {
		squares.forEach(square => {
			square.classList.remove("taken")
			square.setAttribute("data-score", "")
			if (square.childNodes[0] != undefined) {
				square.childNodes[0].remove()
			}
		})
		turnCounter = 0
		turnIcon.setAttribute("src", `./svg/${turn[turnCounter]}.svg`)
		scoreText.textContent = ""
	})

	// add on button click event that remove from all squares img, taken class, resets data-score.Then set turnCounter = 0 (set x player turn) , change turnIcon and clear scoreText
}

game()
