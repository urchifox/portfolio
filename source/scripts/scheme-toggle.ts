import { isHtmlInputElement, queryElement, queryElements } from "./utils";

const lightStyles = queryElements<HTMLLinkElement>('link[rel=stylesheet][media*=prefers-color-scheme][media*=light]');
const darkStyles = queryElements<HTMLLinkElement>('link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]');
const darkSchemeMedia = matchMedia('(prefers-color-scheme: dark)');
const control = queryElement<HTMLInputElement>('.scheme-toggle__control');
const schemeName = {
  dark: "dark",
  light: "light",
} as const;
type SchemeNameMap = typeof schemeName;
type SchemeNameValue = SchemeNameMap[keyof SchemeNameMap];

const getSystemScheme = (): SchemeNameValue => {
  const darkScheme = darkSchemeMedia.matches;

  return darkScheme ? 'dark' : 'light';
};

const getSavedLocalScheme = () => localStorage.getItem('color-scheme-local');

const getSavedSystemScheme = () => localStorage.getItem('color-scheme-system');

const saveLocalScheme = (scheme: SchemeNameValue) => {
  localStorage.setItem('color-scheme-local', scheme);
};

const saveSystemScheme = (scheme: SchemeNameValue) => {
  localStorage.setItem('color-scheme-system', scheme);
};

const clearLocalScheme = () => {
  localStorage.removeItem('color-scheme-local');
};

const setScheme = (scheme: SchemeNameValue) => {
  const lightMedia = (scheme === 'light') ? 'all' : 'not all';
  const darkMedia = (scheme === 'dark') ? 'all' : 'not all';

  [...lightStyles].forEach((link) => {
    link.media = lightMedia;
  });

  [...darkStyles].forEach((link) => {
    link.media = darkMedia;
  });
};

const onControlClick = (evt: MouseEvent) => {
  if (!isHtmlInputElement(evt.target)) return
  const scheme = (evt.target.checked) ? 'dark' : 'light';
  saveLocalScheme(scheme);
  setScheme(scheme);
};

const init = () => {
  const savedLocalScheme = getSavedLocalScheme();
  const savedSystemScheme = getSavedSystemScheme();
  const currentSystemScheme = getSystemScheme();

  if (savedSystemScheme !== currentSystemScheme) {
    saveSystemScheme(currentSystemScheme);
    clearLocalScheme();
  }

  const scheme = savedLocalScheme !==null && Object.keys(schemeName).includes(savedLocalScheme) ?
    savedLocalScheme as SchemeNameValue :
    currentSystemScheme

  setScheme(scheme);
  control.checked = (savedLocalScheme ?? currentSystemScheme) === 'dark';
  control.addEventListener('click', onControlClick);
};


export {init};
