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

// 2. Найменше з чисел
// Напиши функцію min (a, b), яка повертає найменше з чисел a та b 
// //якщо не відомо скільки аргументів
// function min (a, b)
// {
//     const arr = [...arguments]
//         console.log(arr);

//         let minNumber = arr[0];
//      for (const number of arr) {
//      console.log(number);
      
//             if (number < minNumber) {
//                 minNumber = number
//         }
//     }
//     return(minNumber);
// }

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// коротший варіант
// function min (a, b) {
//     if (a > b) {
//         return b;
//     }
//     return a;
// }

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// тернарний оператор
// function min (a, b) {
//     return a > b ? b : a;
// }

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// 3. Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом

// function getRectArea(dimensions) {
//     dimensions = dimensions.split(' ');
//     // const first = Number(dimensions[0]);
//     // const second = Number(dimensions[1]);

//     // return first * second;
//     // console.log(second);
// // якщо скорочено
// return Number(dimensions[0] * dimensions[1]);

// }

// console.log(getRectArea("8 11"));
// console.log(getRectArea("46 11"));
// console.log(getRectArea("8 112"));

// 4. Логування елементів
// Напиши функцію logItems(items), яка отримує масив та використовує цикт for, який для кожного леемента масиву буде виводити в консоль повідомлення у форматі <номер елемена> - <значення елемента>. Нумерація елементів повинна починатися з 1

// Наприклад, для першого елемента масиву ['Mango', 'Poly', "Ajax"] з індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax

// function logItems(items) {
// //     for (let i = 0, num = 1; i < items.length; i +=1, num +=1) {
// //         console.log(`${num} - ${items[i]}`)
     
// //     }
// // без num
// // for (let i = 0; i < items.length; i +=1) {
// //       console.log(`${i + 1} - ${items[i]}`)
         
// //     }
// // }

// logItems(['Mango', 'Poly', "Ajax"]);
// logItems(['***', '---', "///"]);

// 5. Логування контактів
// Напиши функцію printContactsInfo(names, phones), яка виводить у консоль ім'я та тел номер користувача. У параметри names та phones будуть передані рядки імен та тел номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова

// function printContactsInfo(names, phones) {
// names = names.split(',');//зробили масив 
// phones = phones.split(',');
// console.log(names);
// console.log(phones);

// for (let i = 0; i < names.length, i < phones.length; i +=1) {
//     console.log(`${names[i]} - ${phones[i]}`)
// }

// }
// printContactsInfo ('Olga,Anna,Maria', 
// '097555,063333,073999')

// 6. Пошук найбільшого елемента
// Напиши функцію findLargestNumber(numbers) яка шукає найбільше число в списку чисел (РІЗНА КІЛЬКІСТЬ)

// function findLargestNumber() {
// // const arr = Array.from(arguments)
// const arr = [...arguments];
// let max = arr[0];
// // console.log(max);

// for (const num of arr) {
//     if (num > max) { 
//         max = num;
//     }
// }

// return max;
// }

// console.log(findLargestNumber(2, 17, 94, 1, 23, 37));
// console.log(findLargestNumber(49, 4, 7, 83, 12));

// тепер в одному із аргументів масив
// function findLargestNumber() {

// let max;
// for (const num of arguments) {
//     if (typeof num === "number") {
//         max = num;
//         break
//     }
// }
//  for (const num of arguments) {
//     if (typeof num === "number") {
//         if (num > max) {
//             max = num
//         } 
//     }else {
//             max = findLargestNumber(...num)
//         }
//     }
//     return max;
//  }

// console.log(findLargestNumber([1, 143, 5, 7], 6, 7, 8, 88, 123));

// 7. Середнє значення
// Напишіть функцію calAverage(), яка приймає довільну кількість аргументів і повертає середнє значення. Усі аргументи будуть лише числами

// function calAverage() {
//     // console.log(arguments)
// let total = 0

// for (const num of arguments) {
//     total += num
// }
// return total / arguments.length
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); //8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// 8. Форматування часу
// Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM

// function formatTime(minutes) {
// const hours = Math.floor(minutes / 60); // округлили годиин до меншого
// minutes = minutes % 60;
// return `${hours.toString().padStart(2,"0")} : ${minutes.toString().padStart(2,"0")}`
// // console.log(hours);
// // console.log(minutes)
// }

// console.log(formatTime(70)); //"01:10"
// console.log(formatTime(450)); //"07:30"
// console.log(formatTime(1441)); //"24:01"

// 9. Колекція курсів(includes, indefOf, push і т.д.)
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове
// const courses = ['HTML', 'CSS', "JS", 'React', 'PostgreSQL'];
// ==========================================
// function addCourse(course) {
//     if (courses.includes(course)) {
//     return `ви вже маєте такий курс`
//     }
//     courses.push(course)
// }


// addCourse('Express');
// console.log(courses);
// console.log(addCourse('CSS'))
// ============================================
// ============================================
// function removeCourse(course) {
//     if (courses.includes(course)) {
//        const idx = courses.indexOf(course)
//         courses.splice(idx, 1)
        
//         return
//     }
//     return `курс із таким ім'ям не знайдено`
// }


// removeCourse('React');
// console.log(courses);
// console.log(removeCourse('Vue'));

// // ===========================ОБ'ЄКТИ=================================
// const user = {
//     name: 'Artem',
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         "React Native": false
//     }
// }
// console.log(user.name);
// console.log(user["languages"]["React Native"]);

// for (const key in user) {
// console.log(user[key]);
// }

//  const user = {
//     name: 'Artem',
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         "React Native": false
//     }
// }
// змінюємо щось в об'єкті
// // user.age = 29;
// user.age += 1;
// console.log(user.age);

// user.city = "Kyiv";
// console.log(user.city);

// видалення ключа
// delete user.city;
// console.log(user.city);

// заборона змінювати об'єкт
//  const user = {
//     name: 'Artem',
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         "React Native": false
//     }
// }

// Object.freeze(user)
// // далі буде проігноровано
// user.adfadfsd = "afadsfvadsv";
// user.age = '100';
// console.log(user);

//  const user = {
//     name: 'Artem',
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         "React Native": false
//     }
// }
// const user2 = Object.create(user);
// user2.age = 33;
// console.log(user2);

// for (const key in user2) {
//     // console.log(key);
    
//     if(user2.hasOwnProperty(key)) {
//         console.log("Own",user2[key]);
//     } else {
//         console.log("All",user2[key]);
//     }
// }
// чи присутня властивість і чи вона власна:
// const user = {
// score : false
// }

// if(user.hasOwnProperty('score')) {
//     console.log('yes')
// } else {
//     console.log('no')
// }
// чи присутня властивість? Не важливо власна чи упадкована
// const user = {
//     score : false
//     }
// if ('score' in user) {
//         console.log('yes')
//     } else {
//         console.log('no')
//     }

// =========методи об'єкта============
//  const user = {
//     name: 'Artem',
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         "React Native": false
//     },
//     sayHello() {
//         console.log(this);
//         //це те ж саме що прописати  console.log(user);
// }
// }

// const user2 = Object.create(user);
// user2.age = 100;
// // console.log(user2);
// user2. sayHello()
// user. sayHello()

// this треба для того, щоб можна було дітлися методами. Щоб одна фукнція працювала в різних об'єктах

// const user = {
//     name: 'Artem',
//     age: 28,
//     languages: {
//         html: true,
//         css: false,
//         js: true,
//         ReactNative: false
//     },
//     sayHello() {
//         console.log(`My name ${this.name}`);
//      },
//      iKnow() {
// const keys = Object.keys(this.languages);
// const values = Object.values(this.languages);
// const entries = Object.entries(this.languages);

// console.log(keys);
// console.log(values);
// console.log(entries);


// for(const key of keys) {
//     if (this.languages[key]) {
//         console.log(key);
//     }
// }
// Object.keys повертає завжди власні назви


        //способом нижче перебирати не зручно
// for (const key in this.languages) {
//     if(this.languages[key])
//     //цей рядок з if шукає яка мова =  true
//     console.log(key)
// }
     

// const user2 = Object.create(user);
// user2.name = 'Den';
// // // console.log(user2);
// user2. sayHello()
// user. sayHello()

// user.iKnow()

// 1. Основи об'єктів
// Напиши скрипт, який для об'єкта user послідовно:

// додає поле mood зі значенням "happy"
// Замінює значення hobby на "skydiving"
// Замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значення, використовуючи object.keys() та for...of 

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.skills = {
//     run: true
// }
// user.mood = 'happy',
// user.hobby = 'skydiving'
// // user["premium"] = false,
// const key = 'premium';
// user[key] = false;
// console.log(user);

// const keys = Object.keys(user);
// for (const key of keys) {
//     console.log(`${key} : ${user[key]}`);
// }
// for (const key in user) {
//     console.log(user[key]);
// }

// 2. метод Object.values()
// У нас є об'єкт, де зберігаються зп нашої команди. Напишіть код для підсумування всіх зп і збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// }

// let sum = 0;
// const values = Object.values(salaries);
// console.log(values);
// for (const value of values) {
//     sum += value;
//     // console.log(values);
// }
// console.log( sum);

// for (const key in salaries) {
//     sum += salaries[key];
//     // console.log(salaries[key]);
//    }
// console.log(sum);

// 3. Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [{
//     name: 'Смарагд',
//     price: 1300,
//     quantity: 4
// },
// {
//     name: 'Діамант',
//     price: 2700,
//     quantity: 3
// },
// {
//     name: 'Сапфір',
//     price: 400,
//     quantity: 7
// },
// {
//     name: 'Щебінь',
//     price: 200,
//     quantity: 2
// },
// ]
// function calcTotalPrice(stones, stoneName) {
//     let result = 0;
//     for (const stone of stones) {
//         // console.log(stone)
//         if (stone.name === stoneName) {
//             result = stone.price * stone.quantity;
//             break;
//         }
//     }
//     return result;
// }
// function calcTotalPrice(stones, stoneName) {

//     for (const stone of stones) {
//         // console.log(stone)
//         if (stone.name === stoneName) {
//            return stone.price * stone.quantity;
//            }
//         console.log(stone.name)
//     }
//     return 'Empty'
// }

// console.log(calcTotalPrice(stones, 'Сапфір'));

// 4. Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та інсторією транзакцій

// Типів транзакцій всього два
// можна покласти чи зняти гроші з рахунку

// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw'
// };
// Object.freeze(Transaction)
// // Кожна транзакція це об'єкт із властивостями: id, type та amount

// const account = {
//     //поточний баланс рахунку
//     balance: 0,

//     //історія транзакцій
// transactions: [],

// //метод створює та повертає об'єкт транзакції
// // Приймає суму та тип транзакції
// createTransaction(amount, type) {
//     return {
//         id: Date.now(),
//         amount,
//         type
//     }

// },
// //метод, що відповідає за додавання суми до балансу.
// // Приймає суму транзакції
// // викликає createTransaction для створення об'єкта транзакції, після чого додає його до історії транзакцій
// deposit(amount) {
//     if (amount <= 0) {
//         return 'Error'
//     }
// const item = this.createTransaction(amount, Transaction.DEPOSIT)
// this. balance += amount
// this.transactions.push(item);
// },
//     //метод що відповідає за зняття суми з балансу
//     //приймає суму транзакції
//     //Викликає createTransaction для створення об'єкта транзакції
//     //після чого додає його до історії транзакцій

//    //Якщо amount більше ніж поточний баланс, виводь повідомлення про те, що зняття такої суми не можливе, недостатньо коштів

//    withdraw(amount) {
//     if (amount > this.balance || amount <= 0) {
//         return 'недостатньо коштів'
//     }
//     // {
//     //     id: Date.now(),
//     //     amount,
//     //     type
//     // }
    
//     const item = this.createTransaction(amount, Transaction.WITHDRAW)
//    this.transactions.push(item);
//    this.balance -= amount;
//    },

//    //меттд повертає поточний баланс
//    getBalance() {
//     return this.balance
//    },

//    //метод шукає та повертає об'єкт транзакції по id

// getTransactionDetails(id) {
//     for (const transactions of this.transactions) {
//         if (transactions.id === id) {
//             return Transaction
//         }
//     }
//     return 'Empty'
// },
// //метод повертає кількість коштів певного типу з усієї історії транзакцій
// getTransactionTotal(type) {
//     let sum = 0;
// for (const Transaction of this.transactions) {
//     if(Transaction.type === type) {
// sum +=Transaction.amount
//     }
// }
// return sum;
// },
// }
// account.deposit(1);
// account.deposit(1234);
// account.deposit(1431);
// account.withdraw(123);
// console.log(account.getTransactionTotal(Transaction.WITHDRAW))
// console.log(account.withdraw(123));
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(16));
// // console.log(account.createTransaction(1000, 'deposit'));

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
  // Change code below this line
  // const ownerName = apartment.owner.name;
  // const ownerPhone = apartment.owner.phone;
  // const ownerEmail = apartment.owner.email;
//   console.log(ownerEmail);
  // const numberOfTags = apartment.tags.length;
//   console.log(numberOfTags);
  // const firstTag = apartment.tags[0];
//   console.log(firstTag);
  // const lastTag = apartment.tags[apartment.tags.length-1];
//   console.log(lastTag);
  // Change code above this line
  // console.log(genres[genres.length-1]);

  
  // apartment.price = 5000,
  // // console.log(apartment.price);
  // apartment.rating = 4.7,
  // //  console.log(apartment.rating);
  // apartment.owner.name = "Henry Sibola",
  // // console.log(apartment.owner.name);
  // apartment.tags = apartment.tags.push("trusted"),
  // console.log(apartment.tags);

//  const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {country: 'Jamaica', city: 'Kingston'}
// console.log(apartment.location)

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
// keys.push(key)
//   values.push(apartment[key])
// }

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (const key in object) {
//   if (object.hasOwnProperty(key)) {
//     propCount = Object.keys(object).length
//   }
// }
//   // Change code above this line
//   return propCount;
// }


// console.log(countProps({ name: "Mango", age: 2 }))

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);
// for (const key of keys) {
//   values.push(apartment[key])
// }
// console.log(values);

// function countProps(object) {
  
// let propCount = 0;
//   const keys = Object.keys(object)

//   for (const key of keys) {
//       propCount += 1;
//       }

//   return propCount;

// }
// console.log({ mail: 'poly@mail.com', isOnline: true, score: 500 })

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }
// console.log({ mango: 100, poly: 150, alfred: 80 });

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors)

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     // console.log(product.name)
//     // console.log(product.price)

//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//       return null
// }
  
//   // Change code above this line

// console.log(getProductPrice("Grip"));

// function getAllPropValues(propName) {
//   // Change code below this line
//     let value = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//     value.push(product[propName])
//     }
//   }
//   return value;
//   // Change code above this line
// }
// console.log(getAllPropValues("name"));

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let value = 0;

//   for (const product of products) {
//     if (product.name === productName) {
//       value = product. price * product.quantity;
//     }
//   }
//   return value;

//   // Change code above this line
// }
// console.log(calculateTotalPrice("Radar"))

// ===================Деструктуризація масивів==================
// const arr = [1, 2, 3];
// const [one, two, three] = arr;
// console.log(one);

// ===================Деструктуризація об'єктів==================
// const user = {
//   name: "Test",
//   age: 11,
//   skills: {
//     html: true,
//     css: true,
//     js: false
//   }
// }
// const name = 'value';
// const {age, name : userName} = user;
// console.log(age);
// console.log(name);
// console.log(userName);

// const user = {
//   name: "Test",
//   age: 11,
//   skills: {
//     html: true,
//     css: true,
//     js: false,
//     cars : {
//       audi: 'A6',
//       bmw: 'x5'
//     }
//   },
//   languages : [{html : true}, {css: false}]
// };
// const {name, 
//       skills : {
//         js,
//         html,
//         css : sass,
//         cars : {
//           audi
//         }
//       }
//     } = user;
//   // console.log (userJS, html);
//  console.log (sass);
// const {languages  : [html]} = user
// console.log (html);
// const {languages  : [Skillhtml, css]} = user
// const {html} = Skillhtml
// console.log(html);

// const user = [{
//   name : 'User1',
//   language : 'html',
//   cars: {
//     audi : 'A6',
//     bmw: 'X5'
//   }
// }, {
//   name : 'User2',
//   language : 'css',
//   cars: {
//     audi : 'A8',
//     bmw: 'X6'
//   }
// }, {
//   name : 'User3',
//   language : 'js',
//   cars: {
//     audi : 'A7'
//   }
// }]
// for (const {name, cars : {audi : car}} of user) {
//   console.log(name, car);
// }
//значення по дефолту
// for (const {name, cars : {audi, bmw = 'none'}} of user) {
//     console.log(name, bmw);
//   }

// function foo({name, cars : { bmw = 'none'} = {}}) {
//  console.log(name, bmw);
// }
// foo(
//   {
//     name : 'User1',
//     language : 'html',
//     cars: {
//         audi : 'A6',
//         bmw: 'X5'
//     }
//   }
// // )
// foo(
//   {
//     name : 'User1',
//     language : 'html',
//       }
// )

// ==============spread rest==========

// const arr1 = [12, 22, 3, 14, 45, 16, 57];
// // //spread
// // // const min = Math.min(...arr1)
// // // console.log(min);
// // const arr2 = [...arr1];
// // console.log(arr1 === arr2);
// ///////rest
// const [first, ...props] = arr1;
// console.log('props', props);
// console.log(first);
// for (let i = 0; i < props.length; i += 1) {
//   props[i] *= first
// }
// console.log(props);

// // тут оператор rest
// function foo(first, second, ...args) {
// console.log(args);
// }
// foo(1, 2, 3, 4, 5, 6)

// 1. Деструктуризація
// перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів

/**
 * Розраховує індекс маси тіла людини
 * @param {Object} obj 
 * @returns {Number} BMI
 */
// function calcBMI({weight, height}) {
//       const numericWeight = Number(weight.replace(',', '.'));
//       const numericHeight = Number(height.replace(',', '.'));
//       return Number((numericWeight / numericHeight ** 2).toFixed(1));
//   }
// //   Було
// //  console.log(calcBMI('88,3', '1.75'));
// // стало
// console.log(calcBMI({
//   weight : '88,3',
//   height : '1.75'
// }));

// 2. Деструктуризація
// перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів

/**
 * 
 * @param {Object} obj
 */
// function printContactsInfo({names, phones}) {
// t  const nameList = names.split(',');//зробили масив 
//   const phoneList = phones.split(',');
  
//   for (let i = 0; i < nameList.length, i < phoneList.length; i +=1) {
//       console.log(`${nameList[i]} - ${phoneList[i]}`)
//   }
  
//   }
//   printContactsInfo ({
//     names : 'Olga,Anna,Maria', 
//   phones : '097555,063333,073999'})
  
// 3. Глибока деструктуризація
// перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів

// function getBotReport({companyName, repairBots, defenceBots}) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }
// // Було
// console.log(getBotReport({
//   companyName : 'Cyberdyne Systems', 
//   repairBots : 150, 
//   defenceBots : 50}));

// 4. деструктуризація
// перепиши функцію так, щоб вона приймала один об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі буль-якої компанії
// function getStockReport({
//   companyName, 
//   stock : {
//     repairBots,
//     defenceBots
//    }
// }) {
//   let total = repairBots + defenceBots;
//   // for (const value of Object.values(stock)) {
//   //   total += value;
//   // }
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName : 'Cyberdyne Systems', 
//     stosk : {
//       repairBots : 150,
//       defenceBots : 50,
//     },
//   }),
// ); 

// function isIncluded(num, ...array) {
//   console.log(array.includes(num))
// }
// isIncluded(1, 2, 3, 4, 5, 6, 8, 5)

// function isIncluded(...array) {
//   const newArray = array.slice(1);
//   console.log(newArray)
//   console.log(newArray.includes(array[0]))
// }
// isIncluded(1, 2, 3, 4, 5, 6, 8, 5)

// function isIncluded(...array) {
//   console.log(array);
//   const num = array.pop();
//    console.log(array);
//   console.log(num);
//   console.log(array.includes(num));
// }

// isIncluded(1, 2, 3, 4, 5, 6, 8, 5)

// Задача
// const car1 = {
//   brand: 'BMW',
//   model: '700',
//   a: 'red',
//   maxSpeed: 240,
//   isNew: true,
//   dimensions: {
//     weight: 2000,
//     height: 150,
//     length: 4.2,
//   },
// };
// const car2 = {
//   brand: 'BMW',
//   model: '700',
//   a: 'red',
//   maxSpeed: 240,
//   isNew: true,
//   dimensions: {
     
//     height: 150,
//     length: 4.2,
//   },
// };
// не працює як треба
// function createMessage(car) {
//   const message = `
//   color: $(car.a)
//   Max speed: ${car.maxSpeed}
//   Is new: ${car.isNew}
//   Weight: ${car.weight}
//   `;
//   console.log(message);
// }

//працює
// function createMessage({
//   dimensions: {
//     weight = 'No Info',
//     height = 'No Info',
//     length = 'No Info',
//   },
//   a: color =  'No Info',
//   maxSpeed = 'No Info',
//   isNew = 'No Info',
// }) {
//   const message = `
//   color: ${color}
//   Max speed: ${maxSpeed}
//   Is new: ${isNew}
//   Weight: ${weight}
//   `;
//   console.log(message);
// }

    
// createMessage(car2)

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {
//   low : lowToday,
//   high : highToday,
//   icon : todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// },
//     tomorrow : {
//   low : lowTomorrow,
//    high : highTomorrow,
//    icon : tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",  
//     }
// } = forecast


// function findMatches(first, ...args) {
//   const matches = []; // Don't change this line

//   for (const item of first) {
//     if (args.includes(item)) {
//      matches.push(item)
//    }
//  }

//   return matches;
// }
//  console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     console.log(bookIndex);
// this.books.splice(bookIndex, 1, newName)
//       // Change code above this line
//     }
//   }

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
// return this.potions.push(potionName)


//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.addPotion("Invisibility"));

// function foo(...args) {
//   console.log(args);
// }
// foo (1, 2, 3, 4, 5)

// const user = {
//   email: "mango@gmail",
//   age: 20,
// }
// const { username = "User" } = user;
// console.log(username);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1];
// console.log(arr1 === arr2);

// const user = {
//   email: "mango@gmail",
//   age: 20,
// }
// const { username } = user;
// console.log(username);


// ==================Callback функції================
// const mathOperation = (num1, num2, callback1, callback2) => {
//   if (num1 > num2) {
//     const result = callback1(num1, num2);
//     return result;
//   } else if (num2 > num1) {
//     return callback2(num1, num2);
//   } else {
//     return 'Enter another numbers';
//   } 
// };

// const add = (num1, num2) => num1 + num2;
// const substrackt = (num1, num2) => num2 - num1;

// const multiply = (num1, num2) => num1 * num2;
// const divide = (num1, num2) => num2 / num1;

// console.log(mathOperation(10, 20, add, substrackt));
// console.log(mathOperation(100, 20, add, substrackt));
// console.log(mathOperation(200, 200, add, substrackt));
// console.log(mathOperation(10, 20, multiply, divide));
// console.log(mathOperation(100, 20, multiply, divide));
// важко сприймається:
// console.log(mathOperation(10, 20, (num1, num2) => num1 + num2, (num1, num2) => num2 - num1));

function makePizza() {
  return "Your pizza is being prepared, please wait.";
}
// Change code below this line

const result = makePizza();
const pointer = makePizza;
