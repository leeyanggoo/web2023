document.querySelectorAll("#nav > ul > li").forEach(li => {
    li.addEventListener("mouseover", (e) => {
        li.querySelector("ul").style.maxHeight= li.querySelector("ul").scrollHeight + "px";
    })
    li.addEventListener("mouseout", (e) => {
        li.querySelector("ul").style.maxHeight = "0";
    })
})

let currentIndex = 0;
const sliderHeight = document.querySelectorAll(".slider")[0].offsetHeight;
const sliderInner = document.querySelector(".slider__inner");
const sliderClone = sliderInner.firstElementChild.cloneNode(true);
sliderInner.appendChild(sliderClone);

setInterval(() => {
    currentIndex++;
    document.querySelector(".slider__inner").style.transform = `translateY(-${currentIndex * sliderHeight}px)`;
    document.querySelector(".slider__inner").style.transition = "all 1s";
    if(currentIndex == document.querySelectorAll(".slider").length - 1){
        setTimeout(() => {
            currentIndex = 0;
            document.querySelector(".slider__inner").style.transform = `translateY(0)`;
            document.querySelector(".slider__inner").style.transition = "all 0s";
        }, 2000)
    }
}, 3000)

document.querySelector(".notice ul li a:first-child").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".modal").style.display = "block";
})
document.querySelector(".modal button").addEventListener("click", () => {
    document.querySelector(".modal").style.display = "none";
})