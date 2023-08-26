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

