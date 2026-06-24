# Folder for styles, scripts, images, and other files from third-party libraries

To make it easier to add third-party libraries to your project, you can use the vendor folder. You can place any files related to external libraries in this folder.

For example, suppose you want to add a library that includes both a stylesheet `library.css` and scripts `library.js`. To integrate them into your project, follow these steps:

Place the library files in the vendor folder as shown below:

```bash
├── source/
│   └── vendor/
│        ├── library.css
│        └── library.js
```

If you have several libraries with different files, you can group the files of one library in its own subfolder. For example:

```bash
├── source/
│   └── vendor/
│       └── library/
│             ├── library.css
│             └── library.js
```

When your project is built, all files from the vendor folder are copied into the build folder while preserving their structure. For example:

```bash
├── build/
│   └── vendor/
│        └── library/
│             ├── library.css
│             └── library.js
```

This way, you can conveniently organize and integrate third-party libraries into your project while keeping their structure in the vendor folder.
