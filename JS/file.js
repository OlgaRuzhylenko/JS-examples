// // 1. Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва Java Script?". Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"
// const message = prompt("Яка офіційна назва Java Script?");
// console.log(message);
// if (message === "ECMAScript")  {
//     alert('Правильно!');
// }  else {
//     alert("Не знаєте? ECMAScript!");
// }

// 2. відображення часу if...else
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді ряжка формату "14 г. 26 хв. ". Якщо значення змінної minutes = 0, то виводь рядок "14 г.", без хвилин.
// const hours = 14;
// const minutes = 26;
// let timeString;

// // minutes > 0 можна не писати >0, бо minutes приводиться до true
// if(minutes) {
//         timeString = `${hours} г. ${minutes} хв.`;
// } else {
//     timeString = `${hours} г.`
// }
// console.log(timeString);

// 3. Розгалуження
// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль, то виводь в консоль рядок "Це нуль." Якщо передали від'ємне число, то у консоль "Це негативне число"
 
// const userInput = prompt('введіть число');
// if (userInput > 0) {
//     console.log("Це позитивне число");
// } else if (userInput < 0) {
//     console.log("Це негативне число");
// } else {
//     console.log("Це нуль");
// }
// //  або
// const userInput = prompt('введіть число');
// if (!userInput) {
//     console.log("Це нуль");
// }
// else if (userInput > 0) {
//     console.log("Це позитивне число");
// }
// else {
//     console.log("Це негативне число");
// }

// if (!0) {
//     console.log('в мене нуль');
// }

// 4. вкладенні розгалуження
// // Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, то виведи в консоль максимальне з них. В протилежному випадку в консолі повинна бути сума значення b та числа 512.
// const a = 70;
// const b = 50;
// if (a > 100 && b > 100) {
//     console.log(Math.max(a, b));
// } else {
//     console.log(b+512);
// }

// 5. форматування посилання (endsWith)
// Напиши скрипт, який перевіряє чи закінчується значення змінної userInput символом /. Якщо ні - додай до кінця значення userInput цей символ. Використовуй if...else
// const userInput = "website";
// if (!userInput.endsWith('/')) {
// console.log(userInput + "/");
// }

// 6. Форматування посилання (includes та логічне "І")
// Напиши скрипт, який перевіряє чи закінчується значення змінної link символом /. Якщо ні - додай до кінця значення link цей символ, але тільки в тому випадку, якщо в  link є підрядок "my-site". Використовуй if...else
// const link = 'website';
// if (!link.endsWith("/") && link.includes("my-site")) {
// link + "/";
// }
// console.log(link);

// 7. форматування посилання (тернарний оператор). Рефакторинг 
// const link = 'website';
// !link.endsWith("/") && link.includes("my-site") ?  console.log(link + "/") : console.log(link);

// 8. Дедлайн здачі проекту. (if...else)
// Якщо до дедлайну 0 днів = виведи рядок "Сьогодні";
// Якщо до дедлайну 1 день = виведи рядок "Завтра";
// Якщо до дедлайну 2 дні = виведи рядок "Післязавтра";
// // Якщо до дедлайну 3+ днів = виведи рядок "Дата у майбутньому";
// const daysUntilDeadline = 0;
// console.log(typeof(daysUntilDeadline))

// if (daysUntilDeadline >= 3) {
//     console.log("Дата у майбутньому");
// } else if (daysUntilDeadline === 2){
//     console.log("Післязавтра");
// } else if (daysUntilDeadline === 1){
//     console.log("Завтра");
// } else {
//     console.log("Сьогодні");
// // }

// switch(daysUntilDeadline) {
//     case 3:
//         console.log("Дата у майбутньому");
//         break;
//     case 2:
//         console.log("Післязавтра");
//         break;
//     case 1:
//         console.log("Завтра");
//         break;
//      default:
//         console.log("Сьогодні");
//         break;
// }

// 11. Цикл for
// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5

// const max = 100;
// const min = 20; 

// for (let i = min; i >= min && i <= max; i+=1) {
//     if (!(i%5)) {
//         console.log(i);
//     }
// }

// МАСИВИ

const array = [1, "Hello", null, true, [1, 2, 3]];
for (let i = 0; i < array.length; i += 1) {
console.log(i);
console.log([i]);
console.log(array.push([i]));
}