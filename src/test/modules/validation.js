import { validateName, validateVersion } from '../../modules/validation';
import { expect } from 'chai';

describe('Validation', () => {
  describe('Name', () => {
    const testCases = [
      {
        examples: [''],
        name: 'invalid if empty',
        response: 'Name length must be greater than zero.',
      },
      {
        examples: ['EXAMPLE', 'Example', 'exAMple', 'examplE'],
        name: 'invalid with capital letters',
        response: 'Name can no longer contain capital letters.',
      },
      {
        examples: [' ', ' example', 'example '],
        name: 'invalid with leading/trailing spaces',
        response: 'Name cannot contain leading or trailing spaces.',
      },
      {
        examples: ['exam ple', 'e x a m p l e'],
        name: 'invalid with spaces',
        response: 'Name can only contain URL-friendly characters.',
      },
      {
        examples: ['_example'],
        name: 'invalid with leading underscore',
        response: 'Name cannot start with an underscore.',
      },
      {
        examples: ['£', '$', '&', '#', '+'],
        name: 'invalid with common special characters',
        response: 'Name can only contain URL-friendly characters.',
      },
      {
        examples: ['example', 'exam-ple', 'exam_ple', 'example123', '123'],
        name: 'valid with word characters and/or underscores',
        response: true,
      },
    ];

    for (const testCase of testCases) {
      it(`should be ${testCase.name}`, () => {
        for (const example of testCase.examples) {
          expect(validateName(example)).to.equal(testCase.response);
        }
      });
    }
  });

  describe('Version', () => {
    const testCases = [
      {
        examples: ['example', '1', '1.2', '01.2.3', 'a.b.c'],
        name: 'invalid with non-semvers',
        response: 'Invalid semantic version (semver).',
      },
      {
        examples: ['1.2.3', '1.22.3', '0.0.1', '1.0.0-alpha.0', '1.0.0-beta.3'],
        name: 'valid with semvers',
        response: true,
      },
    ];

    for (const testCase of testCases) {
      it(`should be a ${testCase.name}`, () => {
        for (const example of testCase.examples) {
          expect(validateVersion(example)).to.equal(testCase.response);
        }
      });
    }
  });
});
