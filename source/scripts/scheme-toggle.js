const lightStyles = document.querySelectorAll('link[rel=stylesheet][media*=light]');
const darkStyles = document.querySelectorAll('link[rel=stylesheet][media*=dark]');
const darckSchemeMedia = matchMedia('(prefers-color-scheme: dark');
const control = document.querySelector('.scheme-toggle__control');

const getSystemScheme = () => {
  const darkScheme = darckSchemeMedia.matches;

  return darkScheme ? 'dark' : 'light';
};

// TODO использовать localStorage для запоминания темы но сбрасывать тему при уходе со страницы

// const getSavedScheme = () => localStorage.getItem('color-scheme');

// const saveScheme = (scheme) => {
//   localStorage.setItem('color-scheme', scheme);
// };

// const clearScheme = () => {
//   localStorage.removeItem('color-scheme');
// };

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
  setScheme(scheme);
};

const init = () => {
  const systemScheme = getSystemScheme();
  console.log(systemScheme);
  control.checked = systemScheme === 'dark';

  control.addEventListener('click', onControlClick);
};


export {init};
