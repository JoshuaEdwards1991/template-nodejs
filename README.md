# Project Template: Node.js Scripting

*Part of the Project Template series by Adam Kelsall.*

## TL;DR Docs

*Full documentation in the [wiki](https://github.com/adamkelsall/boilerplate-nodejs/wiki).*

### What is it?

This template is for general Node.js scripting, designed to be useful for projects from single file
scripts right up to complex web services.

### What comes included?

- [npm](https://www.npmjs.com/): Node.js package manager that installs dependencies and runs
  scripts.
- [Babel](https://babeljs.io/): Write source code in ES6/7 and compile it so it can be deployed on
  most Node.js versions.
- [ESLint](http://eslint.org/): Lints source code to warn of serious errors and stylistic issues.
  - Custom linting rules based on [ESLint](http://eslint.org/docs/rules/) &
    [Airbnb](https://github.com/airbnb/javascript).
- [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks): Source code with
  ESLint linting errors cannot be committed.
- [Mocha](https://mochajs.org/) & [Chai](http://chaijs.com/): Unit test suite and assertions for
  testing code.

### How do I get started?

- *First time install:*
  - Clone this repo.
  - `npm install` all npm dependencies. Also installs Git Hooks.
  - *Make it your own:*
    - Change project details in `package.json`.
    - Remove/replace `README.md`.
    - Write code in `src/` directory.
      - If `src/example.js` is removed, update `start` script in `package.json`.
- *After writing code:*
  - `npm run test` to lint and test source code.
  - `npm run build` to compile code in `src/` to `dist/`.
  - `npm start`
