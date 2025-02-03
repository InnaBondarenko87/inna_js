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
