import { isHtmlDialogElement, isHtmlElement, queryElement, queryElements } from "./utils";

const dialogPolyfillURL = 'https://esm.run/dialog-polyfill';
const isBrowserNotSupportDialog = window.HTMLDialogElement === undefined;

const controls = queryElements('[data-modal-id]');
const modalsMap = new Map();

const onControlClick = (evt: MouseEvent) => {
  if (!isHtmlElement(evt.target)) return;
  const control = evt.target.closest('[data-modal-id]');
  const modal = modalsMap.get(control);
  evt.preventDefault();
  modal.showModal();
};

const onCloseClick = (evt: MouseEvent) => {
  evt.stopPropagation();
  if (!isHtmlElement(evt.target)) return;
  const modal = evt.target.closest('.modal');
  if (isHtmlDialogElement(modal)) modal.close();
};

const onBackdropClick = (evt: MouseEvent) => {
  const modal = evt.currentTarget;

  if (evt.target === modal) {
      if (isHtmlDialogElement(modal)) modal.close();
  }
};

const onImgLoaded = (evt: Event) => {
  if (!isHtmlElement(evt.target)) return;
  const wrapper = evt.target.closest('.modal__picture-wrapper');
  if (!isHtmlElement(wrapper)) return;
  const spinner = wrapper.parentNode?.querySelector('.modal__spinner');
  spinner?.remove();

  wrapper.className += ' modal__picture-wrapper--loaded';
};

const init = () => {
  if (isBrowserNotSupportDialog) {
    const dialogs = document.querySelectorAll('dialog');

    dialogs.forEach(async (dialog) => {
      const { default: polyfill } = await import(dialogPolyfillURL);
      polyfill.registerDialog(dialog);
    });
  }

  controls.forEach((control) => {
    const modal = queryElement(`#${control.dataset.modalId}`);
    modalsMap.set(control, modal);
    control.addEventListener('click', onControlClick);
    queryElement('.modal__picture', modal).addEventListener('load', onImgLoaded);
    modal.addEventListener('click', onBackdropClick);
    queryElement('.modal__button', modal).addEventListener('click', onCloseClick);
  });
};

export {init};
