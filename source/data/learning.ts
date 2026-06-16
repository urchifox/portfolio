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
    name: "JavaScript. Professional Development of Web Interfaces",
    dateStart: {
      datetime: "2023-06-06",
      string: "June 6"
    },
    dateEnd: {
      datetime: "2023-08-07",
      string: "August 7, 2023"
    },
    descrption: "I studied language syntax, basic constructs, DOM interaction, asynchronous server requests, and integrating third-party libraries — all while following DRY and KISS principles.",
    certificate: {
      name: "certificate-js-1",
      text: "Certificate confirming that Ekaterina Evtukhova completed the workshop and defended the graduation project; the certificate is signed by the project manager Alexander Pershin"
    },
    diploma: "project-kekstagram",
    link: "https://htmlacademy.ru/intensive/javascript"
  },
  {
    name: "JavaScript. Architecture of Front-end Applications",
    dateStart: {
      datetime: "2023-08-07",
      string: "August 7"
    },
    dateEnd: {
      datetime: "2023-10-09",
      string: "October 9, 2023"
    },
    descrption: "I dove into an in-depth study of the language in OOP style. I learned to split the interface into components and built an SPA using the MVP pattern. I mastered server interaction over HTTP, implementing CRUD methods with a REST API.",
    certificate: {
      name: "certificate-js-2",
      text: "Certificate confirming that Ekaterina Evtukhova completed the workshop and defended the graduation project; the certificate is signed by the project manager Alexander Pershin"
    },
    diploma: "project-big-trip",
    link: "https://htmlacademy.ru/intensive/ecmascript"
  },
  {
    name: "HTML and CSS. Adaptive Website Coding and Automation",
    dateStart: {
      datetime: "2023-11-27",
      string: "November 27, 2023"
    },
    dateEnd: {
      datetime: "2024-02-05",
      string: "February 5, 2024"
    },
    descrption: "I reinforced my understanding of the BEM methodology. I mastered adaptive layout with SASS. I learned to work properly with graphics and fonts. I used automation tools to achieve good site performance.",
    certificate: {
      name: "certificate-html-2",
      text: "Certificate confirming that Ekaterina Evtukhova completed the workshop and defended the graduation project; the certificate is signed by the project manager Alexander Pershin"
    },
    diploma: "project-cat-energy",
    link: "https://htmlacademy.ru/intensive/adaptive"
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
    name: "Layout of page text content",
    descrption: "Long-form content: formulas, footnotes, interrupted lists, columns, tables, drop caps, shaped wraps, overflow truncation, and read-more patterns.",
    projects: [
      {
        name: "Project \"Blogick\"",
        id: "project-blogick",
      },
      {
        name: "Project \"OneNews\"",
        id: "project-onenews",
      },
      {
        name: "Project \"Science blog\"",
        id: "project-science-blog",
      },
      {
        name: "Project \"Italian chef’s blog\"",
        id: "project-italian-chefs-blog",
      },
    ]
  },
  {
    name: "Layout of interface navigation elements",
    descrption: "Linear and nested menus, dropdowns, breadcrumbs, and pagination with accessible list and link markup.",
  },
  {
    name: "Layout of card interface elements",
    descrption: "Product catalogs and cards with flexible grids and accessibility in mind.",
    projects: [
      {
        name: "Project \"Online smartphones store\"",
        id: "project-online-smartphones-store",
      }
    ]
  },
  {
    name: "Layout of multilayer interface elements",
    descrption: "Positioning, grid layering, sliders, modals, tooltips, sticky elements, and dropdowns.",
    projects: [
      {
        name: "Project \"Multilayer exercises\"",
        id: "project-multilayer-exercises",
      }
    ]
  },
]
