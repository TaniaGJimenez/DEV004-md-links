import { absPath, existingPath, transformPath } from "./api.js";
// export const mdLinks = (path, options) => {
// const pathExists = existingPath(path);
//     if(pathExists){
//         const isPathAbsolute = absPath(path);
//         console.log(isPathAbsolute, typeof isPathAbsolute)
//         if (isPathAbsolute) {
//             console.log('La ruta es absoluta');
//         } else {
//             console.log('La ruta es relativa');
//         }
//     } else {
//         console.log('La ruta no existe')
//     }
// }
import fs from 'fs';
import path from 'path';
export const mdLinks = (path, options) => {
    return new Promise((resolve, reject) => {
      const pathExists = existingPath(path); 
      if (pathExists) {
        const isPathAbsolute = absPath(path);
        if (isPathAbsolute) {
          console.log(`La ruta es absoluta: ${path}`);
          resolve(path);
        } else {
          const relativePath = transformPath(path);
          console.log(`La ruta es absoluta. Ruta relativa: ${relativePath}`);
          resolve(relativePath);
        }
      } else {
        reject(`La ruta ${path} no existe`);
      }
    }).catch((error) => {
        console.error(error);
    });
  };

// console.log (typeof mdLinks);//Terminal
mdLinks('./Pruebas');
mdLinks('ejemplo.md');
mdLinks('./rutaFalsa123');