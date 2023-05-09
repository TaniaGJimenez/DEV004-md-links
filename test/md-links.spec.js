import {mdLinks} from '../index.js';

describe('mdLinks', () => {
  it('should resolve with the absolute path when given a valid relative path', () => {
    const relativePath = 'ejemplo.md';
    const expectedRelativePath = 'C:\Users\Tania G Jimènez\Documents\Laboratoria\Proyecto04\DEV004-md-links\ejemplo.md';
    return mdLinks(relativePath)
      .then((relativePath) => {
        expect(relativePath).toBe(expectedRelativePath);
      });
  });
it('should reject with an error when given an invalid path', () => {
  const invalidPath = '/path/to/nowhere';
  return mdLinks(invalidPath)
    .catch((error) => {
      expect(error).toBe(`La ruta ${invalidPath} no existe`);
    });
});
});

describe('mdLinks', () => {
//   it("test_md_links_absolute_path", async () => {
//     const result = await mdLinks("/Users/user/Documents/test.md");
//     expect(result).toBe("/Users/user/Documents/test.md");
// });

  it('mdLinks procesa un solo archivo con 3 links', () => {
    const ruta = 'ejemplo.md';
    return mdLinks (ruta, {validate:false})
    .then(
      (array)=>{
        expect(array).toEqual([
          {
            href:'https://es.wikipedia.org/wiki/Markdown',
            text:'Markdown',
            file:'ejemplo.md',
          },
          {
            href:'https://nodejs.org/',
            text:'Node.js',
            file:'ejemplo.md',
          },
          {
            href:'https://developers.google.com/v8/',
            text:'motor de JavaScript V8 de Chrome',
            file:'ejemplo.md',
          }
        ])
      }
    );
  });
}); 