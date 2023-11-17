import './i18n/i18n';
import i18next from 'i18next';

const getUnlimitedAccess = document.createElement('h1');
getUnlimitedAccess.textContent = i18next.t('GetUnlimitedAccess');
const advertisementTitle = document.getElementsByClassName('advertisement__title')[0];
advertisementTitle.append(getUnlimitedAccess);
getUnlimitedAccess.className = 'advertisement__title-content';

const headersContent = ['Unlimited Art Creation', 'Exclusive Styles', 'Magic Avatars With 20% Off', 'EARLY ACCESS', 'WEEKLY ACCESS'];
const commentsContent = ['Just $39.99 per year', 'per week'];
const linksContent = ['Terms of Use', 'Privacy Policy', 'Restore'];
const buttonContinue = ['Continue'];

createTagElement(headersContent, 'h3');

function createTagElement(arr, tag) {
  const ar = arr.map(a => a = document.createElement('h3'));
  console.log(tag);
  console.log(ar)
}

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
// (".i18n").i18n();
// setupCounter(document.querySelector('#counter'))
// console.log(i18next.t('GetUnlimitedAccess'))