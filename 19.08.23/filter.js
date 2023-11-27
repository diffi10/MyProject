let arr = [5, 3, 8, 1];

// function range(arr, a){
//     return(
//         arr.filter((item) => item > a)
//     )
// }

// console.log(range(arr,3))

function range(arr2, a, b){
    return arr2.filter(item => (a <= item && item <= b))
}

console.log(range(arr, 1, 4))