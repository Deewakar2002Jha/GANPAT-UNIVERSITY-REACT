//Example 1: Transform values

// const fruits = ["Apple", "Apple", "Apple", "Apple"];

// const number = [1, 2, 3, 4];

// const FF = fruits.map((fruit) => {
//   return "banana";
// });
// console.log(FF);

// const double = number.map((aloo) => {
//   return aloo * 3;
// });
// console.log(double);

// console.log(double);

// const upperCaseFruits = fruits.map((fruit) => {
//   return "Aloo";
// });

// console.log(upperCaseFruits);

// Example 2: Using index
// const fruits = ["Apple", "Banana", "Mango"];

// const gg = fruits.map((fruit, index) => {
//   console.log(index, fruit);
// });
// console.log(gg);

// Example 3: Using all parameters
const numbers = [10, 20, 30];
const hh = numbers.map((value, index, array) => {
  console.log(value, index, array);
});
console.log(hh);
