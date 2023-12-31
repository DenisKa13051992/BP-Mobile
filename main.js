/* eslint-disable array-callback-return */
import './i18n/i18n';
import i18next from 'i18next';

const headersContent = ['UnlimitedArtCreation', 'ExclusiveStyles', 'MagicAvatarsWith20%Off', 'YEARLYACCESS', 'WEEKLYACCESS'];
const commentsContent = ['Just$39.99peryear', 'perweek', 'perweek'];
const linksContent = ['TermsofUse', 'PrivacyPolicy', 'Restore'];
const buttonContinue = ['Continue'];
const bestOffer = ['BESTOFFER'];

checkUrl();
function checkUrl () {
  const path = window.location.pathname;
  path === '/ru' ? i18next.changeLanguage('ru') : path === '/spa' ? i18next.changeLanguage('spa') : i18next.changeLanguage('en');
}

createPushTitle();
pushHeaders(createTagElement(headersContent, 'h3'), 3);
pushComments(createTagElement(commentsContent, 'p'), 1);
pushLinks(createTagElement(linksContent, 'p'));
pushContinue(createTagElement(buttonContinue, 'button'));
pushBestOffer(createTagElement(bestOffer, 'p'));
if (window.location.pathname === '/ru') { changeToRussianLanguage(); }
choosingAdv();

function createPushTitle () {
  const getUnlimitedAccess = document.createElement('h1');
  getUnlimitedAccess.textContent = i18next.t('GetUnlimitedAccess');
  const advertisementTitle = document.getElementsByClassName('advertisement__title')[0];
  advertisementTitle.append(getUnlimitedAccess);
  getUnlimitedAccess.className = 'advertisement__title-content';
}

function createTagElement (arr, tag) {
  const ar = arr.map((a) => {
    const newTag = document.createElement(tag);
    newTag.textContent = i18next.t(a);
    return newTag;
  });
  return ar;
}

function pushHeaders (arr, num) {
  const headersContainer = document.getElementsByClassName('advertisement__cards-item');
  const titleContainer = document.getElementsByClassName('advertisement__left');
  arr.map((a, index) => {
    if (index < num) { a.className = 'advertisement__cards-title i18n'; headersContainer[index].prepend(a); } else { a.className = 'advertisement__left-title i18n'; titleContainer[index - num].prepend(a); }
  });
}

function pushComments (arr, num) {
  const perYearContainer = document.getElementsByClassName('advertisement__yearly-left advertisement__left');
  const perWeekContainer = document.getElementsByClassName('advertisement__right');
  arr.map((a, index) => {
    if (index < num) { a.className = 'advertisement__left-info i18n'; perYearContainer[index].append(a); } else { a.className = 'advertisement__right-info i18n'; perWeekContainer[index - num].append(a); }
  });
}

function pushLinks (arr) {
  const linksContainer = document.getElementsByClassName('footer__link');
  arr.map((a, index) => {
    a.className = 'footer__link-item i18n'; linksContainer[index].append(a);
  });
}

function pushContinue (arr) {
  const continueContainer = document.getElementsByClassName('advertisement__button');
  arr[0].className = 'advertisement__button-name i18n'; continueContainer[0].append(arr[0]);
}

function pushBestOffer (arr) {
  const bestOfferContainer = document.getElementsByClassName('advertisement__selectors-wrap');
  arr[0].className = 'advertisement__bestOffer i18n'; bestOfferContainer[0].prepend(arr[0]);
}

function changeToRussianLanguage () {
  const advSelector = document.getElementsByClassName('advertisement__selector');
  for (const i of [...advSelector]) { i.style.fontSize = '14px'; }
  document.getElementsByClassName('advertisement__title-content')[0].style.fontSize = '34px';
  document.getElementsByClassName('footer__wrapper')[0].style.fontSize = '10px';
}

function choosingAdv () {
  const bestOfferContainer = document.getElementsByClassName('advertisement__selectors-wrap')[0];
  const yearly = document.getElementsByClassName('advertisement__selector-yearly')[0];
  const weekly = document.getElementsByClassName('advertisement__selector-weekly')[0];
  const continueButton = document.getElementsByClassName('advertisement__button-name')[0];
  const choosingColor = 'gray';
  bestOfferContainer.onclick = (event) => {
    const target = event.target;
    if (target.closest('.advertisement__selector-yearly')) { yearly.style.borderColor = choosingColor; weekly.style.borderColor = 'white'; }
    if (target.closest('.advertisement__selector-weekly')) { weekly.style.borderColor = choosingColor; yearly.style.borderColor = 'white'; }
    if (target.closest('.advertisement__button')) {
      if (yearly.style.borderColor === choosingColor) { window.location = 'https://apple.com/'; continueButton.style.borderColor = choosingColor; } else if (weekly.style.borderColor === choosingColor) { window.location = 'https://google.com/'; continueButton.style.backgroundColor = choosingColor; }
    }
  };
}
