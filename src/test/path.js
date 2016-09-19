import chai from 'chai';
import chaiString from 'chai-string';
import sanitiseRelativePath from '../modules/output/path';

chai.use(chaiString);
const expect = chai.expect;

describe('path', () => {
  describe('sanitiseRelativePath', () => {
    const project = 'project';
    let examplePath;

    before(() => {
      examplePath = sanitiseRelativePath(project, './one/two/three/four.txt');
    });

    describe('validation', () => {
      it('errors on paths above the current directory', () => {
        const invalidPaths = ['..', '../example', './example/../..', 'example/../../foo'];

        for (const invalidPath of invalidPaths) {
          expect(() => sanitiseRelativePath(project, invalidPath)).to.throw(
            'file relative "path" parameter must be on or below the current directory.'
          );
        }
      });

      it('disregards leading current directory "."', () => {
        const withCurrent = sanitiseRelativePath(project, './one/two.txt');
        const withoutCurrent = sanitiseRelativePath(project, 'one/two.txt');

        expect(withCurrent).to.deep.equal(withoutCurrent);
      });
    });

    describe('output', () => {
      it('returns a string', () => {
        expect(examplePath).to.be.a('string');
      });

      it('begins with the project directory', () => {
        expect(examplePath).to.startWith(project);
      });
    });
  });
});
