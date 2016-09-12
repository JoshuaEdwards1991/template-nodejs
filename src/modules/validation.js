import errorHandler from './errorHandler';
import ordinal from 'ordinal-number-suffix';

export function validateParamArray(paramName, param, validParams) {
  try {
    if (!Array.isArray(param)) throw new Error(`${paramName} must be an array.`);

    param.forEach((object, index) => {
      const position = ordinal(index + 1);
      if (typeof object !== 'object') throw new Error(`${position} ${paramName} is not an object.`);

      for (const validParam of validParams) {
        const { name, required, validTypes } = validParam;
        const value = object[name];
        const type = typeof value;

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

  } catch (err) {
    errorHandler(`validating the "${paramName}" parameter`, err);
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

  validateParamArray('files', files, validFileParams);
}
