//O(n)
// const arr = [3, 10, 2, 7];
// function containsNumberON(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 2) {
//       return true;
//     }
//     continue;
//   }
//   return false;
// }
// console.log(containsNumberON(arr));

//O(1)
// function containsNumberO1(array){
//     const newSet= new Set(array)
//     return newSet.has(2)
// }
// console.log(containsNumberO1(arr));

//o(nlogn) - linearthmic
// let n = 4;
// function nLogNFunc(n) {
//   let y = n;
//   while (n > 1) {
//     n = Math.floor(n / 2); //logn
//     for (let i = 1; i <= y; i++) {
//       console.log(i); //o(n)
//     }
//   }
// }
// nLogNFunc(n);

//o(2^n) - Exponential
// function fib(n) {
//   if (n == 0) return 0;
//   if (n == 1) return 1;
//   return fib(n - 1) + fib(n + 2);
// }
// console.log(fib(n));

//o(n!) - Factorial
// function f(n) {
//   if (n === 0) {
//     console.log("******");
//     return;
//   }
//   for (let i = 0; i < n; i++) {
//     f(n - 1);
//   }
// }

//Interesting Problem
//O(logN)
// function example(n){
//     for(let i=1;i<=n;i*=2){
//         console.log(i)
//     }
// }
// example(4)