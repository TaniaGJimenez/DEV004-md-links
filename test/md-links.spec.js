import mdLinks from '../index.js';

describe('mdLinks', () => {
  it("mdLinks prueba que la ruta existe sin options", () => {
    const path = './Pruebas';
    const options = undefined;
    expect(mdLinks(path, options)).toBe(true);
});

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