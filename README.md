# Project Template: Node.js Scripting

*Part of the Project Template series by Adam Kelsall.*  
*For a quick overview, keep reading. For more detailed info and configuration steps,
[read the wiki](https://github.com/adamkelsall/boilerplate-nodejs/wiki).*

## TL;DR Docs

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
  - *Make it your own:*
    - Change project details in `package.json`.
    - Remove/replace `README.md`.
    - Write code in `src/` directory.
      - If `src/example.js` is removed, update `start` script in `package.json`.
- *After writing code:*
  - `npm run build` to compile code in `src/` to `dist/`.
  - `npm start`

## License

The MIT License (MIT)

Copyright (c) 2016 Adam Kelsall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
