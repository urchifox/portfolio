const lightStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=light]');
const darkStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]');
const darkSchemeMedia = matchMedia('(prefers-color-scheme: dark)');
const control = document.querySelector('.scheme-toggle__control');

const getSystemScheme = () => {
  const darkScheme = darkSchemeMedia.matches;

  return darkScheme ? 'dark' : 'light';
};

const getSavedLocalScheme = () => localStorage.getItem('color-scheme-local');

const getSavedSystemScheme = () => localStorage.getItem('color-scheme-system');

const saveLocalScheme = (scheme) => {
  localStorage.setItem('color-scheme-local', scheme);
};

const saveSystemScheme = (scheme) => {
  localStorage.setItem('color-scheme-system', scheme);
};

const clearLocalScheme = () => {
  localStorage.removeItem('color-scheme-local');
};

const setScheme = (scheme) => {
  const lightMedia = (scheme === 'light') ? 'all' : 'not all';
  const darkMedia = (scheme === 'dark') ? 'all' : 'not all';

  [...lightStyles].forEach((link) => {
    link.media = lightMedia;
  });

  [...darkStyles].forEach((link) => {
    link.media = darkMedia;
  });
};

const onControlClick = (evt) => {
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

  setScheme(savedLocalScheme ?? currentSystemScheme);
  control.checked = (savedLocalScheme ?? currentSystemScheme) === 'dark';
  control.addEventListener('click', onControlClick);
};


export {init};
