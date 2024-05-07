const dialogPolyfillURL = 'https://esm.run/dialog-polyfill';
const isBrowserNotSupportDialog = window.HTMLDialogElement === undefined;

const controls = document.querySelectorAll('[data-modal-id]');
const modalsMap = new Map();

const onControlClick = (evt) => {
  const control = evt.target.closest('[data-modal-id]');
  const modal = modalsMap.get(control);
  evt.preventDefault();
  modal.showModal();
};

const onCloseClick = (evt) => {
  evt.stopPropagation();
  evt.target.closest('.modal').close();
};

const onBackdropClick = (evt) => {
  const modal = evt.currentTarget;

  if (evt.target === modal) {
    modal.close();
  }
};

const onImgLoaded = (evt) => {
  const wrapper = evt.target.closest('.modal__picture-wrapper');
  const spinner = wrapper.parentNode.querySelector('.modal__spinner');
  spinner.remove();

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
    const modal = document.querySelector(`#${control.dataset.modalId}`);
    modalsMap.set(control, modal);
    control.addEventListener('click', onControlClick);
    modal.querySelector('.modal__picture').addEventListener('load', onImgLoaded);
    modal.addEventListener('click', onBackdropClick);
    modal.querySelector('.modal__button').addEventListener('click', onCloseClick);
  });
};

export {init};
