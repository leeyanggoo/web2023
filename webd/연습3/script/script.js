// 메뉴
document.querySelectorAll("#aside .menu > ul > li").forEach(li =>{
    li.addEventListener("mouseover", ()=>{
        li.querySelector("ul").style.maxHeight = li.querySelector("ul").scrollHeight + "px";
    });
});
document.querySelectorAll("#aside .menu > ul > li").forEach(li =>{
    li.addEventListener("mouseout", ()=>{
        li.querySelector("ul").style.maxHeight = "0";
    });
});

// 슬라이드
const sliderWrap = document.querySelector(".slider__wrap")
const slider = document.querySelectorAll(".slider")
let slideIndex = 0;
sliderHeight = slider[0].clientHeight;
let sliderClone = sliderWrap.firstElementChild.cloneNode(true);
sliderWrap.appendChild(sliderClone);




function go(){
    slideIndex++;
    sliderWrap.style.transform = `translateY(-${slideIndex * sliderHeight}px)`;
    sliderWrap.style.transition = "all 0.5s";
    
    if(slideIndex >= slider.length){
        slideIndex = 0;
        setTimeout(()=>{
            sliderWrap.style.transition = "none";
            sliderWrap.style.transform = `translateY(0)`;
        }, 2000)
    }
}
setInterval(go, 3000);