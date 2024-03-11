const element = document.querySelector('.header');
const height = element.clientHeight;

const init = () => {
  document.documentElement.style.setProperty('--header-height', `${height}px`);
};

export {init};
