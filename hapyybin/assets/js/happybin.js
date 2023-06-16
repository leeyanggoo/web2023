const bannerWrap = document.querySelector('.banner__wrap');
const bannerSlider = document.querySelector('.banner__slider');
const sliders = document.querySelectorAll('.slider');
let sliderInterval;

// sliderBtn
const sliderPrev = document.querySelector('.prev');
const sliderNext = document.querySelector('.next');
const sliderStop = document.querySelector('.stop');
let sliderCurrent = document.querySelector('.current');
let sliderTotal = document.querySelector('.total');
let progress = document.querySelector('.progress');

let isTransition = false;

let bgColor = ["#B197F6", '#699CEE', '#E6B162'];

let bannerClone = bannerSlider.firstElementChild.cloneNode(true);
bannerSlider.appendChild(bannerClone);
let sliderWidth = sliders[0].offsetWidth;
let sliderIndex = 0;
let sliderTime = 3000;

let progressInterval;

updateSlider();
goSlider();

function updateSlider() {
    sliderCurrent.innerText = (sliderIndex % sliders.length) + 1;
    sliderTotal.innerText = sliders.length;
    isTransition = true; // Set transition status
    bannerWrap.style.background = `${bgColor[sliderIndex % bgColor.length]}`; // To prevent overflow error
    bannerWrap.style.transition = `all 1s`;
    bannerSlider.style.transform = `translateX(-${sliderIndex * sliderWidth}px)`;
    bannerSlider.style.transition = `all 1s`;  
    sliderProgress();
}

// Transition end event
bannerSlider.addEventListener('transitionend', () => {
    isTransition = false; // Reset transition status
    resetSlider();
});

function resetSlider() {
    if (sliderIndex >= sliders.length) {
        sliderIndex = 0;
        bannerSlider.style.transform = `translateX(0)`;
        bannerSlider.style.transition = `0s`;
    }
     // Update the current slide number after the transition
}

function nextSlide() {
    if (isTransition) return;
    sliderIndex++;
    updateSlider();
    clearInterval(sliderInterval); // Clear the interval
    goSlider(); // Start a new interval
}

function prevSlide() {
    if (isTransition) return;
    sliderIndex--;
    if (sliderIndex < 0) sliderIndex = sliders.length - 1;
    updateSlider();
    clearInterval(sliderInterval); // Clear the interval
    goSlider(); // Start a new interval
}

// Add event listeners for slide navigation
sliderNext.addEventListener('click', nextSlide);
sliderPrev.addEventListener('click', prevSlide);

function goSlider() {
    sliderInterval = setInterval(nextSlide, sliderTime);
}

function stopSlider() {
    isTransition = false;
    clearInterval(sliderInterval);
    clearInterval(progressInterval);
    sliderStop.classList.remove("stop");
    sliderStop.classList.add("play");
}

function playSlider() {
    goSlider();
    sliderStop.classList.remove("play");
    sliderStop.classList.add("stop");
    sliderProgress();
}

sliderStop.addEventListener('click', () => {
    const isSliderStop = sliderStop.classList.contains('stop');
    isSliderStop ? stopSlider() : playSlider();
})

// progress
function sliderProgress() {
    progress.style.width = "0%";
    if(progressInterval) clearInterval(progressInterval);

    progressInterval = setInterval(() => {
        let currentWidth = parseFloat(progress.style.width);
        progress.style.width = (currentWidth + (100 / (sliderTime / 100))) + '%';
        if (parseFloat(progress.style.width) >= 100) {
            progress.style.width = '0%';
            clearInterval(progressInterval);
        }
    }, 100);
}