export const typeName = {
  diploma: 'Дипломный проект',
  trainig: 'Тренировка навыка',
  personal: 'Персональный проект',
};

const stackName = {
  html: 'html',
  css: 'css',
  sass: 'sass',
  js: 'javascript',
  bem: 'bem',
};

export const PROJECTS_DATA = [
  // {
  //   name: 'Portfolio',
  //   type: typeName.personal,
  //   descrption: 'Здесь будет описание этого проекта',
  //   tools: [stackName.html, stackName.sass, stackName.js, stackName.bem],
  //   github: 'https://github.com/urchifox/portfolio',
  //   webpage: 'https://urchifox.github.io/portfolio/',
  //   images: ['']
  // },
  {
    id: 'project-cat-energy',
    name: 'Cat Energy',
    type: typeName.diploma,
    descrption: `Главной задачей этого проекта было реализовать полностью адаптивный интерфейс с соблюдением принципа pixel perfect. В качестве исходных данных были даны макеты всех страниц для 3-х размеров экрана и стайлгайд для фокусных состояний. Сайт имеет три страницы: лендинг, каталог товаров и форму подбора заказа. Весь контент устойчив к замене картинок, а также к переполнению текстом и дополнительными элементами. Наиболее интересными для меня были задачи реализации мобильного меню (которое должно быть в потоке в случае отсутствия JS и открываться по клику в случае его наличия) и стилизации фона у блока hero (кот на большом экране увеличивается пропорционально размеру окна, но до определенного размера, чтобы не показывать обрезанный край картинки).
    </br>Проект сдан на 100 баллов с первой попытки.`,
    tools: [stackName.html, stackName.sass, stackName.js, stackName.bem],
    github: 'https://github.com/urchifox/cat-energy',
    webpage: 'https://urchifox.github.io/cat-energy/',
    images: ['cat-energy']
  },
  {
    id: 'project-grafit-academy',
    name: 'Grafit Academy',
    type: typeName.personal,
    descrption: `Большой самостоятельный проект, на котором я отрабатывала полученные знания. Состоит из двух страниц - лендинг и каталог товаров. Наиболее интересные и сложные фичи проекта:
    </br>- перестроение сеток в каталоге товаров,
    </br>- переиспользуемый слайдер (специально не подключала его библиотекой, т.к. хотела разобраться с нативной реализацией),
    </br>- динамический рендеринг (товары и работы художников),
    </br>- фильтрация и сортировка товаров,
    </br>- подключение библиотеки noUiSlider,
    </br>- работа с Local Storage (дисклеймер демонстрируется только при первом просмотре сайта, запоминается информация об избранных товарах и товарах в корзине, а также информация об авторизации),
    </br>- синхронизация информации о паке в каталоге, модалке и корзине (в т.ч. интерактивных элементов и их состояний).
    </br>Отдельно отмечу, что уже в финале работы с проектом я в качестве эксперимента добавила препроцессор Sass и автоматизированную сборку. Благодаря этому я получила опыт работы с легаси-кодом, ведь потребовалось адаптировать структуру проекта и часть кода.`,
    tools: [stackName.html, stackName.css, stackName.js, stackName.bem],
    github: 'https://github.com/urchifox/grafit-academy',
    webpage: 'https://urchifox.github.io/grafit-academy/',
    images: ['grafit-academy']
  },
  {
    id: 'project-online-smartphones-store',
    name: 'Online smartphones store',
    type: typeName.trainig,
    descrption: 'Небольшая тренировка реализации каталога товаров с карточками в двух состояниях. В качестве исходных данных был макет галереи и открытого модального окна. Я добавила в проект задачу по динамическому рендерингу элементов, упаковав информацию о товарах в объект JS. Дополнительно реализовала динамическую перерисовку части карточки (при смене выбора цвета или объема памяти будет меняться и название товара).',
    tools: [stackName.html, stackName.css, stackName.js, stackName.bem],
    github: 'https://github.com/urchifox/online-store',
    webpage: 'https://urchifox.github.io/online-store/',
    images: ['online-smartphones-store']
  },
  {
    id: 'project-multilayer-exercises',
    name: 'Multilayer exercises',
    type: typeName.trainig,
    descrption: 'Небольшое упражнение по верстке на основе заданного макета, где я попрактиковалась реализовывать многослойные элементы интерфейса: стики-хедер, сообщение о cookies и кнопку “наверх”.',
    tools: [stackName.html, stackName.css, stackName.js, stackName.bem],
    github: 'https://github.com/urchifox/multilayer-exercise',
    webpage: 'https://urchifox.github.io/multilayer-exercise/',
    images: ['multilayer-exercises']
  },
  {
    id: 'project-big-trip',
    name: 'Big Trip',
    type: typeName.diploma,
    descrption: `SPA, написанное в ООП стиле с соблюдением архитектуры MVP.  В качестве исходных данных было дано ТЗ с требованиями к функционалу сайта и готовая верстка страницы во всех требуемых состояниях. Эту верстку я разделила на компоненты, которые интегрировала в JS код в качестве шаблонных строк. В итоге страница полностью отрисовывается динамически, в исходном html-файле присутствуют только контейнеры для компонентов и пара статичных элементов. Реализовано взаимодействие с сервером (методы CRUD). Для экранирования данных клиента использована библиотека “he”, а для работы с датами использованы библиотеки “flatpickr” и “dayjs”. Также при работе с этим проектом получила опыт работы с фреймворком (в данном случае с фреймворком от авторов курса).

    </br>Проект сдан на 100 баллов со второй попытки.`,
    tools: [stackName.js],
    github: 'https://github.com/urchifox/big-trip',
    webpage: 'https://urchifox.github.io/big-trip/',
    images: ['big-trip']
  },
  {
    id: 'project-kekstagram',
    name: 'Kekstagram',
    type: typeName.diploma,
    descrption: `Динамический одностраничник, который получает данные о постах с сервера и отрисовывает их на странице с возможностью сортировки. Реализована обратная связь интерфейса - в случае возникновения ошибок соединения с сервером будут показаны сообщения об этом.
    В качестве исходных данных была готовая верстка страницы с шаблонами динамических элементов (в тегах template).
    Одной из отличительных особенностей моей реализации стало формирование отдельного модуля для хранения и экспорта результатов всех querySelector в формате объектов.

    </br>Проект сдан на 100 баллов со второй попытки.`,
    tools: [stackName.js],
    github: 'https://github.com/urchifox/kekstagram',
    webpage: 'https://urchifox.github.io/kekstagram/',
    images: ['kekstagram']
  },
  {
    id: 'project-italian-chefs-blog',
    name: 'Italian chef’s blog',
    type: typeName.trainig,
    descrption: `Один из наиболее сложных проектов по верстке текстового контента на основе готового макета. Использована сложная типографика:
    </br>- буквицы,
    </br>- лигатуры,
    </br>- врезки и обтекания сложной формы,
    </br>- поворот текста под углом,
    </br>- разделения текста по колонкам.
    </br>Помимо основных задач я уделила внимание интерактивным элементам и анимации их фокусных состояний.`,
    tools: [stackName.html, stackName.css, stackName.bem],
    github: 'https://github.com/urchifox/Italian-chefs-blog__article',
    webpage: 'https://urchifox.github.io/Italian-chefs-blog__article/',
    images: ['italian-chefs-blog']
  },
  {
    id: 'project-science-blog',
    name: 'Science blog',
    type: typeName.trainig,
    descrption: `Верстка (по готовому макету) научной статьи с разнообразными текстовыми элементами:
    </br>- кликабельное содержание,
    </br>- таблицы,
    </br>- формулы,
    </br>- деление текста на колонки,
    </br>- сноски с кнопкой возврата,
    </br>- многоуровневый нумерованный список.
    </br>Также здесь есть карточки других статей с реализацией скрытия текста и кнопкой “читать дальше” для перехода на статью. Дополнительно я поставила и решила задачу по оживлению элемента "поиск" на чистом css: при клике на слово "поиск" соответствующее поле ввода выезжает на центр шапки.`,
    tools: [stackName.html, stackName.css, stackName.bem,],
    github: 'https://github.com/urchifox/SCIENCE__article_carbohydrates',
    webpage: 'https://urchifox.github.io/SCIENCE__article_carbohydrates/',
    images: ['science-blog']
  },
  {
    id: 'project-onenews',
    name: 'OneNews',
    type: typeName.trainig,
    descrption: `Верстка (по готовому макету) статьи о финансах на новостном портале, где помимо стандартных для статей элементов также присутствуют:
    </br>- таблицы,
    </br>- список определений, оформленный как диаграмма,
    </br>- многоуровневый нумерованный список,
    </br>- формулы,
    </br>- блоки, вынесенные вне основного контента,
    </br>- карточка другой статьи с реализацией скрытия текста и кнопкой “читать дальше” для перехода на статью.`,
    tools: [stackName.html, stackName.css, stackName.bem],
    github: 'https://github.com/urchifox/OneNews__article_credits',
    webpage: 'https://urchifox.github.io/OneNews__article_credits/',
    images: ['onenews']
  },
  {
    id: 'project-blogick',
    name: 'Blogick',
    type: typeName.trainig,
    descrption: `Верстка (по готовому макету) статьи в блоге о путешествиях, где размечены и стилизованы классические текстовые элементы, такие как:
    </br>- заголовки,
    </br>- лид-блок,
    </br>- мета-информация о статье,
    </br>- хлебные-крошки,
    </br>- цитаты,
    </br>- упорядоченный список с прерывающейся нумерацией.
    </br>Помимо этого страница включает в себя обтекаемые элементы и вынесенные вне основного контента блоки.`,
    tools: [stackName.html, stackName.css, stackName.bem],
    github: 'https://github.com/urchifox/Blogick__article_Georgia',
    webpage: 'https://urchifox.github.io/Blogick__article_Georgia/',
    images: ['blogick']
  },
];
