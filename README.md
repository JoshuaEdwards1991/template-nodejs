# Project Template: Node.js Scripting

*Part of the Project Template series by Adam Kelsall.*  
*For a quick overview, keep reading. For more detailed info and configuration steps,
[read the wiki](https://github.com/adamkelsall/boilerplate-nodejs/wiki).*

### What is it?

This template is for general Node.js scripting, designed to be useful for projects from single file
scripts right up to complex web services.

### What comes included?

- [npm](https://www.npmjs.com/): Node.js package manager that installs dependencies and runs
  scripts.
- [Babel](https://babeljs.io/): Write source code in ES6/7 and compile it to run on most Node.js
  versions.
- [ESLint](http://eslint.org/): Lints source code to warn of serious errors and stylistic issues.
- [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks): Source code with
  ESLint linting errors cannot be committed.

### How do I get started?

- *First time install:*
  - Clone this repo.
  - `npm install` all npm dependencies. Also installs Git Hooks.
- *If changing the project's entry point from `src/index.js`:*
  - Update `start` script in `package.json`.
- *After writing code:*
  - `npm run build` to compile code in `src/` to `dist/`.
  - `npm start`
