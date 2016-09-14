import { expect } from 'chai';
import { validateParamArray } from '../modules/validation';

describe('validation', () => {
  describe('validateParamArray', () => {
    const paramName = 'objects';

    describe('structure', () => {
      const validParams = [];

      it('is invalid if not an array', () => {
        expect(() => validateParamArray(paramName, validParams, 'isNotArray'))
          .to.throw('objects must be an array.');
      });

      it('is invalid if not an array of objects', () => {
        expect(() => validateParamArray(paramName, validParams, [false]))
          .to.throw('objects is not an object.');
      });
    });

    describe('numbering', () => {
      const validParams = [];

      it('mentions the array position if an array object is invalid', () => {
        expect(() => validateParamArray(paramName, validParams, [false, {}])).to.throw('1st');
        expect(() => validateParamArray(paramName, validParams, [{}, false])).to.throw('2nd');
      });
    });

    describe('required', () => {
      const definitions = {
        optional: [{ name: 'example', required: false, validTypes: ['string'] }],
        required: [{ name: 'example', required: true, validTypes: ['string'] }],
      };
      const params = {
        missing: [{}],
        present: [{ example: 'string' }],
      };

      it('is valid if optional field is present', () => {
        expect(validateParamArray(paramName, definitions.optional, params.present))
          .to.be.undefined;
      });

      it('is valid if optional field is missing', () => {
        expect(validateParamArray(paramName, definitions.optional, params.missing))
          .to.be.undefined;
      });

      it('is valid if required field is present', () => {
        expect(validateParamArray(paramName, definitions.required, params.present))
          .to.be.undefined;
      });

      it('is invalid if required field is missing', () => {
        expect(() => validateParamArray(paramName, definitions.required, params.missing))
          .to.throw('1st objects is missing the required "example" parameter.');
      });
    });

    describe('type', () => {
      it('is valid if matching the single validType', () => {
        expect(validateParamArray(
          paramName,
          [{ name: 'string', validTypes: ['string'] }],
          [{ string: 'string' }]
        )).to.be.undefined;
      });

      it('is valid if one of multiple validTypes', () => {
        expect(validateParamArray(
          paramName,
          [{ name: 'numberOrString', validTypes: ['number', 'string'] }],
          [{ numberOrString: 'string' }]
        )).to.be.undefined;
      });

      it('is valid if an array and validTypes includes "array" but not "object"', () => {
        expect(validateParamArray(
          paramName,
          [{ name: 'array', validTypes: ['array'] }],
          [{ array: [] }]
        )).to.be.undefined;
      });

      it('is invalid if not included in validTypes', () => {
        expect(() => validateParamArray(
          paramName,
          [{ name: 'number', validTypes: ['number'] }],
          [{ number: 'string' }]
        )).to.throw('1st objects parameter "number" is a string, can only be: number.');
      });
    });
  });
});
