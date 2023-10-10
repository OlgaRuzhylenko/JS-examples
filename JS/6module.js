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
// ==================7 Поширення подій====================
// const container = document.querySelector('.js-container');
 
// container.addEventListener('click', onClick)
// function onClick (event) {

// if (!event.target.classList.contains('js-box')) {
//  return;
// }
// // console.log(event.currentTarget);
// console.log(event.target.dataset.color);
//
// //================хрестики-нулики==============
// const container = document.querySelector('.js-content')
// // console.log(container);

// const wins = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 1],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];
// let player = 'X';

// let historyX = [];
// let history0 = [];

// function createMarcup(){
//   let marcup = '';
//   for (let i = 1; i < 10; i +=1) {
//     marcup += `<div class="item js-item" data-id="${i}"></div>`
//   };
  
//   console.log(marcup);
//   container.innerHTML = marcup;
// }
// createMarcup()

// container.addEventListener('click', onClick);

// function onClick(event) {
//   const {target} = event;
//   if (!target.classList.contains('js-item') || target.textContent) {
//     return;
//   }

//   let result = false;
//   const id = Number(target.dataset.id)
// if(player === 'X') {
//   historyX.push(id);
//   result =  isWinner(historyX)
// }  else {
// history0.push(id);
// result =  isWinner(history0)
//   }

//   target.textContent = player;

// if (result) {
//   console.log(`Winner ${player}`);
//   resetGame();
//   return;
// }
// // console.log(isWinner(historyX));

//   player = player === 'X' ? '0' : 'X'
// }

// function isWinner(arr) {
// return wins.some(item => item.every((id) => arr.includes(id)))
// }

// function resetGame() {
//   createMarcup();
//   historyX = [];
//   history0 = [];
//   player = 'X'
// }

//==============================================

// const container = document.querySelector('.js-container');
// container.addEventListener('click', onClick)

// function onClick(evt) {
// if (evt.target.nodeName !== "BUTTON") {
//   return;
// };
// console.log(evt.target);
// }
//=================================================
// 1 варіант
// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// console.log(tagsContainer);
// tagsContainer.addEventListener('click', onTagsContainerClick)

// function onTagsContainerClick (event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }

// const currentActiveBtn = document.querySelector('.tags__btn--active');

// // console.log(currentActiveBtn);

// if(currentActiveBtn) {
//   currentActiveBtn.classList.remove('tags__btn--active')
// }

// const nextActiveBtn = event.target;

//   // console.log(event.target);
//   nextActiveBtn.classList.add('tags__btn--active');
//   selectedTag = nextActiveBtn.dataset.value;

//   console.log(selectedTag);
// }
// const tagsContainer = document.querySelector('.js-tags');
// const selectedTags = new Set();
// tagsContainer.addEventListener('click', onTagsContainerClick)

// function onTagsContainerClick(evt) {
// if (evt.target.nodeName !== "BUTTON") {
//   return;
// }
// const btn = evt.target;
// const tag = btn.dataset.value;
// const isActiveBtn = btn.classList.contains('tags__btn--active')
// // console.log(isActiveBtn);
// if (isActiveBtn) {
//   selectedTags.delete(tag)
// } else {
//   selectedTags.add(tag);
// }

// btn.classList.toggle('tags__btn--active');

// console.log(selectedTags);
// }
//=====================палітра===============================
// const colors = [
//   { hex: '#f44336', rgb: "244, 67, 54" },
//   { hex: '#e91e63', rgb: "233, 30, 99" },
//   { hex: '#9c27b0', rgb: "156, 39, 176" },
//   { hex: '#673ab7', rgb: "103, 58, 183" },
//   { hex: '#3f51b5', rgb: "63, 81, 181" },
//   { hex: '#2196f3', rgb: "33, 150, 243" },
//   { hex: '#00bcd4', rgb: "0, 188, 212" },
//   { hex: '#009688', rgb: "0, 150, 136" },
//   { hex: '#4caf50', rgb: "76, 175, 80" },
//   { hex: '#ffeb3b', rgb: "255, 235, 59" },
//   { hex: '#ff9800', rgb: "255, 152, 0" },
//   { hex: '#795548', rgb: "121, 85, 72" },
//   { hex: '#607d8b', rgb: "96, 125, 139" },
// ];

// const paletteContainer = document.querySelector('.js-palette');
// const cardsMarkup = createColorCardsMarcup(colors); 

// paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup)

// paletteContainer.addEventListener('click', onPaletteContainerClick)

// function createColorCardsMarcup(colors) {
//   return colors.map(({hex, rgb}) => {
//     return    `    
//      <div class="color-card">
//         <div
//           class="color-swatch"
//           data-hex="${hex}"
//           data-rgb="${rgb}"
//           style="background-color: ${hex}"
//         ></div>
//         <div class="color-meta">
//           <p>HEX: ${hex}</p>
//           <p>FGB: ${rgb}</p>
//         </div>
//       </div> `;
//   }).join('');
// } 

// function onPaletteContainerClick(evt) {
//   if (!evt.target.classList.contains('color-swatch')) {
//     return
//   }
//   console.log(evt.target.dataset.hex);
// }
//===============================================================================
const instance = basicLightbox.create(`
    <h1>Dynamic Content</h1>
    <p>You can set the content of the lightbox with JS.</p>
`)
console.log(instance);
instance.show();

const cars = [
  {
    id: 1,
    car: "Honda",
    type: "Civic",
    price: 12000,
img: 'https://wallpaper.mob.org.ua/pc/image/vehicles-honda_civic_type_r-car-honda-white_car-420818.html'
  },
  {
    id: 2,
    car: "Audi",
    type: "Q7",
    price: 40000,
img: 'https://wallpaper.mob.org.ua/pc/image/vehicles-audi_q7-311915.html'
  },
  {
    id: 3,
    car: "BMW",
    type: "5 series",
    price: 9000,
img: 'https://wallpaper.mob.org.ua/pc/image/cars-bmw_5_series-bmw_5-bmw-belii-vid_sboku-oblaka-115889.html'
  },
  {
    id: 4,
    car: "Honda",
    type: "Accord",
    price: 20000,
img: 'https://wallpaper.mob.org.ua/pc/image/vehicles-honda_accord-car-compact_car-honda-white_car-425341.html'
  },
  {
    id: 5,
    car: "Volvo",
    type: "XC60",
    price: 7000,
img: 'https://wallpaper.mob.org.ua/pc/image/vehicles-volvo_xc60-car-suv-volvo-white_car-425193.html'
  },
  ]



const container = document.querySelector('.js-container')

const marcup = cars.map(({img, car, id}) => `<li data-car-id=${id} class="js-target"><img class="js-target" src="${img}" alt="${car}" width="200"><h2 class="js-target">${car}</h2></li>`)

container.insertAdjacentHTML("beforeend", marcup.join(''))
container.addEventListener('click', onClick)

function onClick(evt) {
const {target} = evt;
   if(!target.classList.contains("js-target")) {
    return;
   }

const carId = target.dataset.carId ?? target.closest("li").dataset.carId;
   console.log(carId);
}