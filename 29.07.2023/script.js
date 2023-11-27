// const sliderLine = document.querySelector(".slider-line");
// const sliderPrev = document.querySelector(".slider-prev");
// const sliderNext = document.querySelector(".slider-next");
// let start = 0;

// sliderNext.addEventListener("click", function(){
//     start = start + 1200;
//     if(start > 4800){
//         start = 0
//     }
//     sliderLine.style.left = -start + "px"
// })

// sliderPrev.addEventListener("click", function(){
//     start = start - 1200;
//     if(start < 0){
//         start = 4800
//     }
//     sliderLine.style.left = -start + "px"
// })

const slider = document.querySelector(".slider");
const sliderLine = document.querySelector(".slider-line");
const sliderPrev = document.querySelector(".slider-prev");
const sliderNext = document.querySelector(".slider-next");

const sliderImg = document.querySelectorAll(".slider-img")
// console.log("sliderImg - ", sliderImg)


let count = 0;
let width;

function init() {
// console.log("resize");
width = slider.offsetWidth;
// console.log("width - ", width)   

sliderLine.style.width = width * sliderImg.length + "px";

for(let i = 0; i < sliderImg.length; i += 1){
    sliderImg[i].style.width = width + "px";
    sliderImg[i].style.height = "auto"
}
rollSlider();
}

// resize
init()
window.addEventListener("resize", init)


// next
sliderNext.addEventListener("click", function () {
    count++;
    if (count >= sliderImg.length) {
        count = 0
    }
    console.log("count-", count);
    rollSlider();
}) 
// prev
sliderPrev.addEventListener("click", function(){
    count--;
    if(count < 0){
        count = sliderImg.length - 1;
    }
    console.log("count-", count);
    rollSlider()
})

function rollSlider(){
    sliderLine.style.left = -count*width + "px";
}