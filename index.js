import { absPath, existingPath, transformPath, isThisADirectory, isThisAMDFile } from "./api.js";

// import { absPath, existingPath, transformPath } from "./api.js";
// // export const mdLinks = (path, options) => {
// // const pathExists = existingPath(path);
// //     if(pathExists){
// //         const isPathAbsolute = absPath(path);
// //         console.log(isPathAbsolute, typeof isPathAbsolute)
// //         if (isPathAbsolute) {
// //             console.log('La ruta es absoluta');
// //         } else {
// //             console.log('La ruta es relativa');
// //         }
// //     } else {
// //         console.log('La ruta no existe')
// //     }
// // }
// import fs from 'fs';
// import path from 'path';
// export const mdLinks = (path, options) => {
//     return new Promise((resolve, reject) => {
//       const pathExists = existingPath(path); 
//       if (pathExists) {
//         const isPathAbsolute = absPath(path);
//         if (isPathAbsolute) {
//           console.log('La ruta es absoluta');
//           resolve(path);
//         } else {
//           const relativePath = transformPath(path);
//           console.log('La ruta es absoluta.');
//           resolve(relativePath);
//         }
//       } else {
//         reject(`La ruta ${path} no existe`);
//       }
//     }).catch((error) => {
//         console.error(error);
//     });
//   };

  export const mdLinks = (path, options) => {
    return new Promise((resolve, reject) => {
      const pathExists = existingPath(path);
      if (pathExists) {
        const isPathAbsolute = absPath(path);
        if (isPathAbsolute) {
          console.log('La ruta es absoluta');
          resolve(path);
        } else {
          const relativePath = transformPath(path);
          console.log('La ruta es relativa.');
          resolve(relativePath);
        }
      } else {
        reject(`La ruta no existe`);
      }
    }).then((pathUsed) => {
      if (isThisADirectory(pathUsed)) {
        console.log('La ruta es un directorio.');
      } else if (isThisAMDFile(pathUsed)) {
        console.log('La ruta es un archivo .md');
      } else {
        console.log('La ruta no es un archivo .md ni un directorio.');
      }
    }).catch((error) => {
      console.error(error);
    });
  };
  

// console.log (typeof mdLinks);//Terminal
mdLinks('./Pruebas');
mdLinks('ejemplo.md');
mdLinks('./rutaFalsa123');