// forEach
// array.forEach(element => {
//     console.log(element)
// });
// const numbers = [5,10,20,30]

// array.forEach(element => {
//     console.log(element)
// });

const btn = document.querySelectorAll(".btn");
const tabsItem = document.querySelectorAll(".tabs__item");
// console.log("btn:", btn);
// console.log("tabsItem:", tabsItem)

btn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        // console.log("currentBtn:", currentBtn);
        
        let tabId = item.getAttribute("data-tab");
        console.log("tabId:", tabId)

        let currentTab = document.querySelector(tabId)
        console.log("currentTab:", currentTab)

        btn.forEach(function (item) {
            item.classList.remove("active-btn")
        })

        tabsItem.forEach(function (item) {
            item.classList.remove("active-tab")
        })

        currentBtn.classList.add("active-btn")
        currentTab.classList.add("active-tab")

    })
})
