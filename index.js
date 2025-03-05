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

// ************  dz 2  **********

// ********    1     **********

// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів. Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits), яка складає та повертає повідомлення про купівлю ремонтних дроїдів.

// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:
// quantity — кількість замовлених дроїдів
// pricePerDroid — ціна одного дроїда
// customerCredits — сума коштів на рахунку клієнта

// Доповни функцію таким чином:
// Оголоси змінну для зберігання загальної суми замовлення (загальна вартість усіх замовлених дроїдів) і задай їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, функція має повертати рядок "Insufficient funds!"
// в іншому випадку функція має повертати рядок "You ordered <quantity> droids worth <totalPrice> credits!", де <quantity> це кількість замовлених дроїдів, а <totalPrice> це їх загальна вартість.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   const totalPrice = quantity * pricePerDroid;
//   if (totalPrice > customerCredits) {
//     return "Insufficient funds!";
//   } else {
//     return `"You ordered ${quantity} droids worth ${totalPrice} credits!"`;
//   }
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// ******   2 ???????????? *********÷

// Оголоси функцію formatMessage(message, maxLength), яка приймає рядок (параметр message) та перевіряє його довжину відповідно до заданої максимальної довжини (параметр maxLength).

// Доповни код функції таким чином, що:
// Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
// Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..." в кінці та повертає обрізану версію.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function formatMessage(message, maxLength) {
//   message = "";
//   if (message.length <= maxLength) {
//     return message;
//   } else {
//     message.push("...");
//   }
//   //   return message;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// ********* 3 *********
//     Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.

// Доповни код функції таким чином, що:
// Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// Якщо в рядку відсутні заборонені слова, функція повертає буль false

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function checkForSpam(message) {
//   const loweMessage = message.toLowerCase();
//   return loweMessage.includes("spam") || loweMessage.includes("sale");
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// ************  dz 3  **********

// **1**
// Перш, ніж розв’язувати задачу, давай визначимося із новим терміном!
// Термін slug — це зрозумілий людині унікальний ідентифікатор, який використовується у веб розробці для створення читабельних URL-адрес.
// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug із назви статті. У результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-beginners.

// Slug — це завжди рядок у нижньому регістрі, слова якого розділені тире.
// З цим розібралися? А тепер давай нарешті виконувати задачу!

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.
// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.
//

// function slugify(title) {
//   const slug = title.split(" ").join("-").toLowerCase();
//   return slug;
// }

// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// ***  2  ***//
// Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray (масив), secondArray (масив) і maxLength (число). Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.
// Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
// В іншому випадку функція повинна повернути весь новий масив.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function makeArray(firstArray, secondArray, maxLength) {
//   const arr = [];
//   const arr2 = firstArray.concat(secondArray);
//   for (let i = 0; i < maxLength; i++) {
//     if (arr2.length >= maxLength) {
//       arr.push(arr2[i]);
//     }
//   }
//   return arr;
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// **3**

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers) та значення (value) як параметри. Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.

// Усередині функції:
// Створи порожній масив, у який будеш додавати підходящі числа.
// Використай цикл для ітерації кожного елемента масиву numbers.
// Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.

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

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage() {
//   const args = Array.from(arguments);
//   //   console.log(args);
//   let sum = 0;

//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   return sum / args.length;
// }

// console.log(caclculateAverage(1, 2, 3));
// console.log(caclculateAverage(1, 20, 30, 54));

// functifunction caclculateAverage() {
//   const args = Array.from(arguments);
//   //   console.log(args);
//   let sum = 0;

//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   return sum / args.length;
// }

// console.log(caclculateAverage(1, 2, 3));
// console.log(caclculateAverage(1, 20, 30, 54));

// ******************
// function countProps(object) {
//   const keys = Object.entries(object);
//   return keys;
// }

// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// console.log(countProps({}));

// Виклик `countProps({ name: "Mango", age: 2 })` повертає `2`
// Функція `countProps` приймає наступні параметри: `object`
// Виклик `countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })` повертає `3

// **********  ???????????
// function checkStorage(storage, item) {
//   storage = [];

//   const storageArr = storage.includes(item);
//   if (storageArr === item) {
//     console.log(`${item} is available to order!"`);
//   } else {
//     console.log("Sorry! We are out of stock!");
//   }
// }

// console.log(checkStorage(["apple", "plum", "pear"], "plum"));
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));

// *********************************************************

// *************************  HOMEWORKS 4  ******************************

// *******  1   *******

// function isEnoughCapacity(products, containerSize) {
//   products = Object.values(products);
//   total = 0;
//   for (const product of products) {
//     total += product;
//   }
//   if (total <= containerSize) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
// ***************************************************************************************

// ***********  2  *************

// function calcAverageCalories(days) {
//   const values = Object.values(days);

//   let calculateTotal = 0;

//   for (const day of days) {
//     // console.log(day.calories);
//     calculateTotal += day.calories / days.length;
//   }
//   return calculateTotal;
// }
// // console.log(calcAverageCalories(calcCalories));

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 },
//   ])
// );
// 3180;

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 },
//   ])
// ); // 2270

// console.log(calcAverageCalories([])); // 0

// // ********  3  **********
// Об’єкт profile описує профіль користувача на ігровій платформі.
// У його властивостях зберігається ім’я профілю username та кількість активних годин playTime,
//     проведених у грі.

// const profile = {
//   username: "Jacob",
//   playTime: 300,
//   changeUsername(newName) {
//     this.username = newName;
//   },
//   updatePlayTime(hours) {
//     this.playTime += hours;
//   },
//   getInfo() {
//     return `${profile.username} has ${profile.playTime} active hours!`;
//   },
// };

// Доповни об’єкт profile методами для роботи з його властивостями.

// Метод changeUsername(newName) повинен приймати рядок (нове ім’я) в параметр newName та змінювати значення властивості username на нове. Нічого не повертає.
// Метод updatePlayTime(hours) повинен приймати число (кількість годин) у параметр hours та збільшити на нього значення властивості playTime. Нічого не повертає.
// Метод getInfo() має повертати рядок формату <Username> has <amount> active hours!, де <Username> — це ім’я профілю, а <amount> — кількість ігрових годин.

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

// ********************************************************************

// ******AVTO******

// const changeEven = (numbers, value) => {
//   const newArray = [];

//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       const a = number + value;
//       newArray.push(a);
//     } else {
//       newArray.push(number);
//     }
//   }

//   return newArray;
// };

// console.log(changeEven([1, 2, 3, 4, 5], 10)); //[1, 12, 3, 14, 5]);

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([4, 6, 0]));

// *********************************************
// function filterArray(numbers, value) {
//   let arr = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       arr.push(number);
//     }
//   });
//   return arr;
// }
// console.log(filterArray([1, 5, 7], 3));

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths);

// **************
// const values = [1, 2, 3];

// values.forEach((value) => console.log(value));

// ********** awto
// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const isEveryUserActive = users.every((user) => user.isActive);

// console.log(isEveryUserActive);
// *************************************************************************

// d.z. 5

// **********  1   *******************

// const getUserNames = (users) => users.map((user) => user.name);

// console.log(
//   getUserNames([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       balance: 2811,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       balance: 3821,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       balance: 3793,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       balance: 2278,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       balance: 3951,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       balance: 1498,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       balance: 2764,
//     },
//   ])
// );

// // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// **********************************   2    **************************************************

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((user) => {
//     if (user.friends.includes(friendName)) {
//       return {
//         name: user.name,
//         friends: user.friends,
//       };
//     }
//   });
// };

// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//   },
// ];

// console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []

// ****** 3 *********

// const sortByDescendingFriendCount = (users) =>
//   users.toSorted((a, b) => b.friends.length - a.friends.length);

// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female",
//     },
//   ])
// );
// // [
// //   {
// //     name: "Ross Vazquez",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     gender: "male",
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     gender: "female",
// //   },
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     gender: "female",
// //   },
// //   {
// //     name: "Carey Barr",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     gender: "male",
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     gender: "male",
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     gender: "female",
// //   },
// //   {
// //     name: "Moore Hensley",
// //     friends: ["Sharron Pace"],
// //     gender: "male",
// //   },
// // ];

// *********** 4 ********

// const clients = [
//   {
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811,
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821,
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793,
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278,
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951,
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498,
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764,
//   },
// ];

// const getTotalBalanceByGender = ((users, gender) =>
//     clients.reduce((acc, client) => acc + client.balance, 0)
// console.log(acc)
// );

// // console.log(getTotalBalanceByGender(clients, "male")); // 12053

// // console.log(getTotalBalanceByGender(clients, "female")); // 8863

// **********  lesson  gjh *********

// const product1 = {
//   price: 123,
//   promptName: "Aplle",
//   showInfo() {
//     console.log(this.promptName);
//   },
// };

// const obj2 = {
//   price: 123,
//   promptName: "ARI",
//   showInfo() {
//     console.log(this.promptName);
//   },
// };

// product1.showInfo();
// obj2.showInfo();

// ******

// function drive() {
//   console.log(this.name);
// }

// const obj1 = {
//   name: "Inna",
//   age: 37,
//   drive: drive,
// };

// const obj2 = {
//   name: "Ari",
//   age: 10,
//   drive: drive,
// };

// obj1.drive();
// obj2.drive();
// *********************

// function foo(callback) {
//   const obj = {
//     name: "Inna",
//     test: callback,
//   };

//   obj.test();
// }

// function myCallback() {
//   console.log(this);
// }

// foo(myCallback);

// ____________

// const user1 = {
//   name: "Vikror",
//   drive() {
//     console.log(this.name);
//   },
// };

// const user2 = {
//   name: "Lena",
// };

// const user3 = {
//   name: "Ari",
// };

// user1.drive.call(user2);
// user1.drive.call(user3);

// *********************************÷

// function foo() {
//   console.log(this);
// }
// const cat1 = {
//   name: "katia",
//   showThis: foo,
// };

// const cat2 = {
//   name: "tatia",
//   showThis: foo,
// };

// const cat3 = {
//   name: "satia",
//   showThis: foo,
// };

// cat2.showThis();
// foo();
// ***********************÷

// const obj1 = {
//   name: "Inna",
//   age: 37,
//   foo() {
//     console.log(this.name);
//   },
// };

// const obj2 = {
//   name: "Ari",
//   age: 10,
//   foo: obj1.foo,
// };

// obj1.foo();

// obj2.foo();

// function car() {
//   console.log(this.name);
// }

// const obj1 = {
//   name: "Inna",
//   age: 37,
//   car: car,
// };

// const obj2 = {
//   name: "ARI",
//   age: 10,
//   car: car,
// };

// obj1.car();
// obj2.car();
// ********************
// const chopShop = {
//   cars: [
//     { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
//     { make: "Honda", model: "Accord", amount: 2, price: 22455 },
//     { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
//     { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
//     { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
//     { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
//     { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
//     { make: "Ford", model: "F-150", amount: 11, price: 200 },
//     { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
//     { make: "Ford", model: "Explorer", amount: 6, price: 31660 },
//   ],

//   calcTotalPrice(CarMake) {
//     const totalCars = this.cars.find((item) => item.make === CarMake);
//     return totalCars.price * totalCars.amount;
//   },
// };

// console.log(chopShop.calcTotalPrice("Ford"));
// ************************************

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;
// console.log(child);
// console.log();
// *****************************************

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(child.Prototype);
// console.log(ancestor.hasOwnProperty("age"));
// console.log(child.hasOwnProperty("age"));

// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objB); // { a: "objA prop", [[Prototype]]: objB }

// const objA = {
//   x: 10,
//   y: 200,
// };

// const objB = {
//   t1: 3,
//   t2: 8,
//   _proto_: objA,
// };

// console.log(objB);

// console.log(window);

// const arr = [10, 20, 30];

// console.log(arr);

// //************* (*********** dz 6//
//  *********** 1 ******************÷

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
// **************
// ******************  2  *********************

// class User {
//   name = "Inna";
//   age = 20;
// }

// const user1 = new User();
// console.log(user1);

// ================

// const objC = {
//   c: "objC",
// };

// const objB = Object.create(objC);
// objB.b = "objB";

// const objA = Object.create(objB);
// objA.a = "objA";

// console.log(objA);
// console.log(objB);
// console.log(objC);

// ========================

// / Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки
// набору та зниження швидкості в системі круїз контролю.
// Створити об'єкт cruiseControl з методами accelerate та decrease,
// властивостями speed та brand.

// const cruiseControl = {
//   speed: 0,
//   brand: "audi",
//   accelerate() {
//     this.speed += 10;
//     console.log(`auto ${this.brand} ПРИСКОРЮЄТЬСЯ!!! швидкість ${this.speed}`);
//   },
//   decrease() {
//     if (this.speed <= 0) {
//       console.log(`auto ${this.brand} стоїть`);
//       return;
//     }

//     this.speed -= 10;
//     console.log(`auto ${this.brand} ГАЛЬМУЄ!!! швидкість ${this.speed}`);
//   },
// };

// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.accelerate();

// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();
// console.log(cruiseControl);

// const cruiseControl = {
//   speed: 0,
//   brand: "Audi",
//   accelerate() {
//     this.speed += 10;
//     console.log(
//       `auto ${this.brand} прискорюється, їде зі швидкістю ${this.speed}`
//     );
//   },
//   decrease() {
//     if (this.speed <= 0) {
//       console.log("Авто зупинилось");

//       return;
//     }
//     this.speed -= 10;
//     console.log(
//       `auto ${this.brand} НЕ прискорюється, їде зі швидкістю ${this.speed}`
//     );
//   },
// };

// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.decrease();
// cruiseControl.decrease();
// console.log(cruiseControl);

// const cruiseControl = {
//   speed: 0,
//   brand: "BMW",
//   accelerate() {
//     (this.speed += 10),
//       console.log(
//         `Avto ${this.brand} roshnie shybkosc. shybkosc ${this.speed}`
//       );
//     return;
//   },
//   decrease() {
//     if (this.speed <= 0) {
//       console.log(`Auto stoi`);
//     }
//     this.speed -= 10;
//     console.log(`Avto ${this.brand} gujk ${this.speed}`);
//   },
// };
// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();

// console.log(cruiseControl);
// =======================
// DOM
// ===========================
