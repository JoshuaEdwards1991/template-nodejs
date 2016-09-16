import errorHandler from './errorHandler';
import ordinal from 'ordinal-number-suffix';

export function validateObjectParams(paramName, validParams, object, index) {
  const position = index === undefined ? '' : `${ordinal(index + 1)} `;

  if (typeof object !== 'object') throw new Error(`${position}${paramName} is not an object.`);

  for (const validParam of validParams) {
    const { name, required, validTypes, validValues } = validParam;
    const value = object[name];

    let type = typeof value;
    if (type === 'object' && Array.isArray(value)) type = 'array';

    if (value === undefined && required) {
      throw new Error(`${position}${paramName} is missing the required "${name}" parameter.`);

    } else if (value !== undefined && !validTypes.includes(type)) {
      const typesList = validTypes.join(', ');
      throw new Error(
        `${position}${paramName} parameter "${name}" is a ${type}, can only be: ${typesList}.`
      );

    } else if (value !== undefined && validValues && !validValues.includes(value)) {
      const valuesList = validValues.join(', ');
      throw new Error(
        `${position}${paramName} parameter "${name}" can only be: ${valuesList}.`
      );
    }
  }
}

export function validateParamArray(paramName, validParams, param) {
  if (!Array.isArray(param)) throw new Error(`${paramName} must be an array.`);

  param.forEach((object, index) => {
    validateObjectParams(paramName, validParams, object, index);
  });
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
      validValues: [
        'checkbox', 'confirm', 'editor', 'expand', 'input', 'list', 'rawlist', 'password',
      ],
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
    validateParamArray('questions', validQuestionParams, questions);
  } catch (err) {
    errorHandler('validating the "questions" parameter', err);
  }
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
    validateParamArray('files', validFileParams, files);
  } catch (err) {
    errorHandler('validating the "files" parameter', err);
  }
}

export function validateOptions(options) {
  const validOptionsParams = [
    {
      name: 'project',
      required: true,
      validTypes: ['string'],
    },
  ];

  try {
    validateObjectParams('options', validOptionsParams, options);
  } catch (err) {
    errorHandler('validating the "options" parameter', err);
  }
}
