const bannerWrap = document.querySelector('.banner__wrap');
const bannerSlider = document.querySelector('.banner__slider');
const slider = document.querySelectorAll('.slider');

let bgColor = [
    "#B197F6",
    '#699CEE',
    '#E6B162',
]

let bannerClone = bannerSlider.firstElementChild.cloneNode(true);
bannerSlider.appendChild(bannerClone);
let sliderWidth = slider[0].offsetWidth;
let sliderIndex = 0;
bannerWrap.style.background = `${bgColor[sliderIndex]}`;
bannerWrap.style.transition = `all 1s`;

function Slider(){
    sliderIndex++;
    bannerSlider.style.transform = `translateX(-${sliderIndex * sliderWidth}px)`;
    bannerSlider.style.transition = `all 1s`;  
    bannerWrap.style.background = `${bgColor[sliderIndex]}`;

    if(sliderIndex == slider.length){
        sliderIndex = 0;
        bannerWrap.style.background = `${bgColor[sliderIndex]}`;
        setTimeout(()=>{
            bannerSlider.style.transform = `translateX(0)`;
            bannerSlider.style.transition = `0s`;
        }, 900)
    }
}
setInterval(Slider, 3000)