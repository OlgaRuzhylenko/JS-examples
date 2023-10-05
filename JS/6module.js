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

//submit
const formEl = document.querySelector('.js-form');
formEl.addEventListener('submit', onSubmit);

function onSubmit() {
    
}