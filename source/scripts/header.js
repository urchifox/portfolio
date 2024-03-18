const element = document.querySelector('.header');
const height = element.clientHeight;
const button = element.querySelector('.header__menu-toggle');
const links = element.querySelectorAll('.header__menu-link');

const onLinkClick = () => {
  button.checked = false;
};

const onOverlayClick = (evt) => {
  if (evt.offsetY > element.offsetHeight) {
    button.checked = false;
  }
};

const init = () => {
  document.documentElement.style.setProperty('--header-height', `${height}px`);
  links.forEach((link) => link.addEventListener('click', onLinkClick));
  element.addEventListener('click', onOverlayClick);
};

export {init};
