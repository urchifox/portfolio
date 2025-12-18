import { Stack, stackName } from "./stack";

type Skill = {
  text: string;
  items: Array<Stack>
};

export const skills: Array<Skill> = [
  {
    text: "Пишу валидную семантическую разметку, знаю базовые правила доступного интерфейса, умею валидировать формы",
    items: [
      stackName.html,
      stackName.pug,
    ],
  },
  {
    text: "Строю адаптивные резиновые интерфейсы, уверенно использую flex и grid сетки, оптимизирую работу с помощью кастомных свойств и переменных, владею подходами CSS Modules и CSS-in-JS",
    items: [
      stackName.css,
      stackName.sass,
    ],
  },
  {
    text: "Уверенно пишу как на TypeScript, так и на ванильном JS, знакома с React, умею работать с асинхронными операциями, понимаю принципы работы различных алгоритмов, знакома с понятием “О” большое, думаю об алгоритмической сложности при написании кода",
    items: [
      stackName.js,
      stackName.ts,
      stackName.react,
      stackName.jq,
    ],
  },
  {
    text: "Умею работать с системой контроля версий GIT, знаю основные команды по работе с репозиторием, как работать в ветках и форках",
    items: [
      stackName.git,
      stackName.github,
    ],
  },
  {
    text: "Умею делить интерфейс на переиспользуемые и независимые компоненты.",
    items: [
      stackName.bem,
    ],
  },
  {
    text: "Имею опыт работы на проектах с настроенной автоматизацией (vite, webpack, gulp) и использованием npm-пакетов",
    items: [
      stackName.vite,
      stackName.webpack,
      stackName.gulp,
    ],
  },
];
