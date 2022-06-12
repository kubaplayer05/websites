const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

//Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;
// Buttons listeners

nextBtn.addEventListener("click", () => {
    // if(counter <= 0) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter++;
	carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

prevBtn.addEventListener("click", () => {
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter--;
	carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

carouselSlide.addEventListener('transitionend', () => {
    console.log('1');
    if(carouselImages[counter].id === 'last-clone') {
        carouselSlide.style.transition = 'none' 
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }

    if(carouselImages[counter].id === 'first-clone') {
        carouselSlide.style.transition = 'none' 
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
})