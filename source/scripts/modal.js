const modals = document.querySelectorAll('.modal');
const controls = document.querySelectorAll('[data-modal-id]');
const closeButtons = document.querySelectorAll('.modal__button');
const map = new Map();

// TODO добавить поддержку https://doka.guide/html/dialog/#rasshiryaem-brauzernuyu-podderzhku
const dialogPolyfillURL = 'https://esm.run/dialog-polyfill';
const isBrowserNotSupportDialog = window.HTMLDialogElement === undefined;

const onControlClick = (evt) => {
  const control = evt.target.closest('[data-modal-id]');
  const modal = map.get(control);
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
    map.set(control, modal);
    control.addEventListener('click', onControlClick);
  });
  closeButtons.forEach((button) => button.addEventListener('click', onCloseClick));
  modals.forEach((modal) => modal.addEventListener('click', onBackdropClick));
};

export {init};
