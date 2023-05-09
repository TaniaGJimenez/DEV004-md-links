import fs from 'fs';
import path from 'path';
//la ruta es valida o no es valida
export const existingPath = (path) => fs.existsSync(path);
// console.log(existingPath('./Pruebas'),existingPath('./ejemplo'));

//la ruta es absoluta o es relativa
export const absPath = (pathUsed) => path.isAbsolute(pathUsed);
// console.log(absPath('./Pruebas'));

//Convertir la ruta absoluta a ruta relativa
export const transformPath = (converted) => path.resolve(converted);
// console.log(transformPath('./Pruebas'));
