export type Stack = {
  name: string;
  text: string;
};

export const stackName: Record<string, Stack> = {
  html: {
    name: "html",
    text: "HTML",
  },
  css: {
    name: "css",
    text: "CSS",
  },
  sass: {
    name: "sass",
    text: "Sass",
  },
  js: {
    name: "javascript",
    text: "JavaScript",
  },
  ts: {
    name: "typescript",
    text: "TypeScript",
  },
  bem: {
    name: "bem",
    text: "БЭМ",
  },
  git: {
    name: "git",
    text: "Git",
  },
  github: {
    name: "github",
    text: "Github",
  },
  vite: {
    name: "vite",
    text: "Vite",
  },
  webpack: {
    name: "webpack",
    text: "Webpack",
  },
  gulp: {
    name: "gulp",
    text: "Gulp",
  },
}
