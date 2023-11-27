// const number = +prompt("Введіть число");
// console.log(number)

// if(number <= 20) {
//     console.log("число знаходиться в діапазоні від 0 до 20");
// }
// else if(number > 20 && number <= 100) {
//     console.log("число в діапазоні від 20 до 100");
// }
// else {
//     console.log("число більше 100");
// }

let balance = 10000;
const payment = 15000;

console.log(`загальна сума замовлення ${payment} грн. Перевіряємо баланс на карті`)
 
if(payment <  balance) {
    let balance2 = balance - payment;
    console.log(`Залишок на карті ${balance2} грн`)
}
else {
    console.log("Недостатньо коштів. Поповніть рахунок!")
}

console.log("Операція завершена")