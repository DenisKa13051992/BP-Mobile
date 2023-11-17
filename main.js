import './i18n/i18n';
import i18next from 'i18next';

const headersContent = ['UnlimitedArtCreation', 'ExclusiveStyles', 'MagicAvatarsWith20%Off', 'EARLYACCESS', 'WEEKLYACCESS'];
const commentsContent = ['Just$39.99peryear', 'perweek'];
const linksContent = ['TermsofUse', 'PrivacyPolicy', 'Restore'];
const buttonContinue = ['Continue'];
const bestOffer = ['BESTOFFER'];
// const den = document.getElementsByTagName('::before');
// console.log(den)

createPushTitle();
pushHeaders(createTagElement(headersContent, 'h3'), 3);
pushComments(createTagElement(commentsContent, 'p'), 1);
pushLinks(createTagElement(linksContent, 'a'));
pushContinue(createTagElement(buttonContinue, 'button'))


function createPushTitle(){
  const getUnlimitedAccess = document.createElement('h1');
  getUnlimitedAccess.textContent = i18next.t('GetUnlimitedAccess');
  const advertisementTitle = document.getElementsByClassName('advertisement__title')[0];
  advertisementTitle.append(getUnlimitedAccess);
  getUnlimitedAccess.className = 'advertisement__title-content';
}

function createTagElement(arr, tag) {
  const ar = arr.map((a) => {const newTag = document.createElement(tag);
    newTag.textContent = i18next.t(a);
    return newTag});
  return ar
}

function pushHeaders(arr, num) {
  const headersContainer = document.getElementsByClassName('advertisement__cards-item');
  const titleContainer = document.getElementsByClassName('advertisement__left');  
  arr.map((a, index) => { 
    if(index < num) {a.className = "advertisement__cards-title i18n"; headersContainer[index].prepend(a)} else {a.className = "advertisement__left-title i18n"; titleContainer[index - num].prepend(a)};
})
}

function pushComments(arr, num) {
  const perYearContainer = document.getElementsByClassName('advertisement__yearly-left advertisement__left');
  const perWeekContainer = document.getElementsByClassName('advertisement__right'); 
  arr.map((a, index) => { 
    if(index < num) {a.className = "advertisement__left-info i18n"; perYearContainer[index].append(a)} else {a.className = "advertisement__right-info i18n"; perWeekContainer[index - num].append(a)};
})
}

function pushLinks(arr) {
  const linksContainer = document.getElementsByClassName('footer__link');
  arr.map((a, index) => { 
    a.href = '#'; a.className = "footer__link-item i18n"; linksContainer[index].append(a);
})
}

function pushContinue(arr) {
  const continueContainer = document.getElementsByClassName('advertisement__button');
  arr[0].className = "advertisement__button-name i18n"; continueContainer[0].append(arr[0]);
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