import { expect } from 'chai';
import { getDirectoriesToMake } from '../modules/output/directories';

describe('directories', () => {
  describe('getDirectoriesToMake', () => {
    const project = 'project';
    const exampleDirectories = getDirectoriesToMake(project, './one/two/three/four.txt');

    describe('validation', () => {
      it('errors on paths above the current directory', () => {
        const invalidPaths = ['..', '../example', './example/../..', 'example/../../foo'];

        for (const invalidPath of invalidPaths) {
          expect(() => getDirectoriesToMake(project, invalidPath)).to.throw(
            'file relative "path" parameter must be on or below the current directory.'
          );
        }
      });

      it('disregards leading current directory "."', () => {
        const withCurrent = getDirectoriesToMake(project, './one/two.txt');
        const withoutCurrent = getDirectoriesToMake(project, 'one/two.txt');

        expect(withCurrent).to.deep.equal(withoutCurrent);
      });
    });

    describe('output', () => {
      it('returns an array of directory paths', () => {
        expect(exampleDirectories).to.be.a('array');
        expect(exampleDirectories).to.have.lengthOf(4);

        for (const directory of exampleDirectories) {
          expect(directory).to.be.a('string');
        }
      });

      it('begins with the project directory', () => {
        expect(exampleDirectories[0]).to.equal(project);
      });

      it('omits the file/directory at the end of the path', () => {
        const lastPath = exampleDirectories[exampleDirectories.length - 1];

        expect(lastPath).to.not.include('four');
      });

      it('each path builds one directory on the previous path', () => {
        exampleDirectories.reduce((prev, cur) => {
          expect(cur).to.include(prev);
          return cur;
        });
      });
    });
  });
});
