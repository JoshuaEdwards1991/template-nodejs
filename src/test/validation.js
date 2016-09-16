import { validateObjectParams, validateParamArray } from '../modules/validation';
import { expect } from 'chai';

describe('validation', () => {
  describe('validateObjectParams', () => {
    const paramName = 'objects';

    describe('structure', () => {
      it('is invalid if not an object', () => {
        expect(() => validateObjectParams(paramName, [], false))
          .to.throw('objects is not an object.');
      });
    });

    describe('numbering', () => {
      const validParams = [];

      it('includes position ordinal in error message if provided', () => {
        expect(() => validateObjectParams(paramName, validParams, false, 0)).to.throw('1st');
        expect(() => validateObjectParams(paramName, validParams, false, 1)).to.throw('2nd');
        expect(() => validateObjectParams(paramName, validParams, false)).to.not.throw('1st');
      });
    });

    describe('required', () => {
      const definitions = {
        optional: [{ name: 'example', required: false, validTypes: ['string'] }],
        required: [{ name: 'example', required: true, validTypes: ['string'] }],
      };
      const index = 0;
      const params = {
        missing: {},
        present: { example: 'string' },
      };

      it('is valid if optional field is present', () => {
        expect(validateObjectParams(paramName, definitions.optional, params.present, index))
          .to.be.undefined;
      });

      it('is valid if optional field is missing', () => {
        expect(validateObjectParams(paramName, definitions.optional, params.missing, index))
          .to.be.undefined;
      });

      it('is valid if required field is present', () => {
        expect(validateObjectParams(paramName, definitions.required, params.present, index))
          .to.be.undefined;
      });

      it('is invalid if required field is missing', () => {
        expect(() => validateObjectParams(paramName, definitions.required, params.missing, index))
          .to.throw('1st objects is missing the required "example" parameter.');
      });
    });

    describe('type', () => {
      it('is valid if matching the single validType', () => {
        expect(validateObjectParams(
          paramName,
          [{ name: 'string', validTypes: ['string'] }],
          { string: 'string' },
          0
        )).to.be.undefined;
      });

      it('is valid if one of multiple validTypes', () => {
        expect(validateObjectParams(
          paramName,
          [{ name: 'numberOrString', validTypes: ['number', 'string'] }],
          { numberOrString: 'string' },
          0
        )).to.be.undefined;
      });

      it('is valid if an array and validTypes includes "array" but not "object"', () => {
        expect(validateObjectParams(
          paramName,
          [{ name: 'array', validTypes: ['array'] }],
          { array: [] },
          0
        )).to.be.undefined;
      });

      it('is invalid if not included in validTypes', () => {
        expect(() => validateObjectParams(
          paramName,
          [{ name: 'number', validTypes: ['number'] }],
          { number: 'string' },
          0
        )).to.throw('objects parameter "number" is a string, can only be: number.');
      });
    });

    describe('value', () => {
      it('is valid if matching the single validValue', () => {
        expect(validateObjectParams(
          paramName,
          [{ name: 'string', validTypes: ['string'], validValues: ['example'] }],
          { string: 'example' },
          0
        )).to.be.undefined;
      });

      it('is valid if matching one of multiple validValues', () => {
        expect(validateObjectParams(
          paramName,
          [{ name: 'string', validTypes: ['string'], validValues: ['foo', 'bar'] }],
          { string: 'bar' },
          0
        )).to.be.undefined;
      });

      it('is invalid if not included in validValues', () => {
        expect(() => validateObjectParams(
          paramName,
          [{ name: 'string', validTypes: ['string'], validValues: ['foo', 'bar'] }],
          { string: 'notAValidValue' },
          0
        )).throw('objects parameter "string" can only be: foo, bar.');
      });
    });
  });

  describe('validateParamArray', () => {
    describe('structure', () => {
      it('is invalid if not an array', () => {
        expect(() => validateParamArray('objects', [], 'isNotArray'))
          .to.throw('objects must be an array.');
      });
    });
  });
});
