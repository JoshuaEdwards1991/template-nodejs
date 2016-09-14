import errorHandler from './errorHandler';
import ordinal from 'ordinal-number-suffix';

export function validateParamArray(paramName, param, validParams) {
  if (!Array.isArray(param)) throw new Error(`${paramName} must be an array.`);

  param.forEach((object, index) => {
    const position = ordinal(index + 1);
    if (typeof object !== 'object') throw new Error(`${position} ${paramName} is not an object.`);

    for (const validParam of validParams) {
      const { name, required, validTypes } = validParam;
      const value = object[name];
      let type = typeof value;

      if (type === 'object' && Array.isArray(value)) type = 'array';

      if (required && value === undefined) {
        throw new Error(`${position} ${paramName} is missing the required "${name}" parameter.`);

      } else if (value !== undefined && !validTypes.includes(type)) {
        const typesList = validTypes.join(', ');
        throw new Error(
          `${position} ${paramName} parameter "${name}" is a ${type}, can only be: ${typesList}`
        );
      }
    }
  });
}

export function validateFiles(files) {
  const validFileParams = [
    {
      name: 'filter',
      required: false,
      validTypes: ['function'],
    },
    {
      name: 'path',
      required: true,
      validTypes: ['string'],
    },
    {
      name: 'template',
      required: false,
      validTypes: ['string'],
    },
    {
      name: 'when',
      required: false,
      validTypes: ['boolean', 'function'],
    },
  ];

  try {
    validateParamArray('files', files, validFileParams);
  } catch (err) {
    errorHandler('validating the "files" parameter', err);
  }
}

export function validateQuestions(questions) {
  const validQuestionParams = [
    {
      name: 'choices',
      required: false,
      validTypes: ['array', 'function'],
    },
    {
      name: 'default',
      required: false,
      validTypes: ['array', 'function', 'number', 'string'],
    },
    {
      name: 'filter',
      required: false,
      validTypes: ['function'],
    },
    {
      name: 'message',
      required: true,
      validTypes: ['function', 'string'],
    },
    {
      name: 'name',
      required: true,
      validTypes: ['string'],
    },
    {
      name: 'type',
      required: false,
      validTypes: ['string'],
    },
    {
      name: 'validate',
      required: false,
      validTypes: ['function'],
    },

    {
      name: 'when',
      required: false,
      validTypes: ['boolean', 'function'],
    },
  ];

  try {
    validateParamArray('questions', questions, validQuestionParams);
  } catch (err) {
    errorHandler('validating the "questions" parameter', err);
  }
}
