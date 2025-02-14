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

const friends = [
  { name: "Ross", online: false },
  { name: "Joey", online: true },
  { name: "Chandler", online: false },
  { name: "PHOEBE", online: true },
  { name: "Monika", online: true },
  { name: "Rachel", online: false },
];

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

// імена всіх друзів

function getNames(allFriends) {
  const name = [];

  for (const item of allFriends) {
    console.log(item);
  }
}

console.log(getNames(friends));
// ********************************************

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
