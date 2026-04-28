# Website

This is the repository for my personal website [codrod.dev](https://codrod.dev). The site is statically generated using [11ty](https://www.11ty.dev/) and hosted on [Github Pages](https://docs.github.com/en/pages). [Webpack](https://webpack.js.org/) is used for bundling JS and CSS. [PostCSS](https://postcss.org/) is used to polyfill and auto-prefix CSS for browser compatibility. [Babel](https://babeljs.io/) is used to transpile JS for browser compatibility. [Bootstrap](https://getbootstrap.com/) is the front-end framework. See "/.browserslistrc" for more information about supported browsers.

## Getting Started

Follow the instructions below to setup the repository for development.

### Dependencies

This project uses Node.js which needs to be installed first but all other dependencies will be installed by NPM.

* Node.js

### Building

1. "git clone https://github.com/codrod/website"
2. "cd website"
3. "npm install"
4. "npm start"

### Publishing

Changes are automatically published to Github Pages when pushed to the main branch.

### Scripts

These are the NPM scripts defined for the repository.

1. "npm start"
    * Starts the website in PROD mode at http://localhost:8080. Use this to test before publishing. Hot loading is NOT enabled.
2. "npm run dev"
    * Starts the website in DEV mode at http://loocalhost:8080. Use this for development. Hot loading is enabled.
3. "npm run build"
    * Builds the website using PROD configs. Build artifacts are stored in "/dist". This is the script used to generate build artifacts when publishing.
4. "npm run clean"
    * Deletes the "/dist" folder

## Copyright

© 2026 Cody Rodgers
