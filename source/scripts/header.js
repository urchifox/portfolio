const element = document.querySelector('.header');
const height = element.clientHeight;

const init = () => {
  document.documentElement.style.setProperty('--header-height', `${height * 1.33}px`);
};

export {init};
