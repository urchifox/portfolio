import {isHtmlInputElement, queryElement, queryElements} from './utils.js';
import {projectType, projects} from '../data/projects.js';

const root = queryElement('.projects__list');
const filtrationButtons = queryElements('input[name="filter"]');
const defaultFiltratonButton = queryElement<HTMLInputElement>('input#all[name="filter"]');
const links = queryElements('a[href^="#project-"]');
const counters = queryElements('.projects__filters-count');
const cards = queryElements(".project-card")

const isTypeNameKey = (key: string): key is keyof typeof projectType => {
  return Object.keys(projectType).includes(key)
}

const onFilterClick = (evt: Event) => {
  if (!isHtmlInputElement(evt.target)) return

  root.scrollIntoView();
  const value = evt.target.value
  cards.forEach(card =>
    card.classList.toggle("visually-hidden", value !== "all" && card.dataset.type !== value)
  )
};

const onLinkClick = () => {
  defaultFiltratonButton.click()
};

const init = () => {
  counters.forEach((counter) => {
    counter.textContent = counter.dataset.type === 'all' ?
      `(${projects.length})` :
      `(${projects.filter((datum) =>
          counter.dataset.type !== undefined &&
          isTypeNameKey(counter.dataset.type) &&
          datum.type === counter.dataset.type
        ).length})`;
  });
  filtrationButtons.forEach((button) => button.addEventListener('change', onFilterClick));
  links.forEach((link) => link.addEventListener('click', onLinkClick));
};

export {init};
