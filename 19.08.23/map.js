// let users2 = [
//     { name: "Іван", surname: "Іванко", id: 1 },
//     { name: "Петро", surname: "Петренко", id: 2 },
//     { name: "Марія", surname: "Мрійко", id: 3 },
//   ]
//   let names = users2.map(item => item.name + " " + item.surname);
//   console.log(names)

//   function namesOfUsers(arr){
//     return arr.map(item => item.name + " " + item.surname)
//   }
//   console.log(namesOfUsers(users2))



// let lengths = ["hello", "hello-1", "hello-12"];

// function lengthsOfHello(arr){
//     return arr.map(item => item.length)
// }
// console.log(lengthsOfHello(lengths))


// const rate = [10000, 12000, 15000, 8000];

// let rates = rate.map(rate => rate*1.2);
// console.log(rates)

// function arrayOfRate(arr){
//     return arr.map(rate => rate*1.2)
// }
// console.log(arrayOfRate(rate))

// const rate = [10000, 12000, 15000, 8000];

// function add(){
//     rate.map((rate)=>{
//         if (rate > 10000) {
//             rate * 1.2
//             console.log(rate);
//         }
//     })
//     }
//     add();

const rate = [10000, 12000, 15000, 8000];
 
function rateUp(){
    return(
    rate.map((rate)=>{
        if (rate > 10000) {
            rate * 1.2
            console.log(rate);
        }
        return rate*1.2
    })
    )
    }
    console.log(rateUp());
