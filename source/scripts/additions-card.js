const ButtonText = {
  CLOSED: 'Раскрыть все',
  OPENED: 'Свернуть все',
};

const ContentClass = {
  ANIMATING: 'additions-card__content--animating',
  COLLAPSING: 'additions-card__content--collapsing'
};

const buttons = document.querySelectorAll('.additions-card__button');
const summariesMap = new Map();

for (const button of buttons) {
  const connectedSummaries = button.parentNode.querySelectorAll('.additions-card__summary');
  summariesMap.set(button, [...connectedSummaries]);
}

const summaries = [...summariesMap.values()].flat();

const onButtonClick = (evt) => {
  const text = evt.target.textContent;
  const isClosed = text === ButtonText.CLOSED;

  evt.target.textContent = isClosed ? ButtonText.OPENED : ButtonText.CLOSED;

  summariesMap.get(evt.target).forEach((summary) => {
    if (summary.parentElement.open !== isClosed) {
      summary.click();
    }
  });
};

const onSummaryClick = (evt) => {
  const detailsElement = evt.target.parentElement;
  const contentElement = evt.target.nextElementSibling;

  // Chrome sometimes has a hiccup and gets stuck.
  // So we make sure to remove those classes manually,
  if (contentElement.classList.contains(ContentClass.ANIMATING)) {
    contentElement.classList.remove(ContentClass.ANIMATING, ContentClass.COLLAPSING);
    // ... enforce a reflow so that collapsing may be animated again,
    void evt.target.offsetWidth;
    // ... and fallback to the default behaviour this time.
    return;
  }

  const addAnimationEndListener = (cb) => contentElement.addEventListener(
    'animationend', cb, {once: true}
  );

  // request an animation frame to force Safari 16 to actually perform the animation
  requestAnimationFrame(() => contentElement.classList.add(ContentClass.ANIMATING));
  addAnimationEndListener(() => contentElement.classList.remove(ContentClass.ANIMATING));

  if (detailsElement.open) {
    evt.preventDefault();
    contentElement.classList.add('additions-card__content--collapsing');
    addAnimationEndListener(() => {
      detailsElement.removeAttribute('open');
      contentElement.classList.remove('additions-card__content--collapsing');
    });
  }
};

const init = () => {
  buttons.forEach((button) => button.addEventListener('click', onButtonClick));
  summaries.forEach((summary) => summary.addEventListener('click', onSummaryClick));
};

export {init};
