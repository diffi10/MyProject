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

// sliderImg.forEach(function(item){
//     item.addEventListener("click", function(){
//         let currentBtn = item;

//         let tabId = item.getAttribute("data-tab");
//         // console.log("tabId:", tabId)
//         let currentTab = document.querySelector(tabId);
        

//         currentTab.classList.add("active-tab")
//     })
// })


function init() {
    // console.log("resize");
    width = slider.offsetWidth;
    // console.log("width - ", width)
    
    sliderLine.style.width = width * sliderImg.length + "px";
    
sliderImg.forEach(function (item) {
    item.style.width = width + "px";
    item.style.height = "auto";
});
    

    
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