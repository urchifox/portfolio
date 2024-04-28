export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstElementChild;
};

export const isInTheMiddle = (element) => {
  const elementRect = element.getBoundingClientRect();
  const viewportMidpoint = window.innerHeight / 2;

  return elementRect.top <= viewportMidpoint && elementRect.bottom >= viewportMidpoint;
};

export const isScrolledToTop = () => document.documentElement.scrollTop < 10;

export const isScrolledToBottom = () => {
  const scrollPosition = document.documentElement.scrollTop;
  const pageHeight = document.body.scrollHeight - window.innerHeight;

  return pageHeight - scrollPosition < 10;
};
