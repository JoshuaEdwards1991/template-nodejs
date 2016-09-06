import { validateLicense, validateName, validateVersion } from './validation';
import { applyDefaultFilters } from './filters';

const questions = [
  {
    default: 'nodejs',
    message: 'Project name:',
    name: 'name',
    type: 'input',
    validate: (answer) => validateName(answer),
  },
  {
    default: '0.1.0',
    message: 'Version:',
    name: 'version',
    type: 'input',
    validate: (answer) => validateVersion(answer),
  },
  {
    message: 'Description:',
    name: 'description',
    type: 'input',
  },
  {
    message: 'Git Repository:',
    name: 'repository',
    type: 'input',
  },
  {
    default: 'MIT',
    message: 'License:',
    name: 'license',
    type: 'input',
    validate: (answer) => validateLicense(answer),
  },
];

export default applyDefaultFilters(questions);
