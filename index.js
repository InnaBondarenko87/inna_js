// автоперевірка !!!
// function createArrayOfNumbers(min, max) {
//   min = 1;
//   max = 5;
//   let tags = [];

//   for (let i = min; i <= max; i++) {
//     tags.push(i);
//   }

//   return tags;
// }
// console.log(createArrayOfNumbers());

// *****
// const planets = ["1", "2", "Venus"];
// let sum;
// for (const planet of planets) {
//   // console.log(planet);
//   sum += planet;
//   console.log(sum);
// }

// *****
// function calculateTotalPrice(order) {
//   const orders = [];
//   for (const order of orders) {

//   }
// }
// calculateTotalPrice();

// avto****
// const namber = [4, 2, 3];

// function calculateTotalPrice(order) {
//   // const order = [];
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total = order[i];
//   }
//   return total;
// }
// console.log(calculateTotalPrice(namber));

// function getEvenNumbers(start, end) {
//   // start = 1;
//   // end = 10;
//   let tags = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       tags.push(i);
//     }
//   }
//   return tags;
// }
// console.log(getEvenNumbers(1, 1));

// **************

// function checkStorage(storage, item) {
//   for (let i = 0; i < storage.length; i++) {
//     if (storage[i].toLowerCase() === item.toLowerCase()) {
//       return `${item} is available to order!`;
//     }
//   }
//   return "Sorry! We are out of stock!";
// }

// function checkStorage(storage, item) {
//   const isAvailable = storage.some(
//     (product) => product.toLowerCase() === item.toLowerCase()
//   );
//   return isAvailable
//     ? `${item} is available to order!`
//     : "Sorry! We are out of stock!";
// }

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0, i < fruits.length; i++){
//     console.log(${i+1} - ${fruits[i]});
// }

// ************
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// ****  GPT  ****
// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Not a number!";
//   }

//   return a < b ? a : b;
// }

// function min(a, b) {
//   let min;
//   if (Number(a < b)) {
//     return a;
//   } else {
//     return "Not a number!";
//   }
// }
// console.log(3, 6);

// ************  dz 3  **********

// **1**
// function slugify(title) {
//   const slug = title.split(" ").join("-").toLowerCase();
//   return slug;
// }

// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// ***  2  ***//

function makeArray(firstArray, secondArray, maxLength) {
  const arr = [];
  for (let i = 0; i < maxLength; i++)
    if (firstArray.lenght + secondArray.lenght === maxLength) {
      arr.push(secondArray[i]);
    }
  return arr;
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// **3**
// function filterArray(numbers, value) {
//   const arr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       arr.push(numbers[i]);
//     }
//   }
//   return arr;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
