// const NOTIFICATION_DELAY = 3000;
// let timeoutId = null;

// const refs = {
//     notification: document.querySelector('.js-alert')
// };

// refs.notification.addEventListener('click', () => {
//     clearTimeout(timeoutId);
//     hideNotification();
// })

// setTimeout(() => {
//     showNotification();
//     timeoutId = setTimeout(hideNotification, 5000);
// }, NOTIFICATION_DELAY);

// function showNotification() {
//     console.log('Show');
//     refs.notification.classList.add('is-visible')
// }
// function hideNotification() {
//     console.log('Hide');
//     refs.notification.classList.remove('is-visible')
// }

const date1 = new Date('2023-01-01 01:00:00');
console.log(date1);

date1.setDate(-500000000)
console.log(date1);

