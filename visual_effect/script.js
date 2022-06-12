const ScrollAppear = () => {
	const introText = document.querySelector(".intro-text");
	const introPosition = introText.getBoundingClientRect().top;
	const screenPosition = window.innerHeight;

	if (introPosition < screenPosition / 2) {
		introText.classList.add("intro-appear");
	}

    if (introPosition > screenPosition) {
        introText.classList.remove("intro-appear");
    }

};

window.addEventListener('scroll', ScrollAppear)