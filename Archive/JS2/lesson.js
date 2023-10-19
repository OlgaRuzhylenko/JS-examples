//=========================================6-7 модуль=============================
// import throttle from 'lodash.throttle';
// <!-- Перше завдання
// При кліку на кнопку змінити value в input -->
//   <input type="text" id="input"  value="Hello" />
//   <button>Click me</button>


// const inputEl = document.querySelector('#input');
// const btnEl = document.querySelector('button');

// btnEl.addEventListener('click', onClockBtn)

// function onClockBtn (evt) {
// inputEl.value = 'Bye'
// }

// <!-- Друге завдання 
// При кліку на кнопку показати alert із значенням, яке введено в input -->
    
// <button>Click me</button>
// <input type="text" id="input" />

// const input = document.querySelector('input')
// const btn = document.querySelector('button')

// btn.addEventListener('click', onClick);

// function onClick () {
//     alert(input.value);
// }

// <!-- Третє завдання 
//     При кліку на кнопку інпути обмінюються значеннями  -->

//     <button>Click me</button>
//     <input type="text" id="first-input" value="Hello" />
//     <input type="text" id="second-input" value="Bye" />


// const firstInput = document.querySelector('#first-input');
// const secondtInput = document.querySelector('#second-input');
// const btn = document.querySelector('button');

// btn.addEventListener('click', onClick);
// function onClick () {
//  const tempValue = firstInput.value
//   firstInput.value = secondtInput.value;
//   secondtInput.value = tempValue;
// }
// <!-- Четверте завдання 
// При кліку на кнопку текст параграфів змінюється на їх порядковий номер -->

// <h2>Заголовок</h2>
// <p>Наш перший абзац</p>
// <p>Наш другий абзац</p>
// <p>Наше третій абзац</p>
// <button>Click me</button>

// const btnRef = document.querySelector('button');
// const paragrapthFef = document.querySelectorAll('p')

// btnRef.addEventListener('click', () => {
//     paragrapthFef.forEach((element, idx) => {
//         element.textContent = idx + 1;
//     });
// });

// <!-- П'яте завдання 
// Вводимо число у input із id="test" число. 
// При кліку на кнопку у input із id = "result" повинен виводити квадрта цього числа
// Якщо ввели не число, показувати alert із текстом "Ввели не число" -->

//  <input type="text" value="" placeholder="Введіть число" id="test">
//  <input id = "result" value = "Результат" disabled>
//  <button >Click me</button>

// const textInput = document.querySelector('#test');
// const resultInput = document.querySelector('#result');
// const btn = document.querySelector('button');

// btn.addEventListener('click', onBtnClick);

// function onBtnClick () {
//     if (isNan(textInput.value)) {
//         alert('Ввели не число');
//         return;
//     } else {
//     resultInput.value = textInput.value * textInput.value;
//     }
// };

// <!-- Шосте завдання 
//     Напишіть інтерфейс, щоб створити список.
//     Для кожного пункту:
//     Запитуйте вміст у користувача за допомогою prompt. Створюйте пункт і додайте його до UL.
//     Процес припиняється, коли користувач натискає ESC.
//     Усі елементи мають створюватися динамічно. -->

//     <h1>Створення списку</h1>

// const titleEl = document.querySelector("h1");
// const list = document.createElement('ul');

// titleEl.after(list)

// let message = prompt('Введіть інформацію');
// while (message) {
//     const item = document.createElement('li');
//     item.textContent = message;
//     list.appendChild(item);
//     prompt('Введіть інформацію')
// }
// titleEl.after(list);


// <!-- Сьоме завдання 
// Додайте усім посиланням подію - за наведенням на посилання в атрибут title запишеться її текст -->

// <a href="#" title="">Перше посилання</a>
// <a href="#" title="">Друге посилання</a>
// <a href="#" title="">Третє посилання</a>

// const links = document.querySelectorAll('a');
// console.log(links);

// links.forEach(link => link.addEventListener('mouseover', onMouseOver));

// function onMouseOver (event) {
// console.log(event.target);
// event.target.title = event.target.textContent
// }


// <!-- 
// Восьме завдання 
// Дані span. По першому натисканні на кожен span він фарбується червоним фоном, 
// по другому фарбується назад і так далі кожен клік відбувається чергування фону. 
// Зробіть так, щоб було дві функції: одна фарбує в червоний колір, 
// інша в зелений і вони змінювали одна одну через removeEventListener.  -->

// <span>1</span>
//   <span>2</span>
//   <span>3</span>

// const container = document.querySelector('div');

// container.addEventListener('click', onClick);

// function onClick (evt) {
//     if (evt.target.nodeName !== 'SPAN') {
//         return
//     }
//     if ( evt.target.style.backgroundColor === "red") {
//         evt.target.style.backgroundColor = "green";
//     } else {
//   evt.target.style.backgroundColor = "red";}
// }




