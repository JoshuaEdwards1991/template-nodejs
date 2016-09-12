# Templater

*Name WIP*

### `files` parameter

Once all questions have been answered, this list of files are written to the project directory.
`files` is an array of objects, each able to have the following parameters:

- **filter**: `Function(answers)`. Used to modify the `answers` object specifically for this file
  before applying a template or writing the file. Useful for transforming answers or building data
  structures.
- **path**: required `String`. Where this file will be written to, relative to the top level of the
  new project directory.
- **template**: `String`. Path to a [handlebars](http://handlebarsjs.com/) template. If specified,
  the `answers` object will be applied to the template before the file is written. If omitted, this
  file will be `answers` as JSON.
- **when**: `Boolean` or `Function(answers)`. If provided, only writes this file if evaluated to
  `true`. Use to conditionally skip files based on `answers`.
