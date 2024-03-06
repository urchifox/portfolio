const textClosed = 'Раскрыть все';
const textOpened = 'Свернуть все';

const buttons = document.querySelectorAll('.additions-card__button');
const map = new Map();

const onButtonClick = (evt) => {
  const text = evt.target.textContent;
  const isClosed = text === textClosed;
  const details = map.get(evt.target);

  details.forEach((detail) => {
    detail.open = isClosed;
  });

  evt.target.textContent = isClosed ? textOpened : textClosed;
};

const init = () => {
  for (const button of buttons) {
    const details = button.parentNode.querySelectorAll('.additions-card__dropdown');
    map.set(button, details);
  }

  buttons.forEach((button) => button.addEventListener('click', onButtonClick));
};

export {init};
