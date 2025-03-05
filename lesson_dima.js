// **************   2   modul

/**
 * Форматування посилання
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

// let link = "https://my-site.ua/about";

// if(!link.endsWith("/") && link.includes("my-site")) {
//     link += "/";
// }

// console.log(link);

// -------------------------------------- 4

/**
 * Напиши цикл for, який виводить у консоль браузера
 * числа за зростанням від a до b,
 * але тільки якщо число кратне 5.
 */

// const a = 21;
// const b = 100;

// for(let i = a; i < b; i++) {
//     if(!(i % 5)) {
//         console.log(i);
//     }
// }

// for(let i = b; i > a; i--) {
//     if(!(i % 5)) {
//         console.log(i);

//     }
// }

/*
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять в діапазон чисел у змінних від min до max.
 * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в
 * ньому два парних числа - 2 і 4, їх сума 6.
 */

// const min = 0;
// const max = 5;
// let total = 0;

// for(let i = min; i <= max; i++) {
//     if(i % 2 === 0) {
//         total += i;
//     }
// }

// console.log(total);

/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

// const hours = 14;
// const minutes = 20;
// let time = '';

// if(minutes === 0) {
//     time = `${hours} г.`;
// } else {
//     time = `${hours} г. ${minutes} хв.`;
// }

// const time = minutes > 0 ? `${hours} г. ${minutes} хв.` : `${hours} г.`;
// console.log(time);

// -------------------------------------- 6

/*
 * Напиши скрипт перевірки підписки користувача при доступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

// const sub = "vip";
// let canConnect;

// if(sub === "pro" || sub === "vip") {
//     canConnect = true;
// } else {
//     canConnect = false;
// }

// let canConnect = sub === "pro" || sub === "vip";

// console.log("Can connect", canConnect);

/*
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */

// const isOnline = true;
// const isFriend = true;
// const isDnd = true;

// //                      true && true && false
// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log("Можна відкрити чат?", canOpenChat);

// ************** 3 modul

/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i + 1} - ${fruits[i]}`);
// }

/********************************
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

// const numbers = [1, 4, 15, 27, 30, 77];
// let total = 0;

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     total += number;
//   }
// }
// console.log(total);

/*********************
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "38001234567,38001112233,380055566377,380055566300";

// const namesArr = names.split(",");
// const phonesArr = phones.split(",");

// for (let i = 0; i < namesArr.length; i++) {
//   console.log(`${namesArr[i]} - ${phonesArr[i]}`);
// }

// *********************************
//  * Напиши скрипт, який виводить у консоль усі слова рядка
//  * крім першого і останнього. Результуючий рядок не повинен починатися
//  * або закінчуватися символ пробілу.
//  * Скрипт повинен працювати для будь-якого рядка.
//  */

// const string = "Welcome to the future Viktor ! ???";

// const stringArr = string.split(" ");

// const result = stringArr
//   .slice(1, stringArr.length - 1)
//   .join(" ")
//   .trim();

// console.log(result);

/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

// const values = [2, 17, 94, 1, 23, 37];
// let min;

// for(let i = 0; i < values.length; i++) {
//     if(i === 0) {
//         min = values[i];
//     } else if(values[i] < min) {
//         min = values[i];
//     }
// }

// console.log(min);

// for(let i = 0; i < values.length; i++) {
//     console.log(`i - ${i}`, `value - ${values[i]}`);
// }

// ********** lesson 6 *********
/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

// function logItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }
// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["Inna", "Ari", "Stah", "Viktor"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

// function printInfo(names, phones) {
//   const namesArr = names.split(",");
//   const phonesArr = phones.split(",");

//   for (let i = 0; i < namesArr.length; i++) {
//     console.log(namesArr[i], phonesArr[i]);
//   }
// }
// printInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

/**
 * Напиши функцію formatTime(totalMinutes) яка переведе значення
 * totalMinutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

// function formatTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;

//   const timeHours = String(hours).padStart(2, 0);
//   const timeMinutes = String(minutes).padStart(2, 0);

//   return `${timeHours} : ${timeMinutes}`;
// }
// console.log(formatTime(77));

// ************   lesson   7

/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

// const user = {
//   name: "Alice",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// ******  II  ******
// const user = {
//   name: "Alice",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// function foo(obj) {
//   obj.mood = "happy";
//   obj.hobby = "skydiving";
//   obj.premium = false;

//   const keys = Object.keys(obj);
//   const arr = [];

//   for (const key of keys) {
//     arr.push(`${key}: ${obj[key]}`);
//   }
//   return arr;
// }
// console.log(foo(user));

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const values = Object.values(salaries);

// let total = 0;

// for (const value of values) {
//   total += value;
// }
// console.log(total);

// *****  II *****

// function foo(summa) {
//   const values = Object.values(summa);

//   let total = 0;

//   for (const value of values) {
//     total += value;
//   }
//   return total;
// }
// console.log(foo(salaries));

// *******  III  *******

// const keys = Object.keys(salaries);

// let total = 0;

// for (const key of keys) {
//   total += salaries[key];
// }
// console.log(total);

// ************   lesson   8

// const friends = [
//   { name: "Ross", online: false },
//   { name: "Joey", online: true },
//   { name: "Chandler", online: false },
//   { name: "PHOEBE", online: true },
//   { name: "Monika", online: true },
//   { name: "Rachel", online: false },
// ];

// масив обєктів

// function findByname(allFriends, findName) {
//   for (const friend of allFriends) {
//     if (friend.name === findName) {
//       return friend.name;
//     }
//   }
//   return "Not found";
// }
// console.log(findByname(friends, "Monika"));

//********* */ імена всіх друзів  **********

// function getNames(allFriends) {
//   const names = [];

//   for (const item of allFriends) {
//     names.push(item.name);
//   }

//   return names;
// }

// console.log(getNames(friends));
// ********************************************

// ********ONLINE**********

// function getInfo(allFriendsOnline) {
//   let online = [];

//   for (const item of allFriendsOnline) {
//     if (item.online === true) {
//       online.push(item.name);
//     }
//   }

//   return online;
// }

// console.log(getInfo(friends));

// *************************************************************************
//   *************************************************************************
//   *************************************************************************
//   *************************************************************************
//   *************************************************************************
// * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

//   /*
//    * Кожна транзакція це об'єкт із властивостями: id, type та amount
//    */

//   const account = {
//     // Поточний баланс рахунку
//     balance: 0,

//     // Історія транзакцій
//     transactions: [],

//     /*
//      * Метод створює та повертає об'єкт транзакції.
//      * Приймає суму та тип транзакції.
//      */
//     createTransaction(amount, type) {
//       const obj = { id: amount, amount, type };
//       return obj;
//     },

//     /*
//      * Метод, що відповідає за додавання суми до балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій
//      */
//     deposit(amount) {
//       this.balance += amount;
//       const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//       this.transactions.push(transaction);
//     },

//     /*
//      * Метод, що відповідає за зняття суми з балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій.
//      *
//      * Якщо amount більше ніж поточний баланс, виводь повідомлення
//      * про те, що зняття такої суми не можливе, недостатньо коштів.
//      */
//     withdraw(amount) {
//       if(this.balance < amount) {
//         console.log("недостатньо коштів");
//         return;
//       }

//       this.balance -= amount;
//       const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//       this.transactions.push(transaction);
//     },

//     /*
//      * Метод повертає поточний баланс
//      */
//     getBalance() {
//       return this.balance;
//     },

//     /*
//      * Метод шукає та повертає об'єкт транзакції по id
//      */
//     getTransactionDetails(id) {
//       for(const item of this.transactions) {
//         if(item.id === id) {
//           return item;
//         }
//       }
//       return "Not found";
//     },

//     /*
//      * Метод повертає кількість коштів
//      * певного типу транзакції з усієї історії транзакцій
//      */
//     getTransactionTotal(type) {
//       let res = 0;

//       for(const item of this.transactions) {
//         if(item.type === type) {
//           res += item.amount;
//         }
//       }

//       return res;
//     },
// };

// account.deposit(300);
// account.withdraw(100);

// console.log(account);

//   *************************************************************************
//   *************************************************************************
//   *************************************************************************
//   **********************************************
//  lesson 9

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function printContactsInfo({ names, phones }) {
//   const namesArr = names.split(",");
//   const phonesArr = phones.split(",");
//   for (let i = 0; i < namesArr.length; i += 1) {
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);
//   }
// }

// const printContactsInfo = (obj) => {
//   const namesArr = obj.names.split(",");
//   const phonesArr = obj.phones.split(",");

//   namesArr.forEach((item, index) => {
//     console.log(`${item}: ${phonesArr[index]}`);
//   });
// };

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

// ------------------------------------------------ 4

/**
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */

// const allCars = [
//   { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
//   { make: "Honda", model: "Accord", amount: 2, price: 22455 },
//   { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
//   { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
//   { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
//   { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
//   { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
//   { make: "Ford", model: "F-150", amount: 11, price: 27110 },
//   { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
//   { make: "Ford", model: "Explorer", amount: 6, price: 31660 },
// ];

// // model********

// const getModels = (cars) => {
//   const res = [];
//   cars.forEach((item) => {
//     res.push(item.model);
//   });
//   return res;
// };

// console.log(getModels(allCars));

/**
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
 * значенням властивості price залежно від переданої знижки.
 */

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map((item) => {
//     return {
//       ...item,
//       price: item.price * (1 - discount),
//     };
//   });
// };

// console.log(makeCarsWithDiscount(allCars, 0.2));

// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map((item) => {
//         return {
//             ...item,
//             price: item.price * (1 - discount)
//         }
//     })
// }

// console.table(makeCarsWithDiscount(allCars, 0.2));
// console.table(makeCarsWithDiscount(allCars, 0.4));

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const playerIdToUpdate = "player-3";

// const getPlayer = players.map((player) => {
//   if (player.id === playerIdToUpdate) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }

//   return player;
// });

// console.log(getPlayer);

/*
 * Збільшуємо кількість годин гравця за id
 */

// const playerIdToUpdate = "player-3";

// const newArr = players.map((player) => {
//     if(player.id === playerIdToUpdate) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 100
//         }
//     }
//     return player;
// })

// const update = (players, playerId) => {
//     return players.map((player) => {
//         if(player.id === playerId) {
//             return {
//                 ...player,
//                 timePlayed: player.timePlayed + 100
//             }
//         }
//         return player;
//     })
// }

// console.log(update(players, playerIdToUpdate));

// *****************************************************************

// lesson 12********

//  * Рахуємо загальну кількість годин
//  */

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// const result = players.reduce((acc, player) => acc + player.timePlayed, 0);

// console.log(result);

// /**
//  * -------------------------------------
//  */
// const allCars = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

/**
 * Нехай функція getModelsOnSale повертає масив моделей автомобілів,
 * але тільки тих, які зараз на розпродажі.

// const getModelsOnSale = (cars) => {
//     return cars
//         .filter(car => car.onSale)
//         .map(car => car.model)
// }

// console.log(getModelsOnSale(allCars))

/**
 * Нехай функція getSortedCarsOnSale повертає масив автомобілів
 * на розпродажі (Властивість onSale), відсортованих за зростанням ціни.
 */

// const getSortedCarsOnSale = (cars) => {
//     return cars
//         .filter(car => car.onSale)
//         .toSorted((a, b) => a.price - b.price)
//         .map(car => {
//             return {
//                 model: car.model,
//                 price: car.price
//             }
//         })
// }

// console.table(getSortedCarsOnSale(allCars))

// ============================================================

// const arr = ["apple,🍎", "banana,🍌", "lemon,🍋"];

// const obj = arr.reduce((acc, item) => {
//   const arrItem = item.split(",");
//   const key = arrItem[0];
//   const value = arrItem[1];

//   acc[key] = value;
//   return acc;
// }, {});

// console.log(obj);

//
// ===============================================================

// courses = ["mahtam", "fizic", "inform", "fizic", "biolog", "mahtam", "astr"];

// const unique = courses.filter(
//   (item, index, arr) => index === arr.indexOf(item)
// );

// console.log(unique);

// ======================================================================

// *********************      lesson 11       *************************************
// const foo = () => {
//   console.log(this);
// };
// foo();
// =====================
// const user = {
//   userName: "Inna",
//   showThis() {
//     console.log("this", this);

//     const foo = () => {
//       console.log("foo", this);
//     };
//     foo();
//   },
//   lalala: () => {
//     console.log("lalala", this);
//   },
// };

// user.showThis();
// user.lalala();
// ________________________________________
// const user2 = {
//   userName: "Viktor",
//   showThis: user.showThis,
// };

// user.showThis();
// user2.showThis();
// =====================

// const user = {
//   userName: "Inna",
//   showThis: () => {
//     console.log("this", this);
//   },
// };
// user.showThis();

// ==========================
// контекст методу обʼєта, але оголошена як зовнішня функція
// ==========================

// function showThis() {
//   console.log("this", this);
//   console.log("username", this.userName);
// }

// const user = {
//   userName: "Alice",
// };

// user.showThis = showThis;

// user.showThis();
// *****************************************************************

// ==========================
// ВИКЛИК БЕЗ КОНТЕКСТУ, АЛЕ ОГОЛОШЕННЯ ЯК МЕТОД ОБʼЄКТА.
// ==========================

// const user = {
//   userName: "Yura",
//   showThis() {
//     console.log(this);
//   },
// };

// const foo = user.showThis;

// console.log(foo);

// foo();
// **************************************************

// ==================================
// КОНТЕКСТ У CALLBACK-ФУНКЦІЯХ
// ==================================

// const user = {
//   userName: "petya",
//   showThis() {
//     console.log(this);
//   },
// };

// function foo(callback) {
//   console.log(callback);
//   callback();
// }
// foo(user.showThis);

// =======================================

// const chopShop = {
//   stones: [
//     { name: "diamond", price: 2700, quantity: 4 },
//     { name: "ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneNama) {
//     const stone = this.stones.find(
//       (item) => item.name.toLowerCase() === stoneNama.toLowerCase().trim()
//     );

//     if (!stone) {
//       return `${stoneNama} not found`;
//     }

//     return stone.price * stone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("    RubY  "));

// ***********************************************************************
// =========================================================================
//
// function showThis(gh, gjh, arr) {
//   console.log(this);
//   console.log(gh, gjh, arr);
// }

// const objA = {
//   a: 5,
//   b: 20,
// };

// const objB = {
//   x: 100,
//   y: 200,
// };

// showThis.call(objA, "ari", true, [2, 5, 6]);

// showThis.apply(objB, ["Petya", 34, [4, 8, 12]]);

// ============================================================================
// *********      call, apply, bind   *****************
// ==============+===========================================================

// function changeColor(color) {
//   console.log("this", this);
//   this.color = color;
// }

// const hat = {
//   color: "red",
// };

// const sweater = {
//   color: "black",
// };

// changeColor.call(hat, "blue");
// console.log(hat);

// changeColor.apply(sweater, ["green"]);
// console.log(sweater);

// --------\
// **************   Iсп  bind()****************

// const changeHatColor = changeColor.bind(hat, "yellow");

// changeHatColor();
// console.log(hat);
// ---------------
//********************   */ IIсп  *********************

// const changeSweaterColor = changeColor.bind(sweater);

// changeSweaterColor("yellow");
// console.log(sweater);

// ===========================================================

// const counter = {
//   value: 0,
//   incremert(value) {
//     console.log("increment", this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log("decrement", this);
//     this.value -= value;
//   },
// };

// function foo(value, callback) {
//   console.log(callback);
//   callback(value);
// }

// foo(10, counter.incremert.bind(counter));

// foo(2, counter.decrement.bind(counter));

// console.log(counter);

// ===============================================

// const aninal = {
//   legs: 4,
// };

// const dog = Object.create(aninal);

// dog.name = "patron";

// console.log(dog);
// console.log(dog.legs);

// -----------------------------------------
// console.log(dog.hasOwnProperty("name"));
// -----------------------------------------

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key, dog[key]);
//   }
// }
// -----------------------------------

// const keys = Object.keys(dog);

// console.log(keys);

// -------------------------------------------------------

// const objC = {
//   c: "objC",
// };

// const objB = Object.create(objC);
// objB.b = "objB";

// const objA = Object.create(objB);
// objA.a = "objA";

// console.log(objA.d);
// console.log(objA);
// console.log(objA.hasOwnProperty("c"));
// ================================================

// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки набору та зниження швидкості в системі круїз контролю.
// Створити об'єкт cruiseControl з методами accelerate та decrease, властивостями speed та brand.

// const cruiseControl = {
//     speed: 0,
//     brand: "Audi",
//     accelerate() {
//         this.speed += 10;
//         console.log(`Автомобіль ${this.brand} прискорюється. Швидкість ${this.speed}`);
//     },
//     decrease() {
//         if(this.speed <= 0) {
//             console.log("Авто зупинилось");
//             return;
//         }
//         this.speed -= 10;
//         console.log(`Автомобіль ${this.brand} гальмує. Швидкість ${this.speed}`);
//     }
// }

// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();

// console.log(cruiseControl);

// *********************************÷
// ===========================÷
// const obj1 = {
//   x: 2,
//   y: 4,
// };

// const obj2 = Object.create(obj1);
// console.log(obj1);

// const obj = {};
// // console.log(hasOwnProperty(obj));
// console.log(Object.getPrototypeOf(obj)); // Поверне прототип об'єкта
// console.dir(obj, { depth: null }); // Відобразить глибоку структуру об'єкта

// const user = {
//   name: "Anna",
//   showThis() {
//     console.log("this", this);
//   },
// };

// user.showThis;

// console.log(window);
// =========================÷
// ****************************

// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this

// const MAX_SPEED = 60;

// const audi = {
//   brand: "audi",
//   speed: 30,
// };

// const bmw = {
//   brand: "bmw",
//   speed: 70,
// };

// function speedSensor(maxSpeed) {
//   if (this.speed <= maxSpeed) {
//     return `Автомобіль ${this.brand} рухфється з безпечною швидкістю.`;
//   }
//   return `${this.brand} - Перевищено швидкість!`;

//   return this.speed <= maxSpeed
//     ? `Автомобіль ${this.brand} рухається з безпечною швидкістю.`
//     : `${this.brand} - Перевищено швидкість!`;
// }

// console.log(speedSensor.call(audi, MAX_SPEED));
// console.log(speedSensor.apply(bmw, [MAX_SPEED]));

// ********************  lesson 12    ****************

/**
 * Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
 * - email - пошта, рядок
 * - age - вік, число
 * - numberOfPosts - кількість постів, число
 * - topics - масив тем на яких спеціалізується блогер
 *
 * Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
 *
 * - Додай метод getInfo(), який, повертає рядок:
 *    User ${email} is ${age} years old and has ${numPosts} posts.
 *
 * - Додай метод updatePostCount(value), який у параметрі value
 *    приймає кількість постів, які потрібно додати користувачеві.
 */

// class Blogger {
//     constructor(obj) {
//         this.email = obj.email;
//         this.age = obj.age;
//         this.numberOfPosts = obj.numberOfPosts;
//         this.topics = obj.topics;
//     }

//     getInfo() {
//         return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//     }

//     updatePostCount(value) {
//         this.numberOfPosts += value;
//     }
// }

// const alice = new Blogger({
//     email: "alice@gmail.com",
//     age: 25,
//     numberOfPosts: 30,
//     topics: ["tech", "sport"]
// });
// alice.updatePostCount(10);
// console.log(alice.getInfo());

// console.log(alice);

// ------------------------------------------------- 4

/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */

// class User {
//     #login;
//     #email;

//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(newLogin) {
//         this.#login = newLogin;
//     }

//     getEmail() {
//         return this.#email;
//     }

//     setEmail(newEmail) {
//         this.#email = newEmail;
//     }
// }

// **********************************

// ==============================================
//    lesson 13
// ===============================================

// const options = [
//   { label: "червоний", color: "#F44336" },
//   { label: "синій", color: "#2196F3" },
// ];

// const colorPickerContainerEl = document.querySelector(".color-picker");
// console.log(colorPickerContainerEl);

// const elements = options.map((option) => {
//   const buttonEl = document.createElement("button");
//   buttonEl.classList.add("color-picker__option");
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   return buttonEl;
// });

// colorPickerContainerEl.append(...elements);
