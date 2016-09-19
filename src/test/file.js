import chai from 'chai';
import chaiString from 'chai-string';
import { createFile } from '../modules/output/file';
import fileData from './stubs/file/data';
import fs from 'fs';
import path from 'path';

chai.use(chaiString);
const expect = chai.expect;

const readFileStub = function readFileStub(stub) {
  return new Promise((resolve, reject) => {
    const stubPath = path.join('./src/test/stubs/file/', stub);

    fs.readFile(stubPath, (err, data) => {
      if (err) reject(err);
      else resolve(data.toString());
    });
  });
};

describe('file', () => {
  describe('createFile', () => {
    describe('json', () => {
      let actualJSON;
      let expectedJSON;

      before(async function getJSON() {
        actualJSON = createFile(fileData, null);
        expectedJSON = await readFileStub('output.json');
      });

      it('outputs a string', () => {
        expect(actualJSON).to.be.a('string');
      });

      it('is a valid JSON string', () => {
        expect(JSON.parse(actualJSON)).to.not.throw;
      });

      it('is pretty formatted', () => {
        expect(actualJSON).to.contain('\n');
        expect(actualJSON).to.contain('\n  ');
        expect(actualJSON).to.endWith('\n');
      });

      it('matches the expected JSON', () => {
        expect(actualJSON).to.equal(expectedJSON);
      });

      it('evaluates backwards correctly', () => {
        expect(JSON.parse(actualJSON)).to.deep.equal(fileData);
      });
    });

    describe('handlebars template', () => {
      let actualHTML;
      let expectedHTML;
      let template;

      before(async function getHTML() {
        expectedHTML = await readFileStub('output.html');
        template = await readFileStub('template.html');
        actualHTML = createFile(fileData, template);
      });

      it('outputs a string', () => {
        expect(actualHTML).to.be.a('string');
      });

      it('looks like HTML', () => {
        expect(actualHTML).to.startWith('<section');
        expect(actualHTML).to.contain('<h1>');
        expect(actualHTML).to.endWith('</section>\n');
      });

      it('contains data values', () => {
        expect(actualHTML).to.contain(fileData.forename);
        expect(actualHTML).to.contain(fileData.surname);
        expect(actualHTML).to.contain(fileData.address.street);
        expect(actualHTML).to.contain(fileData.address.postcode);
      });

      it('matches the expected HTML', () => {
        expect(actualHTML).to.equal(expectedHTML);
      });
    });
  });
});
