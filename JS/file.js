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

// const array = [1, "Hello", null, true, [1, 2, 3]];
// for (let i = 0; i < array.length; i += 1) {
// // console.log(i);
// // console.log([i]);
// console.log(array[i]);
// if (Array.isArray(array[i])) {
//     for (let j = 0; j <array[i].length; j +=1) {
//         console.log(array[i][j])
//     }
// }
// }

// for (const item of array) {
//     console.log(item);
// if (Array.isArray) {
//     for (const item2 of array) {
//         console.log(item2)
//     }
// // }
// for (let i = 0; i < array.length; i += 1) {
//     if (typeof array[i] === 'string') {
//         array[i] = false;
//     }
// }
// console.log(array);
// ми змінили вихідний масив. for змінює, for Of, копіює
// якщо нам потрібен індекс, то це завджи цикл for

//  SPLIT ТА JOIN
// const str = 'Hello world';
// const arr = str.split(' ');
// const result = arr.reverse().join(' ');
// arr.reverse()
// console.log(arr);
// console.log(result);
// запис в один рядок
// const result = str.split(' ').reverse().join(' ');
// console.log(result);
// for (const item of arr) {
//     console.log(item);
// }
// for (let i = 0; i < arr.length; i-= 1) {
//     console.log(arr[i]);
// }

// const arr = [1, 2, "hello", [2,5]];

// const result = arr.slice(1, 3);
// console.log(result);
// console.log(arr);

// const arr = [1, 2, "hello", [2,5]];
//видаляємо (індекс ел який видалямо, к-ть скільки видалямо)
// arr.splice(2, 1);
// console.log(arr);
//заміна (ігдекс ел який замінюємо, к-ть скільки замінюємо, на що замінюємо)
// arr.splice(2, 1, 'bye');
// console.log(arr);
//додаємо (індекс, на який поставити новий елемент, 0, що додаємо)
// arr.splice(3, 0, "string");
// console.log(arr);
// const idx = arr.indexOf("hello");
// console.log(idx);
// const result = arr.splice(idx, 1, "bye");
// console.log(arr);
// console.log(result);

// 1. Базові операції з масивом
// Створіть масив "genres" з елементами "Jazz" та "Blues"
// Додайте "rock-and-roll" до кінця
// Виведіть у консоль перший елемент масиву
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// видаліть перший елемент та виведіть його в консоль
// вставте "Country" та "Reggae" на початок масиву. 
// const genres = ["Jazz", "Blues"];
// console.log(genres);
// console.log(genres.push("rock-and-roll"));
// console.log(genres);
// console.log(genres[0]);
// console.log(genres[genres.length-1]);
// console.log(genres.shift());
// console.log(genres);
// console.log(genres.unshift("Country", "Reggae"));
// console.log(genres);

// 2. Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких збрігається у змінній values у вигляді рядка. Значення гарантовано розділені пробілом. 
// const values = "8 11";
// const arr = values.split(' ');
// const first = Number(arr[0]);
// const second = Number(arr[arr.length-1]);
// console.log(arr);
// const result = first * second;
// console.log(result);

// 3. перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елементу масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента
// Нумерація елементів повинна починатся з 0.

// const fruits = ['apple', 'grape', 'peach', 'banana', 'lemon'];
// for (let i = 0; i < fruits.length; i += 1) {
//     console.log(`${i+1}: ${fruits[i]}`);
// }
// for (let i = 0,  n = 1; i < fruits.length; i += 1, n +=1) {
//     console.log(`${n}: ${fruits[i]}`);
// }

// 4. Масиви та цикли
// напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова
// let names = "Anna, Olga, Inna, Maria";
// let phones = '80971112233, 80672225599, 0634441100, 0749995511';

// names = names.split(',');
// phones = phones.split(',');

// for (let i = 0; i < names.length; i +=1) {
//        console.log(`${names[i]} - ${phones[i]}`);
// }

// 5. Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка, крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символом пробілу. Скрипт повинен працювати для будь-якого рядка

// const string = 'Welcome to the future'
// const stringArr = string.split(' ');
// console.log(stringArr);
// const result = stringArr.pop();
// console.log(stringArr);
// const result2 = stringArr.shift();
// console.log(stringArr);
// console.log(stringArr.join(' '))
// console.log(typeof(stringArr));
// Один рядок
// const result = string.split(' ').slice(1, -1).join(' ');

// console.log(result)

// 6. Масиви та рядки
// Напиши скрипт, який розгортає рядок (зворотний порядок букв) і виводить його в консоль

// const string = "Welcome to the future"
// console.log(string.split('').reverse().join(''));

// 7. Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента

// const langs = ['cpython', 'bjavascript', 'ac++', 'haskel', 'php', 'ruby'];
// for (let i = 0; i < langs.length; i +=1) {
// //  дивимося в юнікод
//         if (langs[0] > langs[i]) {
//             const result = langs.splice(i,1)[0];
//                       langs.unshift(result)
//         }
//     }
//     console.log(langs)

// 8. Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл 

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0]; // undefined
// for (const item of numbers) {
// if (item < min) {
//     min = item;
// }
// }
// console.log(min);// 1

// ================ФУНКЦІЇ==================
// function add(val, val1, val2, val3) {
// console.log(val + val1 + val2 + val3);
// }
// add (1, 2, 3, 4);
// add (1, 2, 3, 4, 5);
// add (1, 2, 3, 4, 5, 6);

// function add(val, val1, val2, val3, val4, val5) {
//     console.log(val + val1 + val2 + val3 + val4 + val5);
//     }
//     add (1, 2, 3, 4, 5, 6);
//     add (1, 2, 3, 4);
//     add (1, 2, 3, 4, 5);
    
    // function add() {
    //     let sum = 0;
    //     // const arr = Array.from(arguments);
    //     const arr = [...arguments]
    //     console.log(arr);
    //     console.log(arguments);
    //     // for (let i = 0; i < arguments.length; i +=1) {
    //     //     sum += arguments[i];
    //     // }
    //     for (const item of arguments) {
    //         sum += item;
    //     }
    // console.log(sum);
    //     }
    //     add (1, 2, 3, 4, 5, 6);
    //     add (1, 2, 3, 4);
    //     add (1, 2, 3, 4, 5);
    
    
        // ---------RETURN-------
    //     function add() {
    //         let sum = 0;
    //         const arr = [...arguments];
    //         console.log(arr);
    //         console.log(arguments);
    //         for (const item of arguments) {
    //             sum += item      
    //           }
    //     //  !!!!!!!!!!!!!!!!!!!!!!!!!!!
    //      return sum;
    //     //  !!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //     }
    //    const responce = add(1, 2, 30);
    //    console.log(responce);

    // function lastNumber () {
    //     let sum = 0;
    //     for (const arg of arguments) {
    //         sum += arg; 
    //         if (sum > 10) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }
    // const responce = lastNumber (1, 2, 3);
    // console.log(responce);
    // console.log(lastNumber (1, 2, 3, 4));
    // console.log(lastNumber (1, 2, 3, 4, 5));

//     function createString (name, year) {
//       const result = add(year);
//         return `${name} years ${result}`
//     }
//     createString ("mango", [1, 2, 3]);
//     console.log(createString ("mango", [1, 2, 3]))
   
//    function add (arr) {
//     let sum = 0;
//     for (const num of arr) {
//         sum += num;
//     }
//     return sum;
//    }

// 1. Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кг на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді 24,7 або 24.7, тобто як роздільник дробової частини може бути кома

// Індекс маси тіла необхідно округлити до однієї цифри після коми
// function calcBMI(weight, height) {
//     weight = Number(weight.replace(',', '.'));
//     height = Number(height.replace(',', '.'));
//     // console.log(weight);
//     // console.log(height);

//     // return weight / Math.pow(height, 2);
//    return Number((weight / height ** 2).toFixed(1));
// }


// const bmi = calcBMI("88,3", "1.75");

// console.log(bmi);

// (1) створюємо функцію
// (2) за доп метода replace замінюємо , на .
// (3) приводимо до типу даних number, тому що далі математична дія
// (4) приводимо height до квадрата за доп Math.pow(height, 2), або  height ** 2;
// (5) залишаємо 1 знак після коми за доп. toFixed(1)
// (6) приводимо до number, бо після toFixed отримали рядок