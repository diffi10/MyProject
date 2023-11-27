// const x1 = 10;
// const x2 = 30;
// const number = 15;

// console.log(number < x1)
// console.log(number > x2)
// console.log(x1 && x2 >= number) 
// console.log(number < x1 || number > x2)


 let quantity = +prompt("Введіть розмір, будь ласка!");
// console.log(typeof quantity);

quantity = Number(quantity);
if (quantity > 15 || quantity < 43 ) {
    console.log("Є в наявності")
}
else {
    console.log("Немає в наявності")
}
const isAvaliable = true;
const isSend = true;
const isDiscount =  true;

const canBuy = isAvaliable && isSend && isDiscount ;
console.log("Чи можна замовити телефон",)


if (canBuy == true) {
    console.log("Так, звичайно)");
}
else {
    console.log("Нажаль ні");
}