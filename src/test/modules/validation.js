import { expect } from 'chai';
import { validateName } from '../../modules/validation';

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
});
