const sliderInner = document.querySelector(".slider__inner");
const slider = document.querySelectorAll(".slider");

sliderClone = sliderInner.firstElementChild.cloneNode(true);
sliderInner.appendChild(sliderClone);

let index = 0;
let sliderHeight = slider[0].offsetHeight;

setInterval(()=>{
    index++;
    sliderInner.style.transform = `translateY(-${sliderHeight * index}px)`;
    sliderInner.style.transition = `all 1s`;

    if(index == slider.length){
        setTimeout(()=>{
            sliderInner.style.transition = `0s`;
            sliderInner.style.transform = `translateY(0)`;
            index = 0;
        }, 900)
    }
}, 3000)

// 
document.querySelectorAll("nav > ul > li").forEach((li)=>{
    li.addEventListener("mouseover", ()=>{

        document.querySelectorAll("nav > ul > li > ul").forEach((ul)=>{
            ul.style.width = `${document.querySelector("#wrap").clientWidth - li.getBoundingClientRect().right}px`;
            ul.style.transition = "width 1s"
        })
    });
    li.addEventListener("mouseout", ()=>{
        document.querySelectorAll("nav > ul > li > ul").forEach((ul)=>{
            ul.style.width = "0"
            ul.style.transition = "width 1s"
        })
    });
});

// 
const noticcBtn = document.querySelector(".notice__btn");
const gallaryBtn = document.querySelector(".gallary__btn");
const noticeUl = document.querySelector(".notice__ul");
const gallaryUl = document.querySelector(".gallary__ul");

// 
noticcBtn.addEventListener("click", (e)=>{
    e.preventDefault;
    noticcBtn.classList.add("active");
    gallaryBtn.classList.remove("active");
    gallaryUl.style.display = "none";
    noticeUl.style.display = "block";
});
gallaryBtn.addEventListener("click", (e)=>{
    e.preventDefault;
    gallaryBtn.classList.add("active");
    noticcBtn.classList.remove("active");
    noticeUl.style.display = "none";
    gallaryUl.style.display = "block";
});

// 
noticeUl.querySelector("li:first-child").addEventListener("click", ()=>{
    document.querySelector(".modal").style.display = "block";
})
document.querySelector(".modal button").addEventListener("click", ()=>{
    document.querySelector(".modal").style.display = "none";
    
})