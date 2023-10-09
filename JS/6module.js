// //1) ... замість частини  тексту, Згортає і розгортає

// const title = document.querySelector('.js-title');
// const maxLength = 13;
// const totalLength = maxLength + 3;
// title.addEventListener('click', onClick)

// function onClick(evt) {
//     const title = evt.currentTarget;
//       const str = title.textContent.slice(0, maxLength);
//     if (title.textContent.length > totalLength) {
    
//         const remainder = title.textContent.slice(maxLength);

//         title.setAttribute('data-title', remainder)
//         title.textContent = str + '...'
//     } else {
//         const remainder = title.dataset.title;
//         if (remainder) {
//             title.textContent = str + remainder;
//             console.log(remainder);
//         }
//     }
// }

//2) працюємо з input
// const userName = document.querySelector('.js-input');

// userName.addEventListener('input', onInput);

// function onInput(evt) {
//  console.dir(evt.currentTarget.value);
// }

// //submit
// const formEl = document.querySelector('.js-form');
// formEl.addEventListener('submit', onSubmit);

// function onSubmit(evt) {
//     evt.preventDefault()

//     const {userAge, userName, userEmail} = evt.currentTarget.elements
//     console.dir(userAge.value);
//     console.dir(userName.value);
//     console.dir(userEmail.value);

//     const data = {
//         name: userName.value,
//         email: userEmail.value,
//         age: userAge.value
//     };
//     console.log(data);
// }

//події клавіатури

// const container = document.querySelector('.js-container');
// // console.dir(container);

// document.addEventListener('keydown', onKey);

// function onKey(evt) {
//     console.log(evt.code);
//     if (evt.code === 'Escape') {
//         container.classList.toggle('tog');
//    }
// }

//заборона копіювання:
// function onKey(evt) {
//     console.log(evt);
//     if (evt.ctrlKey && (evt.code === 'KeyC')) {
//         evt.preventDefault()
//         return;
//     }
// }

//================хрестики-нулики==============
const container = document.querySelector('.js-content')
console.log(container);
let player = 'X';
let marcup = '';
for (let i = 1; i < 10; i +=1) {
  marcup += `<div class="item js-item" data-id="${i}"></div>`
};
console.log(marcup);
container.innerHTML = marcup;

container.addEventListener('click', onClick);

function onClick(event) {
  const {target} = event;
  if (!target.classList.contains('js-item') || target.textContent) {
    return;
  }

  target.textContent = player;
  player = player === 'X' ? '0' : 'X'
}