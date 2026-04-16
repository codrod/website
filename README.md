# Website

This is the repository for my personal website [codrod.dev](https://codrod.dev). The site is statically generated using [11ty](https://www.11ty.dev/) and hosted on [Github Pages](https://docs.github.com/en/pages). [Webpack](https://webpack.js.org/) is used for bundling JS and CSS. [PostCSS](https://postcss.org/) is used to polyfill and auto-prefix CSS for browser compatibility. [Babel](https://babeljs.io/) is used to transpile JS for browser compatibility. [Bootstrap](https://getbootstrap.com/) is the front-end framework. See "/.browserslistrc" for more information about support browsers.

## Development Environment Setup

Follow the directions below for instructions on how to setup the repo for development work.

### Dependencies

This project uses Node.js which needs to be installed first but all other dependencies will be installed by NPM.

* Node.js
* NPM
    * This should be installed with Node.js but it may need to be installed separately

### Building

1. "git clone https://github.com/codrod/website"
2. "cd website"
3. "npm install"
4. "npm start"

### Publishing

Changes are automatically published to Github Pages when pushed to the main branch.

### NPM Commands

1. "npm start"
    * Starts the website in PROD mode at http://localhost:8080. Use this to test before publishing. Hot loading is NOT enabled.
2. "npm run dev"
    * Starts the website in DEV mode at http://loocalhost:8080. Use this for development. Hot loading is enabled.
3. "npm run build"
    * Builds the website using PROD configs. Build artifacts are stored in "/dist". These are the artifacts which are published to Github Pages.
4. "npm run clean"
    * Deletes the "dist/" folder

## Copyright

© 2026 Cody Rodgers
