import {mdLinks} from '../index.js';

describe('mdLinks', () => {
  it('Entrega una ruta relativa cuando se ingresa una ruta absoluta valida', () => {
    const relativePath = 'ejemplo.md';
    const expectedRelativePath = 'C:\\Users\\Tania G Jimènez\\Documents\\Laboratoria\\Proyecto04\\DEV004-md-links\\ejemplo.md';
    return mdLinks(relativePath)
      .then((relativePath) => {
        expect(relativePath).toBe(expectedRelativePath);
      });
  });
it('Si la ruta es invalida arroja un mensaje de error', () => {
  const invalidPath = '/ruta/Falsa/123';
  return mdLinks(invalidPath)
    .catch((error) => {
      expect(error).toBe(`La ruta ${invalidPath} no existe`);
    });
});
});

// describe('mdLinks', () => {

//   it('mdLinks procesa un solo archivo con 3 links', () => {
//     const ruta = 'ejemplo.md';
//     return mdLinks (ruta, {validate:false})
//     .then(
//       (array)=>{
//         expect(array).toEqual([
//           {
//             href:'https://es.wikipedia.org/wiki/Markdown',
//             text:'Markdown',
//             file:'ejemplo.md',
//           },
//           {
//             href:'https://nodejs.org/',
//             text:'Node.js',
//             file:'ejemplo.md',
//           },
//           {
//             href:'https://developers.google.com/v8/',
//             text:'motor de JavaScript V8 de Chrome',
//             file:'ejemplo.md',
//           }
//         ])
//       }
//     );
//   });
// }); 