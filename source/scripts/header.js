import {isInTheMiddle, isScrolledToTop, isScrolledToBottom} from './utils.js';

const root = document.querySelector('.header');
const button = root.querySelector('.header__menu-toggle');
const progressBar = root.querySelector('.header__scroll-indicator');
const links = root.querySelectorAll('.header__menu-link');
const linksMap = new Map();

links.forEach((link) => {
  const id = link.href.substring(link.href.indexOf('#'));
  const target = document.querySelector(id);
  linksMap.set(target, link);
});

let currentTarget = linksMap.keys().next().value;

const setHeaderHeight = () => {
  const height = root.clientHeight;
  document.documentElement.style.setProperty('--header-height', `${height}px`);
};

const onLinkClick = () => {
  if (window.innerWidth < 760) {
    button.checked = false;
  }
};

const onOverlayClick = (evt) => {
  if (evt.offsetY > root.offsetHeight) {
    button.checked = false;
  }
};

const changeCurrentTarget = (newTarget) => {
  linksMap.get(currentTarget).classList.remove('header__menu-link--current');
  currentTarget = newTarget;
  const currentLink = linksMap.get(currentTarget);
  currentLink.classList.add('header__menu-link--current');

  if (window.innerWidth >= 760) {
    const currentLinkRect = currentLink.getBoundingClientRect();
    progressBar.style.left = `${currentLinkRect.x}px`;
    progressBar.style.width = `${currentLinkRect.width}px`;
  }
};

const setProgressBar = () => {
  const scrollPosition = document.documentElement.scrollTop;
  const pageHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollPosition / pageHeight) * 100;
  progressBar.style.setProperty('--scroll-percent', `${progress}%`);
};

const onPageScroll = () => {
  if (window.innerWidth < 760) {
    setProgressBar();
  }

  if (isScrolledToTop()) {
    changeCurrentTarget(linksMap.keys().next().value);

    return;
  }

  if (isScrolledToBottom()) {
    changeCurrentTarget([...linksMap.keys()].at(-1));

    return;
  }

  if (isInTheMiddle(currentTarget)) {
    return;
  }

  for (const [target] of linksMap) {
    if (isInTheMiddle(target)) {
      changeCurrentTarget(target);

      return;
    }
  }
};

const onPageResize = () => {
  setHeaderHeight();

  if (window.innerWidth < 760) {
    progressBar.style = '';
    setProgressBar();

    return;
  }

  changeCurrentTarget(currentTarget);
};

const init = () => {
  setHeaderHeight();
  changeCurrentTarget(currentTarget);

  links.forEach((link) => link.addEventListener('click', onLinkClick));
  root.addEventListener('click', onOverlayClick);
  window.addEventListener('scroll', onPageScroll);
  window.addEventListener('resize', onPageResize);
};

export {init};
