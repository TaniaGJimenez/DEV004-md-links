import fs from 'fs';
import path from 'path';

//? la ruta es valida?
export const existingPath = (path) => fs.existsSync(path);
// console.log("Ruta Valida?", existingPath('./Pruebas'), existingPath('./rutaFalsa123'));

//? la ruta es absoluta?
export const absPath = (pathUsed) => path.isAbsolute(pathUsed);
// console.log("Ruta es absoluta?", absPath('./Pruebas'), absPath('ejemplo.md')
// );

//? Convertir de ruta relativa
export const transformPath = (converted) => path.resolve(converted);
// console.log(('./Pruebas'), transformPath('ejemplo.md'));

//TODO:
//? La ruta es un directorio?
export const isThisADirectory = (path) => fs.statSync(path).isDirectory();
// console.log("La ruta es un directorio", isThisADirectory('./Pruebas'), isThisADirectory('ejemplo.md'));

//TODO:
//? Es un archivo .md
export const isThisAMDFile = (pathUsed) => path.extname(pathUsed) === ".md";
// console.log("Es un archivo .md", isThisAMDFile('./Pruebas'), isThisAMDFile('ejemplo.md'));