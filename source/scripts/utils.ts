export const createElement = (template: string) => {
  const newElement = document.createElement("div");
  newElement.innerHTML = template;

  return newElement.firstElementChild;
};

export const isInTheMiddle = (element: HTMLElement) => {
  const elementRect = element.getBoundingClientRect();
  const viewportMidpoint = window.innerHeight / 2;

  return (
    elementRect.top <= viewportMidpoint &&
    elementRect.bottom >= viewportMidpoint
  );
};

export const isScrolledToTop = () => document.documentElement.scrollTop < 10;

export const isScrolledToBottom = () => {
  const scrollPosition = document.documentElement.scrollTop;
  const pageHeight = document.body.scrollHeight - window.innerHeight;

  return pageHeight - scrollPosition < 10;
};

export function queryElement<T extends HTMLElement = HTMLElement>(
  selector: string,
  parent?: HTMLElement
): T {
  const element = (parent ?? document).querySelector<T>(selector);

  if (!element) throw Error(`Element "${selector}" not found`);

  if (!(element instanceof HTMLElement))
    throw Error(`Element "${selector}" is not an HTMLElement`);

  return element;
}

export function queryElements<T extends HTMLElement = HTMLElement>(
  selector: string,
  parent?: HTMLElement
): T[] {
  return [...(parent ?? document).querySelectorAll<T>(selector)];
}

export function isHtmlElement(element: unknown): element is HTMLElement {
  return element instanceof HTMLElement
}

export function isHtmlDialogElement(
  element: unknown
): element is HTMLDialogElement {
  return isHtmlElement(element) && element.tagName === "DIALOG"
}

export function isHtmlDetailsElement(
  element: unknown
): element is HTMLDetailsElement {
  return isHtmlElement(element) && element.tagName === "DETAILS"
}

export function isHtmlInputElement(
  element: unknown
): element is HTMLInputElement {
  return isHtmlElement(element) && element.tagName === "INPUT"
}

export function isHtmlButtonElement(
  element: unknown
): element is HTMLButtonElement {
  return isHtmlElement(element) && element.tagName === "BUTTON"
}
