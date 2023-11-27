// const totalSpent = 900;
// let payment = 1000;
// let discount;

// if (totalSpent > 0 && totalSpent < 100) {
//     discount = 0;
//     payment = payment - payment*discount;
//     console.log(`оформлюємо замовлення на суму ${payment} грн зі знижкою ${discount}%`)
// }
// else if (totalSpent > 100 && totalSpent < 1000) {
//     discount = 3;
//     payment = payment - payment*discount;
//     console.log(`оформлюємо замовлення на суму ${payment} грн зі знижкою ${discount}%`)
// }
// else if (totalSpent > 1000 && totalSpent < 5000) {
//     discount = 5;
//     payment = payment - payment*discount;
//     console.log(`оформлюємо замовлення на суму ${payment} грн зі знижкою ${discount}%`)
// }
// else {
//     discount = 10;
//     payment = payment - payment*discount;
//     console.log(`оформлюємо замовлення на суму ${payment} грн зі знижкою ${discount}%`)
// }


// for (let i = 50; i < 100; i += 5 ){
//     console.log("i-",i)
// }

// for (let i = 20; i > 1; i -= 2 ){
//     console.log("i-",i)
// }

// function showName(name, lastName){
//     let fullName = name +" "+ lastName;
//     console.log(fullName)
//     return fullName
// }

// showName("Iryna", "Koval")



// const totalPrice = function(items){
//     for(const value of items){
//         total +=value
//     }
//     return total
// }

// console.log(totalPrice(cart))

// const numbers = [1,2,3,4,5]

// const carts = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// let total = 0;

// for (let i = 0; i < carts.length; i += 1) {
//     total += carts[i];
// }
// console.log(total)

// for (let cart of carts) {
//     total += cart;
// }
// console.log(total)

// function showName(name, lastName){
//     let fullName = name +" "+ lastName;
//     console.log(fullName)
//     return fullName
// }
// showName("Iryna", "Koval");
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// const totalPrice = function (items) {
//     for (const value of items) {
//         total += value
//     }
//     return total
// }
// console.log(totalPrice(cart))

// const numbers = [1, 2, 3, 4, 5]

// const number = function(items){
//     for(const item of items){
//         console.log(item);
//     }

// }
// number(numbers);



// const logins = ["admin1", "admin2", "batman"];
// const login = "555"


// let result = find(logins, login);
// console.log(result)

// function sayHello(){
//     console.log("hello")  ;
// }

// sayHello();

// function sayNumber(){
//     console.log("130")
// }

// sayNumber();

// function calculate(){
//     let result = 7+3
//     console.log(result)
// }

// calculate();

// function add(a,b){
//     let c = a + b;
//     return c
// }
// add(1,2);
// const y = console.log("це консоль add(1,2):", add(1, 2))


// const logins = ["admin1", "admin2", "batman"];
// const login = "batman"

// const find = function(arr, login){
//     for(let i = 0; i < arr.length; i +=1){
//         if (arr[i] === login){
//             return `Користувач ${login} знайдений в масиві`
//         }
//     }
//     return "Не знайдений"
// }

// const find = function(arr,login){
//     for(const log of arr){
//         if (log === login){
//             return `Користувач ${login} знайдений в масиві`
//         }
//     }
//     return "Не знайдений"
// }


// let numbers = [100, -54, 8, 12, 47];


// const findNumber = function (numbers) {
//     let smallestNumber = numbers[0];

//     for (i = 0; i < numbers.length; i += 1) {
//         console.log(numbers[i])

//         if (numbers[i] < smallestNumber) {
//             smallestNumber = numbers[i]
//         }
//     }
//     return smallestNumber
// }

// let result = findNumber(numbers);
// console.log("result - ", result)



// -----------------------------------



// function calculate(){
//     let result = 7+3
//     console.log(result)
// }
// calculate();

// function sayWord(){
//     console.log("Слава Україні!!!")
// }
// sayWord();

// function sayPalianycia(){
//     console.log("Паляниця")
// }
// sayPalianycia();

// function randomName(name, lastName){
//     let fullName = name +" "+ lastName;
//     console.log(fullName)
//     return fullName
// }
// randomName("Emanuel", "Macron")

// const namePresident = ["Volodymyr Zelenskiy"]
// const hisName = "555"

// function find (name,hisName){
//     for(let log of name){
//         if (log === hisName){
//             return `Так ${hisName} президент України`
//         }
//     }
//     return "Позор("
// }

// console.log(find(namePresident, hisName))


// ------------------------------------

// const randomNumber = function(){
//     const number = Math.random() * 40
//     console.log(number)
// }
// randomNumber();

// const prices = [1060, 10000, 10, 790, 942, 217, 645, 345, 800, 7000];
// const certificate = 500;
// let total = 0;

// const totalPrice = function (items) {
//     for (const value of items) {
//         total += value; 
//         total -= certificate;
//     }
//     return total
// }
// console.log(totalPrice(prices))


// const users = ["taras", "igor", "anya"];
// const user = "igor"

// const autorise = function(arr, user){
//     for(let i = 0; i < arr.length; i +=1){
//         if (arr[i] === user){
//             return `Користувач ${user} знайдений в масиві`
//         }
//     }
//     return "Не знайдений"
// }
// console.log(autorise(users, user))

// const sayBye = function(){
//     console.log("Bye")
// }
// sayBye()

// const words = ["Паляниця", "Нісенітниця", "Світлиця",]
// const prompt = "Нісенітниця"

// const findRussianPig = function(words,prompt){
//     for(let i = 0; i < words.length; i += 1){
//         if(words[i] === prompt){
//             return `Молодець.
// ${prompt} українське слово, вхід дозволено)`
//         }
//     }
//     return "Російська свиня, іДИ ГЕТЬ!!!"
// }
// console.log(findRussianPig(words, prompt))

// const click2 = function(){
//     setInterval(
//         function(){console.log("Привіт!")}
//         , 2000);
// }
// click2();


const navEl = document.querySelector(".site-nav__link");
console.log("navEl", navEl);

const navLinks = document.querySelectorAll(".site-nav__link");