import { readFileSync, rmSync } from 'node:fs';

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import { nunjucksCompile } from 'gulp-nunjucks';
import htmlmin from 'gulp-htmlmin';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import postUrl from 'postcss-url';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { createGulpEsbuild } from 'gulp-esbuild';
import browserslistToEsbuild from 'browserslist-to-esbuild';
import sharp from 'gulp-sharp-responsive';
import svgo from 'gulp-svgmin';
import { stacksvg } from 'gulp-stacksvg';
import server from 'browser-sync';
import bemlinter from 'gulp-html-bemlinter';
import pug from 'gulp-pug';

const { src, dest, watch, series, parallel } = gulp;
const sass = gulpSass(dartSass);
const PATH_TO_SOURCE = './source/';
const PATH_TO_DIST = './build/';
const PATH_TO_RAW = './raw/';
const PATHS_TO_STATIC = [
  `${PATH_TO_SOURCE}fonts/**/*.{woff2,woff}`,
  `${PATH_TO_SOURCE}*.ico`,
  `${PATH_TO_SOURCE}*.webmanifest`,
  `${PATH_TO_SOURCE}favicons/**/*.{png,svg}`,
  `${PATH_TO_SOURCE}vendor/**/*`,
  `${PATH_TO_SOURCE}images/**/*`,
  `!${PATH_TO_SOURCE}images/icons/**/*`,
  `!${PATH_TO_SOURCE}**/README.md`,
];
let isDevelopment = true;

export function processMarkup () {
  return src(`${PATH_TO_SOURCE}**/*.html`)
    .pipe(nunjucksCompile())
    .pipe(htmlmin({ collapseWhitespace: !isDevelopment }))
    .pipe(dest(PATH_TO_DIST))
    .pipe(server.stream());
}

export async function compilePug() {
  const { sections } = await import(`${PATH_TO_DIST}data/sections.js`);
  const { contacts } = await import(`${PATH_TO_DIST}data/contacts.js`);
  const { skills } = await import(`${PATH_TO_DIST}data/skills.js`);
  const { work } = await import(`${PATH_TO_DIST}data/work.js`);
  const { projects, projectType, stackName } = await import(`${PATH_TO_DIST}data/projects.js`);
  const { courses, practices } = await import(`${PATH_TO_DIST}data/learning.js`);
  const { sideSkills, softSkills } = await import(`${PATH_TO_DIST}data/additions.js`);

  return src(`${PATH_TO_SOURCE}pug/index.pug`)
    .pipe(pug({
      pretty: true,
      locals: {
        sections,
        contacts,
        skills,
        work,
        projects,
        projectType,
        stackName,
        courses,
        practices,
        sideSkills,
        softSkills,
      },
    }))
    .pipe(dest(PATH_TO_DIST));
}

export function lintBem () {
  return src(`${PATH_TO_SOURCE}*.html`)
    .pipe(bemlinter());
}

export function processStyles () {
  return src(`${PATH_TO_SOURCE}styles/*.scss`, { sourcemaps: isDevelopment })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      postUrl({ assetsPath: '../' }),
      autoprefixer(),
      cssnano()
    ]))
    .pipe(dest(`${PATH_TO_DIST}styles`, { sourcemaps: isDevelopment }))
    .pipe(server.stream());
}

export function processScripts () {
  const gulpEsbuild = createGulpEsbuild({ incremental: isDevelopment });

  return src(`${PATH_TO_SOURCE}scripts/*.{js,ts}`)
    .pipe(gulpEsbuild({
      tsconfig: 'tsconfig.json',
      loader: { '.ts': 'ts' },
      bundle: true,
      format: 'esm',
      // splitting: true,
      platform: 'browser',
      minify: !isDevelopment,
      sourcemap: isDevelopment,
      target: browserslistToEsbuild(),
    }))
    .pipe(dest(`${PATH_TO_DIST}scripts`))
    .pipe(server.stream());
}

export function processData () {
  const gulpEsbuild = createGulpEsbuild({ incremental: isDevelopment });

  return src(`${PATH_TO_SOURCE}data/*.{js,ts}`)
    .pipe(gulpEsbuild({
      tsconfig: 'tsconfig.json',
      loader: { '.ts': 'ts' },
      bundle: true,
      format: 'esm',
      // splitting: true,
      platform: 'browser',
      minify: !isDevelopment,
      sourcemap: isDevelopment,
      target: browserslistToEsbuild(),
    }))
    .pipe(dest(`${PATH_TO_DIST}data`))
    .pipe(server.stream());
}

export function optimizeRaster () {
  const RAW_DENSITY = 2;
  const TARGET_FORMATS = [undefined, 'webp']; // undefined — initial format: jpg or png

  function createOptionsFormat() {
    const formats = [];

    for (const format of TARGET_FORMATS) {
      for (let density = RAW_DENSITY; density > 0; density--) {
        formats.push(
          {
            format,
            rename: { suffix: `@${density}x` },
            width: ({ width }) => Math.ceil(width * density / RAW_DENSITY),
            jpegOptions: { progressive: true },
          },
        );
      }
    }

    return { formats };
  }

  return src(`${PATH_TO_RAW}images/**/*.{png,jpg,jpeg}`)
    .pipe(sharp(createOptionsFormat()))
    .pipe(dest(`${PATH_TO_SOURCE}images`));
}

export function optimizeVector () {
  return src([`${PATH_TO_RAW}**/*.svg`])
    .pipe(svgo())
    .pipe(dest(PATH_TO_SOURCE));
}

export function createStack () {
  return src(`${PATH_TO_SOURCE}images/icons/**/*.svg`)
    .pipe(stacksvg())
    .pipe(dest(`${PATH_TO_DIST}images/icons`));
}

export function copyStatic () {
  return src(PATHS_TO_STATIC, { base: PATH_TO_SOURCE })
    .pipe(dest(PATH_TO_DIST));
}

export function startServer () {
  const serveStatic = PATHS_TO_STATIC
    .filter((path) => path.startsWith('!') === false)
    .map((path) => {
      const dir = path.replace(/(\/\*\*\/.*$)|\/$/, '');
      const route = dir.replace(PATH_TO_SOURCE, '/');

      return { route, dir };
    });

  server.init({
    server: {
      baseDir: PATH_TO_DIST
    },
    serveStatic,
    cors: true,
    notify: false,
    ui: false,
  }, (err, bs) => {
    bs.addMiddleware('*', (req, res) => {
      res.write(readFileSync(`${PATH_TO_DIST}404.html`));
      res.end();
    });
  });

  watch(`${PATH_TO_SOURCE}pug/**/*.pug`, compilePug);
  watch(`${PATH_TO_SOURCE}**/*.{html,njk}`, series(processMarkup));
  watch(`${PATH_TO_SOURCE}styles/**/*.scss`, series(processStyles));
  watch(`${PATH_TO_SOURCE}data/**/*.{js,ts}`, series(processData));
  watch(`${PATH_TO_SOURCE}scripts/**/*.{js,ts}`, series(processScripts));
  watch(`${PATH_TO_SOURCE}images/icons/**/*.svg`, series(createStack, reloadServer));
  watch(PATHS_TO_STATIC, series(reloadServer));
}

function reloadServer (done) {
  server.reload();
  done();
}

export function removeBuild (done) {
  rmSync(PATH_TO_DIST, {
    force: true,
    recursive: true,
  });
  done();
}

export function buildProd (done) {
  isDevelopment = false;
  series(
    removeBuild,
    processData,
    parallel(
      compilePug,
      processScripts,
      processMarkup,
      processStyles,
      createStack,
      copyStatic,
    ),
  )(done);
}

export function runDev (done) {
  series(
    removeBuild,
    processData,
    parallel(
      compilePug,
      processScripts,
      processMarkup,
      processStyles,
      createStack,
    ),
    startServer,
  )(done);
}
