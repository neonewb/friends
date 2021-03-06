// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// const summation = function (num) {
// 	let sum = 0;

//     for (let i = 1; i <= num; i++) {
//         sum += i
//     }
   
// 	return sum
// }

const summation = n => n * (n + 1) / 2;

// 1
console.log(summation(1)) //=> 1

// 1 + 2
console.log(summation(2)) //=> 3

// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
console.log(summation(8)) //=> 36