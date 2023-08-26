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

const checkSum = prompt("Please enter the check sum");
console.log(Number(checkSum));
console.log(typeof Number(checkSum));

const tipPercentage = prompt("Please enter the tip percentage");
console.log(Number(tipPercentage));
console.log(typeof Number(tipPercentage));

if (checkSum === null || checkSum === '') {
    console.log('Canceled.');
}
if (tipPercentage === null || tipPercentage === '') {
    console.log('Canceled.');
}

if (isNaN(checkSum) || (checkSum*(tipPercentage / 100)) < 0 || tipPercentage < 0 || tipPercentage > 100) {
    console.log('Invalid input data');
} 

if (isNaN(tipPercentage) || (checkSum*(tipPercentage / 100)) < 0 || tipPercentage < 0 || tipPercentage > 100) {
    console.log('Invalid input data');
}
const tipAmount = ((tipPercentage / 100) * checkSum).toFixed(2);
console.log(Number(tipAmount));
const totalSumToPay = (Number(tipAmount) + Number(checkSum)).toFixed(2);
alert(
    'Check sum: ' + checkSum + '\n' +
    'Tip: '+ tipPercentage + '%\n' +
    'Tip amount: ' + Number(tipAmount) + '\n' +
    'Total sum to pay: ' + totalSumToPay
    );


    // Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// If the word’s length is odd - return the middle character.If word’s length is even - return the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.
// Examples:
//  For user input “test” should return “es”
//  For user input “character” should return “a”
//  For user input “B” should return “B”
//  For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”