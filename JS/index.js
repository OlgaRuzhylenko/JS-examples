// Задача №1

// You need to calculate amount of tip to give in a restaurant/cafe.
//  Workflow:
// 1. User inputs check sum. (Use “prompt” function).
// 2. User inputs tip percentage. (Use “prompt” function)
// 3. For an empty string or cancelled input, show “Canceled.”
// 4. You need to validate the input data: both values should be numbers, check sum can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// 5. If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// 6. You need to calculate tip amount and total sum to pay.
// 7. Show message: (example). Use ”alert” function
// Check sum: 200
// Tip: 15%
// Tip amount: 30
// Total sum to pay:  230
// You should show only 2 numbers after comma (if needed).

// Рішення:

// const checkSum = prompt("Please enter the check sum");
// console.log(Number(checkSum));
// console.log(typeof Number(checkSum));

// const tipPercentage = prompt("Please enter the tip percentage");
// console.log(Number(tipPercentage));
// console.log(typeof Number(tipPercentage));

// if (checkSum === null || checkSum === '') {
//     console.log('Canceled.');
// }
// if (tipPercentage === null || tipPercentage === '') {
//     console.log('Canceled.');
// }

// if (isNaN(checkSum) || (checkSum*(tipPercentage / 100)) < 0 || tipPercentage < 0 || tipPercentage > 100) {
//     console.log('Invalid input data');
// } 

// if (isNaN(tipPercentage) || (checkSum*(tipPercentage / 100)) < 0 || tipPercentage < 0 || tipPercentage > 100) {
//     console.log('Invalid input data');
// }
// const tipAmount = ((tipPercentage / 100) * checkSum).toFixed(2);
// console.log(Number(tipAmount));
// const totalSumToPay = (Number(tipAmount) + Number(checkSum)).toFixed(2);
// alert(
//     'Check sum: ' + checkSum + '\n' +
//     'Tip: '+ tipPercentage + '%\n' +
//     'Tip amount: ' + Number(tipAmount) + '\n' +
//     'Total sum to pay: ' + totalSumToPay
//     );

// Задача №2
    // Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// знайти середній символ у слові
// If the word’s length is odd - return the middle character.
// якщо непарна - повернути середній
// If word’s length is even - return the middle 2 characters.
// Якщо довжина слова парна - поверніть 2 середніх символи.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// Ви повинні перевірити поро(жнє значення та лише значення з пробілами “Inv)alid value”.

// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
//  For user input “test” should return “es”
//  For user input “character” should return “a”
//  For user input “B” should return “B”
//  For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”

// Вирішення:

// const wordInput = prompt("Please enter a word");

// if (wordInput === null || wordInput === '' || (wordInput.includes(" "))) {
//     console.log('Invalid value');
//  } else {

//         function isEvenLength(wordInput) {
//             return wordInput.length % 2 === 0;
//         }
//             if (isEvenLength(wordInput)) {
//                 alert(wordInput.slice(wordInput.length/2-1, wordInput.length/2 + 1));
//         }       else {
//             alert(wordInput.slice(wordInput.length/2, wordInput.length/2 + 1));
//         }
//     }

// Завдання №3
// Write the code which verify user rights.
// Step 1. Check login
//  Ask user for a login // use prompt()

//  If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()

//  If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”.

//  If it’s another string – then show “I don’t know you”.

//  If the visitor enters "User" or "Admin", then prompt for a password.

// Step 2. Check password:
//  For an empty string or cancelled input, show “Canceled.”

//  For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”.
// In other case, show “Wrong password”.
// Step 3. Greets the user appropriately:
//  If the current time in hours is more then 5.00 and less then 20:
//  For “User” show “Good day, dear User!”
//  For “Admin” show “Good day, dear Admin!”
//  In other way:
//  For “User” show “Good evening, dear User!”
//  For “Admin” show “Good evening, dear Admin!”
// P.S.: щоб отримати інформацію про поточний час для реалізації п. 3 завдання, створіть змінну: const hours = new Date().getHours()


// const userLogin = prompt('Please enter your login');
// console.log(userLogin);

// if (userLogin === '' || userLogin === null) {
//     alert('Canceled');
// } else if (userLogin.length < 4) {
//     alert("I don't know any users having name length less than 4 symbols");
    
// } else {
//     let userPassword;
//     if (userLogin === "User" || (userLogin === "Admin")) {
//     const userPassword = prompt("Please enter a password");
//     console.log(userPassword);

//         if (userPassword === '' || userPassword === null) {
//         alert('Canceled');
//         }
//     } 
//     else {
//         alert("I don’t know you");
//     }
//         }

// if (userLogin === "User" &&  userPassword === 'UserPass') {
//     alert('Hello, User');
// } else if (userLogin === "Admin" &&  userPassword === 'RootPass') {
//     alert('Hey, Admin');
// } else (
//     alert('Wrong password');
// )
// function makeArray(firstArray, secondArray, maxLength) {
// //   console.log(firstArray.concat(secondArray));
// //   console.log((firstArray.concat(secondArray)).length);
// if ((firstArray.concat(secondArray)).length <= maxLength) {
//     console.log(firstArray.concat(secondArray));
// }
// else {
//     console.log((firstArray.concat(secondArray)).slice(0, maxLength));
// }
    
//   }

// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));

// сумує всі числа від 0 до umber
// function calculateTotal(number) {

//      let sum = 0;
   
//      for(let i = 0; i <= number; i+=1){
//        sum += i;
//      }
   
//      return sum;
   
//    }
//    console.log(calculateTotal(3));


//=================================================================================
// const a = [1, 2, 3, 4, 5]
// for(let i = 0; i < a.length; i+=1) {
//     // console.log(a[i])
//     console.log(a[i] + 10)
// }

// const numbers = [1, 2, 3, 4, 5]

// for(const number of numbers) {
//     // console.log(numbers.indexOf(number))
//     console.log(number + 10)
// }

// ❗️❗️❗️ Присвоєння за посиланням

// const a = 2;
// const b = a;
// console.log(a === b)
// console.log(2 === 2)

// const array1 = [1, 2, 3];

// const array2 = array1;

// console.log(array1)
// console.log(array2)
// console.log(array1 === array2)
// console.log([5, 6, 7] === [5, 6, 7]) //false

// array1[0] = 10;

// console.log(array1)
// console.log(array2);

// array2[2] = 5;

// console.log(array1)

// const array3 = array2

// console.log(array3)

// array3[1] = 100;

// console.log(array1)

// array2.length = 0;

// console.log(array3)

// array1[2] = 1000;
// console.log(array3)
// console.log(array1[0])

// for (const elem of array3) {
//     console.log(elem)
// }

// console.log(array3.length)

// let array1 = [1, 3, 5]
// let array2 = array1;

// array1[0] = 50;
// console.log(array1)
// console.log(array2)

// array1 = [9, 90, 900]

// console.log(array1)
// console.log(array2)

// array2 = array1;

// console.log(array1)
// console.log(array2)

// const a = [1, 2, 3]
// const b = a
// console.log(a === b) // true

// const c = [1, 2, 3]
// const d = [1, 2, 3]
// console.log(c === d) // false
// console.log(c[0] === d[0]) // true

// const e = [1, 2, [3, 4]]
// const f = [1, 2, [3, 4]]
// // console.log(e[2] === f[2]) // false
// // console.log(e[0] === f[0]) // true
// console.log(e[2][0]) // 3

// ❗️❗️❗️ Методи масивів

// const string = '1-!2-!3-!4-!5-!6-!7-!8-!9'
// console.log(string.split('!'))

// const string1 = 'vehq jrf vbh jre bv h'
// console.log(string1.split(' '))

// const string2 = "123456789";
// const array = string2.split("");
// console.log(array);

// for (const element of array) {
//     const number = Number(element)
//     console.log(number)
// }

// for (let i = 0; i < array.length; i += 1) {
//   array[i] = Number(array[i]);
// }

// console.log(array);

// const array3 = [1, 2, 3, 4, 5, 6, 7];
// const string3 = array3.join('')
// console.log(string3)

// const array5 = [1,4,6,7,4,7,89]
// // const res1 = array5.includes(100 && 4)
// // console.log(res1) // true
// const res2 = array5.includes(100) && array5.includes(4)
// // // console.log(res2) // false

// const emptyArray = [0, 90]
// // emptyArray.push(1)
// // console.log(emptyArray)
// // const length1 = emptyArray.push(1)
// // console.log(length1) // 3
// const length2 = emptyArray.push(2, 3, 100, 200, 1000, 100000)
// // console.log(emptyArray)
// console.log(length2)

// const notEmptyArray = [1, 2, 3, 4, 5]
// // notEmptyArray.pop()
// // console.log(notEmptyArray)
// const deletedEl = notEmptyArray.pop()
// console.log(notEmptyArray)
// console.log(deletedEl)

// const superArray = [1, 2, 3, 4, 5]
// const length2 = superArray.unshift(5, 10)
// console.log(superArray)
// console.log(length2)

// const superArray1 = [1, 2, 3, 4, 5]
// const deletedEl1 = superArray1.shift()
// console.log(superArray1)
// console.log(deletedEl1)

// const array6 = [1, 2, 3, 4, 5, 6, 7]
// const array7 = array6.slice(0, 5)
// // console.log(array7)
// const array8 = array6.slice(-2)
// // console.log(array8)
// console.log(array6)



// const numbers2 = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9]
// const numbers3  = numbers2.splice(5, 2)
// console.log(numbers2)
// console.log(numbers3)


// const numbers2 = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9]
// const copy = numbers2.slice()
// const deleted = copy.splice(5, 2)
// console.log(copy)
// console.log(deleted)
// console.log(numbers2)


// const numbers3 = [1, 2, 3, 6, 7, 8, 9]
// const copy1 = numbers3.slice()
// const deleted1 = copy1.splice(3, 0, 4, 5)
// console.log(copy1)
// console.log(deleted1)

// const numbers4 = [1, 2, 3, 4, 4, 4, 7]
// const copy2 = numbers4.slice()
// const deleted2 = copy2.splice(4, 2, 5, 6)
// console.log(copy2)
// console.log(deleted2)

// const a = [1, 2, 3];
// const b = [5, [6, 7]]
// const c = 4

// const arr = a.concat(c, b[0], b[1])
// console.log(arr)
// console.log(a)