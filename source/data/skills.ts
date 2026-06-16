import { Stack, stackName } from "./stack";

type Skill = {
  text: string;
  items: Array<Stack>
};

export const skills: Array<Skill> = [
  {
    text: "Write valid semantic markup and build accessible interfaces",
    items: [
      stackName.html,
      stackName.pug,
    ],
  },
  {
    text: "Build adaptive responsive interfaces, use flex and grid layouts, optimize style systems with custom properties and variables, work with CSS Modules and CSS-in-JS",
    items: [
      stackName.css,
      stackName.sass,
    ],
  },
  {
    text: "Write confidently in both TypeScript and vanilla JS, am familiar with React, work with asynchronous operations, understand how various algorithms work, know Big O notation, and consider algorithmic complexity when writing code",
    items: [
      stackName.js,
      stackName.ts,
      stackName.react,
      stackName.jq,
    ],
  },
  {
    text: "Work with the GIT version control system, know the main repository commands, and how to work with branches and forks",
    items: [
      stackName.git,
      stackName.github,
    ],
  },
  {
    text: "Split interfaces into reusable and independent components.",
    items: [
      stackName.bem,
    ],
  },
  {
    text: "Experienced with configured build tools (vite, webpack, gulp) and npm packages",
    items: [
      stackName.vite,
      stackName.webpack,
      stackName.gulp,
    ],
  },
];
