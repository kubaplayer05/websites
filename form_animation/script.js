const animationForm = () => {
	const arrow = document.querySelectorAll(".fa-arrow-down")
	arrow.forEach(arrow => {
		arrow.addEventListener("click", () => {
			const input = arrow.previousElementSibling
			const parent = arrow.parentElement
			const nextForm = parent.nextElementSibling

			// Check for validation

			if (input.type === "text" && userValidation(input)) {
				nextSlide(parent, nextForm)
			} else if (input.type === "email" && emailValidation(input)) {
				nextSlide(parent, nextForm)
			} else if (input.type === "password" && passwordValidation(input)) {
				nextSlide(parent, nextForm)
			} else {
				parent.style.animation = "shake 0.5s ease"
			}

			// get rid out of animation

			parent.addEventListener("animationend", () => {
				parent.style.animation = ""
			})
		})
	})
}

const userValidation = user => {
	if (user.value.length < 6) {
		console.log("not enough length")
		error("rgb(189,87,87)")
	} else {
		error("rgb(87, 189, 130)")
		return true
	}
}

const emailValidation = email => {
	const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	if (validation.test(email.value)) {
		error("rgb(87, 189, 130)")
		return true
	} else {
		error("rgb(189,87,87)")
	}
}

const passwordValidation = passwd => {
	const validation = new RegExp(
		"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})"
	)
	if (validation.test(passwd.value)) {
		error("rgb(87, 189, 130)")
		return true
	} else {
		error("rgb(189,87,87)")
	}
}

const nextSlide = (parent, nextForm) => {
	parent.classList.add("innactive")
	parent.classList.remove("active")
	nextForm.classList.add("active")
}

const error = color => {
	document.body.style.backgroundColor = color
}

animationForm()
