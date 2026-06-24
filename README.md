# CV & Porfolio

## About the project

*Under active development*

This is a fully independent portfolio project created to supplement my resume and gather information about my experience in one place. For this project I wrote the technical specification and created a Figma mockup for three site states across different screen sizes.

As code quality criteria I follow the [HTML Academy](https://htmlacademy.ru/) code guide (diploma project defense criteria from the school's courses and linters). In some cases I deliberately deviated from or adjusted certain rules. For example:
- I follow the nesting order proposed by [Sergey Artemov](https://github.com/firefoxic), where it is allowed to nest other modifiers inside pseudo-classes and BEM modifiers, but only those that come earlier in the list:
  1. all common properties of the element itself
  2. @media only with properties of the element itself
  3. &:pseudo-classes
  4. &--bem_modifiers
  5. &:pseudo-elements

- I use style encapsulation based on [Vadim Makeev's](https://github.com/pepelsbey) idea, where styles for each screen size are written in a separate media query (rather than overridden through the cascade);

- I follow this order of style properties:
  1. Positioning
  2. Box model
  3. Typography
  4. Visual styling
  5. Animation
  6. Miscellaneous

### Most interesting and challenging project tasks
- **Theme setup and switching** — I based my implementation on [Vadim Makeev's](https://github.com/pepelsbey) approach from his video tutorials ([part 1](https://www.youtube.com/watch?v=Qwuyeo7iuNY), [part 2](https://www.youtube.com/watch?v=8LFbS78a4Rw&t=1082s)), but adapted it to my design and slightly changed the script logic.
- **Using relative units** — all font sizes and spacing between elements are tied to the base font size.
- **Working with new elements** — I learned the nuances of the details and dialog tags.

## Folder structure

Each folder has a `README.md` file with a more detailed description of how to work with that folder

```shell
├── .github/                      # Special folder for GitHub
│   └── workflows/                # Automation for GitHub Actions
│       ├── check.yml             # Runs linters on GitHub
│       └── gh-pages.yml          # Publishes the project and creates a project link
├── raw/                          # Folder for raw files (ignored by git)
│   └── images/                   # Folder for original images
│       └── icons/                # Folder for original SVG icons
├── source/                       # Project source files
│   ├── favicons/                 # Folder for favicons (except favicon.ico)
│   ├── fonts/                    # Folder for fonts
│   ├── images/                   # Folder for optimized images
│   │   └── icons/                # Folder for optimized SVG icons converted into a sprite (stack)
│   ├── scripts/                  # Scripts
│   │   └── index.js              # Main script
│   ├── styles/                   # Folder for Sass preprocessor files
│   │   ├── blocks/               # BEM block styles
│   │   │   └── header.scss       # Styles for a specific BEM block
│   │   ├── global                # Files for connecting library styles from the folder
│   │   │   ├── fonts.scss        # Connecting fonts to the project
│   │   │   ├── global.scss       # Global styles that apply to the whole project
│   │   │   └── variables.scss    # Variables for the whole project
│   │   └── styles.scss           # Main stylesheet with imports of all others
│   ├── vendor                    # Folder for third-party libraries
│   └── index.html                # HTML file for the main page
├── .editorconfig                 # Text file formatting settings
├── .eslintrc                     # Rules for eslint
├── .gitignore                    # Git ignore settings
├── .linthtmlrc                   # Rules for linthtml
├── .stylelintrc                  # Rules for stylelint
├── gulpfile.js                   # Gulp automation
├── package.json                  # Project dependencies, scripts, and settings
├── package-lock.json             # Project dependencies
└── README.md                     # Documentation
```
## About the build

The build runs on gulp version 4.

### Main commands

- `npm start` — starts the build with a development server
- `npm run build` — creates the `build` folder with optimized production files

### Additional commands

- `npm run preview` — lets you preview the production build result
- `npm run lint` — runs all checks (takes a long time):
  - `npm run lint:spaces` — checks indentation with editorConfig
  - `npm run lint:markup` — checks HTML markup with the W3C validator
  - `npm run lint:html` — checks markup against linthtml rules
  - `npm run lint:bem` — checks correct BEM usage in markup
  - `npm run lint:styles` — checks the project against stylelint
  - `npm run lint:scripts` — checks scripts against eslint rules
- `npm run optimize` — runs all image optimizations (takes a long time):
  - `npm run optimize:raster` — optimizes raster images from `raw/images/` into `source/images/`
  - `npm run optimize:vector` — optimizes vector images from `raw/images/` into `source/images/`

## Planned next steps
- Improve animations, both interactive ones and parallax effects on scroll.
- Add a screenshot slider to project cards.
- Integrate a library for spell checking and typographic symbols (for example, non-breaking spaces).
- Add a package for automatic style property ordering.

## Rights and sources
All vector images are taken from the [Google Fonts](https://fonts.google.com/icons) library.
All fonts are taken from the [Google Fonts](https://fonts.google.com/) library.
The build is taken from the [HTML Academy repository](https://github.com/htmlacademy/html2-basic-template).
