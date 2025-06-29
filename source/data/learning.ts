type Course = {
  name: string
  dateStart: { datetime: string, string: string }
  dateEnd: { datetime: string, string: string }
  descrption: string
  certificate: {name: string, text: string}
  diploma: string
  link: string
}
export const courses: Array<Course> = [
  {
    name: "JavaScript. Профессиональная разработка веб-интерфейсов",
    dateStart: {
      datetime: "2023-06-06",
      string: "6 июня"
    },
    dateEnd: {
      datetime: "2023-08-07",
      string: "7 августа 2023"
    },
    descrption: "Изучила синтаксис языка, базовые конструкции, взаимодействие с DOM, асинхронные запросы к серверу и встраивание сторонних библиотек. И все это с соблюдением принципов DRY и KISS.",
    certificate: {
      name: "certificate-js-1",
      text: "Сертификат школы HTML Academy удостоверяет, что Евтухова Екатерина Павловна успешно прошла курс и защитила дипломный проект, сертфикат подписан руководителем проекта Александром Першиным"
    },
    diploma: "project-kekstagram",
    link: "https://up.htmlacademy.ru/javascript/29"
  },
  {
    name: "JavaScript. Архитектура клиентских приложений",
    dateStart: {
      datetime: "2023-08-07",
      string: "7 августа"
    },
    dateEnd: {
      datetime: "2023-10-09",
      string: "9 октября 2023"
    },
    descrption: "Погрузилась в углубленное изучение языка в ООП стиле. Научилась разделять интерфейс на компоненты и построила SPA в паттерне MVP. Освоила взаимодействие с сервером по протоколу HTTP, реализуя методы CRUD с помощью REST API.",
    certificate: {
      name: "certificate-js-2",
      text: "Сертификат школы HTML Academy удостоверяет, что Евтухова Екатерина Павловна успешно прошла курс и защитила дипломный проект, сертфикат подписан руководителем проекта Александром Першиным"
    },
    diploma: "project-big-trip",
    link: "https://up.htmlacademy.ru/ecmascript/21"
  },
  {
    name: "HTML и CSS. Адаптивная вёрстка и автоматизация",
    dateStart: {
      datetime: "2023-11-27",
      string: "27 ноября 2023"
    },
    dateEnd: {
      datetime: "2024-02-05",
      string: "5 февраля 2024"
    },
    descrption: "Закрепила понимание методологии БЭМ. Освоила адаптивную верстку с использованием SASS. Научилась грамотной работе с графикой и шрифтами. Использовала инструменты автоматизации для достижения хорошей производительности сайта.",
    certificate: {
      name: "certificate-html-2",
      text: "Сертификат школы HTML Academy удостоверяет, что Евтухова Екатерина Павловна успешно прошла курс и защитила дипломный проект, сертфикат подписан руководителем проекта Александром Першиным"
    },
    diploma: "project-cat-energy",
    link: "https://up.htmlacademy.ru/adaptive/30"
  },
]

type Practice = {
  name: string
  descrption: string
  projects?: Array<{
    name: string
    id: string
  }>
}
export const practices: Array<Practice> = [
  {
    name: "Вёрстка текстового содержимого страниц",
    descrption: "Освоила навык оформления текстового контента с учетом семантики. Поработала со сложными элементами: формулы, сноски, нумерация списка с прерыванием, денежные знаки, разбиение на колонки, таблицы, буквицы и красные строки, сложные обтекания текстом внешнего элемента и заключение текста в непрямоугольный шейп, скрытие не поместившегося текста и реализация кнопки “читать далее”.",
    projects: [
      {
        name: "Проект \"Blogick\"",
        id: "project-blogick",
      },
      {
        name: "Проект \"OneNews\"",
        id: "project-onenews",
      },
      {
        name: "Проект \"Science blog\"",
        id: "project-science-blog",
      },
      {
        name: "Проект \"Italian chef’s blog\"",
        id: "project-italian-chefs-blog",
      },
    ]
  },
  {
    name: "Вёрстка навигационных элементов интерфейса",
    descrption: "Укрепила понимание верстки и стилизации таких элементов навигации, как линейное и многоуровневое меню, выпадающее подменю, хлебные крошки, пагинация. Узнала тонкости работы со списками и ссылками.",
  },
  {
    name: "Вёрстка карточных элементов интерфейса",
    descrption: "Закрепила навык оформления каталога товаров и его карточек с учетом доступности и гибкой сетки.",
    projects: [
      {
        name: "Проект \"Online smartphones store\"",
        id: "project-online-smartphones-store",
      }
    ]
  },
  {
    name: "Вёрстка многослойных элементов интерфейса",
    descrption: "Сформировала четкое понимание работы разных видов позиционирования, научилась создавать многослойность через grid-сетку. Отработала навык стилизации слайдеров, поп-апов, модальных окон, тултипов, липких и выпадающих элементов.",
    projects: [
      {
        name: "Проект \"Multilayer exercises\"",
        id: "project-multilayer-exercises",
      }
    ]
  },
]
