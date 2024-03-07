import {createElement} from './utils.js';
import {PROJECTS_DATA} from './projects-data.js';

const root = document.querySelector('.projects__list');
const fragment = document.createDocumentFragment();

const getStackTemplate = (tools) => tools.reduce((template, tool) => /*html*/`${template}
  <li class="project-card__stack-item project-card__stack-item--icon-${tool}">
    <span class="visually-hidden">${tool}</span>
  </li>`, '');

const getImagesTemplate = (images) => images.reduce((template, image) => /*html*/`
  <picture>
    <source type="image/webp" media="(min-width: 1200px)"
      srcset="./images/${image}-large@1x.webp 1x,
              ./images/${image}-large@2x.webp 2x"
      width="441" height="248">
    <source type="image/webp" media="(min-width: 760px)"
      srcset="./images/${image}-medium@1x.webp 1x,
              ./images/${image}-medium@2x.webp 2x"
      width="1096" height="616">
    <source type="image/webp"
      srcset="./images/${image}-small@1x.webp 1x,
              ./images/${image}-small@2x.webp 2x"
      width="689" height="387">

      <source type="image/jpg" media="(min-width: 1200px)"
        srcset="./images/${image}-large@1x.jpg 1x,
                ./images/${image}-large@2x.jpg 2x"
        width="441" height="248">
      <source type="image/jpg" media="(min-width: 760px)"
        srcset="./images/${image}-medium@1x.jpg 1x,
                ./images/${image}-medium@2x.jpg 2x"
        width="1096" height="616">

    <img class="project-card__picture"
      src="./images/${image}-small@1x.jpg"
      srcset="./images/${image}-small@2x.jpg 2x"
      width="689" height="387"
      alt="Скриншот страницы проекта">
  </picture>`, '');

const getTemplate = ({name, type, descrption, tools, github, webpage, images}) => /*html*/`
  <li class="projects__item project-card" id="project">
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

const render = () => {
  PROJECTS_DATA.forEach((datum) => {
    const card = createElement(getTemplate(datum));
    fragment.append(card);
  });
  root.append(fragment);
};

const init = () => {
  render();
};

export {init};
