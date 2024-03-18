import {createElement} from './utils.js';
import {typeName, PROJECTS_DATA} from './projects-data.js';

const root = document.querySelector('.projects__list');
const filtrationButtons = document.querySelectorAll('input[name="filter"]');
const defaultFiltratonButton = document.querySelector('input#all[name="filter"]');
const links = document.querySelectorAll('a[href^="#project-"]');
const counters = document.querySelectorAll('.projects__filters-count');
const fragment = document.createDocumentFragment();

const getStackTemplate = (tools) => tools.reduce((template, tool) => /*html*/`${template}
  <li class="project-card__stack-item project-card__stack-item--icon-${tool}">
    <span class="visually-hidden">${tool}</span>
  </li>`, '');

const getImagesTemplate = (images) => images.reduce((template, image) => /*html*/`
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

const getTemplate = ({id, name, type, descrption, tools, github, webpage, images}) => /*html*/`
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

const render = (data) => {
  data.forEach((datum) => {
    const card = createElement(getTemplate(datum));
    fragment.append(card);
  });
  root.append(fragment);
};

const onButtonClick = (evt) => {
  root.scrollIntoView();
  const filteredData = evt.target.value === 'all' ?
    PROJECTS_DATA :
    PROJECTS_DATA.filter((datum) => datum.type === typeName[evt.target.value]);

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
      `(${PROJECTS_DATA.filter((datum) => datum.type === typeName[counter.dataset.type]).length})`;
  });
  filtrationButtons.forEach((button) => button.addEventListener('change', onButtonClick));
  links.forEach((link) => link.addEventListener('click', onLinkClick));
};

export {init};
