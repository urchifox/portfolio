import { isHtmlButtonElement, isHtmlDetailsElement, isHtmlElement, queryElements } from "./utils";

const ButtonText = {
  CLOSED: 'Раскрыть все',
  OPENED: 'Свернуть все',
} as const;

const ContentClass = {
  ANIMATING: 'additions-card__content--animating',
  COLLAPSING: 'additions-card__content--collapsing'
} as const;

const buttons = queryElements<HTMLButtonElement>('.additions-card__button');
const summariesMap = new Map<HTMLButtonElement, Array<HTMLElement>>();

for (const button of buttons) {
  const buttonParent = button.parentNode
  if (!isHtmlElement(buttonParent)) continue;
  const connectedSummaries = queryElements('.additions-card__summary', buttonParent);
  summariesMap.set(button, [...connectedSummaries]);
}

const summaries = [...summariesMap.values()].flat();

const onButtonClick = (evt: MouseEvent) => {
  if (!isHtmlButtonElement(evt.target)) return
  const text = evt.target.textContent;
  const isClosed = text === ButtonText.CLOSED;

  evt.target.textContent = isClosed ? ButtonText.OPENED : ButtonText.CLOSED;

  summariesMap.get(evt.target)?.forEach((summary) => {
    const summaryParent = summary.parentElement
    if (isHtmlDetailsElement(summaryParent) && summaryParent.open !== isClosed) {
      summary.click();
    }
  });
};

const onSummaryClick = (evt: MouseEvent) => {
  if (!isHtmlElement(evt.target)) return;
  const detailsElement = evt.target.parentElement;
  const contentElement = evt.target.nextElementSibling;
  if (!isHtmlElement(contentElement) || !isHtmlDetailsElement(detailsElement)) return;

  // Chrome sometimes has a hiccup and gets stuck.
  // So we make sure to remove those classes manually,
  if (contentElement.classList.contains(ContentClass.ANIMATING)) {
    contentElement.classList.remove(ContentClass.ANIMATING, ContentClass.COLLAPSING);
    // ... enforce a reflow so that collapsing may be animated again,
    void evt.target.offsetWidth;
    // ... and fallback to the default behaviour this time.
    return;
  }

  const addAnimationEndListener = (cb: () => void) => contentElement.addEventListener(
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
