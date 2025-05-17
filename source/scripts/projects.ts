import {createElement, isHtmlElement, isHtmlInputElement, queryElement, queryElements} from './utils.js';
import {typeName, PROJECTS_DATA, ProjectData, StackNameValue} from './projects-data.js';

const root = queryElement('.projects__list');
const filtrationButtons = queryElements('input[name="filter"]');
const defaultFiltratonButton = queryElement<HTMLInputElement>('input#all[name="filter"]');
const links = queryElements('a[href^="#project-"]');
const counters = queryElements('.projects__filters-count');
const fragment = document.createDocumentFragment();

const getStackTemplate = (tools: Array<StackNameValue>) => tools.reduce((template, tool) => /*html*/`${template}
  <li class="project-card__stack-item project-card__stack-item--icon-${tool}">
    <span class="visually-hidden">${tool}</span>
  </li>`, '');

const getImagesTemplate = (images: Array<string>) => images.reduce((template, image) => /*html*/`${template}
  <picture>
    <source type="image/webp" media="(min-width: 1200px)"
      srcset="./images/cover-${image}-large@1x.webp 1x,
              ./images/cover-${image}-large@2x.webp 2x"
      width="441" height="248">
    <source type="image/webp" media="(min-width: 760px)"
      srcset="./images/cover-${image}-medium@1x.webp 1x,
              ./images/cover-${image}-medium@2x.webp 2x"
      width="1096" height="616">
    <source type="image/webp"
      srcset="./images/cover-${image}-small@1x.webp 1x,
              ./images/cover-${image}-small@2x.webp 2x"
      width="689" height="387">

      <source type="image/jpg" media="(min-width: 1200px)"
        srcset="./images/cover-${image}-large@1x.jpg 1x,
                ./images/cover-${image}-large@2x.jpg 2x"
        width="441" height="248">
      <source type="image/jpg" media="(min-width: 760px)"
        srcset="./images/cover-${image}-medium@1x.jpg 1x,
                ./images/cover-${image}-medium@2x.jpg 2x"
        width="1096" height="616">

    <img class="project-card__picture" loading="lazy"
      src="./images/cover-${image}-small@1x.jpg"
      srcset="./images/$cover-{image}-small@2x.jpg 2x"
      width="689" height="387"
      alt="Скриншот страницы проекта">
  </picture>`, '');

const getTemplate = ({id, name, type, descrption, tools, github, webpage, images}: ProjectData) => /*html*/`
  <li class="projects__item project-card" id="${id}">
    <h3 class="project-card__title">${name}</h3>
    <p class="project-card__caption">${type}</p>
    <p class="project-card__text">${descrption}</p>
    <ul class="project-card__stack-list">
      ${getStackTemplate(tools)}
    </ul>
    <div class="project-card__buttons-wrapper">
      <a class="project-card__button button button--icon-github" href="${github}">
        <span class="visually-hidden">Проект на github</span>
      </a>
      <a class="project-card__button button button--icon-external-link" href="${webpage}">
        <span class="visually-hidden">Публикация проекта</span>
      </a>
    </div>
    <div class="project-card__slider">
      ${getImagesTemplate(images)}
    </div>
  </li>
`;

const render = (data: Array<ProjectData>) => {
  data.forEach((datum) => {
    const card = createElement(getTemplate(datum));
    if (isHtmlElement(card)) fragment.append(card);
  });
  root.append(fragment);
};

const isTypeNameKey = (key: string): key is keyof typeof typeName => {
  return Object.keys(typeName).includes(key)
}

const onButtonClick = (evt: Event) => {
  if (!isHtmlInputElement(evt.target)) return

  root.scrollIntoView();
  const value = evt.target.value
  const filteredData = isTypeNameKey(value) ?
    PROJECTS_DATA.filter((datum) => datum.type === typeName[value]) :
    PROJECTS_DATA;

  root.innerHTML = '';
  render(filteredData);
};

const onLinkClick = () => {
  defaultFiltratonButton.checked = true;
  root.innerHTML = '';
  render(PROJECTS_DATA);
};

const init = () => {
  render(PROJECTS_DATA);
  counters.forEach((counter) => {
    counter.textContent = counter.dataset.type === 'all' ?
      `(${PROJECTS_DATA.length})` :
      `(${PROJECTS_DATA.filter((datum) =>
          counter.dataset.type !== undefined &&
          isTypeNameKey(counter.dataset.type) &&
          datum.type === typeName[counter.dataset.type]
        ).length})`;
  });
  filtrationButtons.forEach((button) => button.addEventListener('change', onButtonClick));
  links.forEach((link) => link.addEventListener('click', onLinkClick));
};

export {init};
