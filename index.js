import { default as chalk } from 'chalk';
import {
  absPath,
  existingPath,
  transformPath,
  isThisADirectory,
  isThisAMDFile,
  listDirectoryFiles,
  analyzeMdFilesArray,
  getStatsResult,
  getHttpResponse,
  getResultValidateStats
} from "./api.js";

//!ESTA ES LA QUE SIRVE (DEMO)
// export const mdLinks = (path, options) => {
//   return new Promise((resolve) => {
//     if (!existingPath(path)) {
//       console.log("La ruta no existe");
//       resolve();
//       return;
//     }

//     console.log("Ruta válida:", path);

//     let resolvedPath = path;

//     if (!absPath(path)) {
//       resolvedPath = transformPath(path);
//       // console.log("Ruta convertida a absoluta:", resolvedPath);
//     }

//     const mdFiles = [];

//     if (isThisADirectory(resolvedPath)) {
//       const files = listDirectoryFiles(resolvedPath);
//       mdFiles.push(...files.filter((file) => isThisAMDFile(file)));

//       if (mdFiles.length === 0) {
//         console.log("No se encontraron archivos .md en el directorio.");
//       } else {
//         // console.log("Archivos .md encontrados:", mdFiles);
//       }
//     } else {
//       if (isThisAMDFile(resolvedPath)) {
//         mdFiles.push(resolvedPath);
//         console.log("Es un archivo .md");
//       } else {
//         console.log("No es un archivo .md");
//       }
//     }

//     // Aquí puedes hacer lo que necesites con el array de archivos .md (mdFiles)
//     if (options.validate === true && options.stats === false) {
//       const linkPromises = mdFiles.map((filePath) => {
//         return extractLinksFromMDFile(filePath)
//           .then((links) => {
//             return getHttpResponse(links);
//           })
//           .then((result) => {
//             console.log(result);
//             return result;
//           })
//           .catch((error) => {
//             console.error(error);
//             return [];
//           });
//       });

//       Promise.all(linkPromises)
//         .then(() => {
//           resolve(mdFiles);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     } else if (options.validate === false && options.stats === true) {
//       const linkPromises = mdFiles.map((filePath) => {
//         return extractLinksFromMDFile(filePath)
//           .then((links) => {
//             return links; // Retornar los links sin procesar
//           })
//           .catch((error) => {
//             console.error(error);
//             return []; // En caso de error, retornar un array vacío
//           });
//       });

//       Promise.all(linkPromises)
//         .then((results) => {
//           const allLinks = results.flat(); // Concatenar los links en un solo array
//           const statsResult = getStatsResult(allLinks);
//           console.log(statsResult);
//           return statsResult;
//         })
//         .then(() => {
//           resolve(mdFiles);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     } else if (options.validate === true && options.stats === true) {
//       const linkPromises = mdFiles.map((filePath) => {
//         return extractLinksFromMDFile(filePath)
//           .then((links) => {
//             return getHttpResponse(links).then((response) => {
//               return getResultValidateStats(response);
//             });
//           })
//           .then((result) => {
//             console.log(result);
//             return result;
//           })
//           .catch((error) => {
//             console.error(error);
//             return [];
//           });
//       });

//       Promise.all(linkPromises)
//         .then(() => {
//           resolve(mdFiles);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     } else {
//       const linkPromises = mdFiles.map((filePath) => {
//         return extractLinksFromMDFile(filePath)
//           .then((links) => {
//             console.log(links);
//             return links;
//           })
//           .catch((error) => {
//             console.error(error);
//             return [];
//           });
//       });

//       Promise.all(linkPromises)
//         .then(() => {
//           resolve(mdFiles);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   });
// };

//! ESTA ES LA MODIFICACION
export const mdLinks = (path, options) => {
  return new Promise((resolve) => {
    let mdFilesArray = [];

    if (existingPath(path)) {
      console.log("Ruta válida:", path);
      const resolvedPath = absPath(path) ? path : transformPath(path);
      
      if (isThisADirectory(resolvedPath)) {
        mdFilesArray = listDirectoryFiles(resolvedPath).filter(isThisAMDFile);
        if (mdFilesArray.length === 0) {
          console.log("No se encontraron archivos .md en el directorio.");
        }
      } else {
        if (isThisAMDFile(resolvedPath)) {
          mdFilesArray.push(resolvedPath);
          console.log("Es un archivo .md");
        } else {
          console.log("No es un archivo .md");
        }
      }

      if (options.validate === true && options.stats === true) {
        analyzeMdFilesArray(mdFilesArray)
          .then((result) => {
            getHttpResponse(result)
              .then((result) => {
                const resultValidateAndStats = getResultValidateStats(result);
                console.log(chalk.bgGreen.bold("Ingresando --validate y --stats"));
                console.log(resultValidateAndStats);
                resolve(resultValidateAndStats);
              });
          });

      } else if (options.validate === true && options.stats === false) {
        analyzeMdFilesArray(mdFilesArray)
          .then((result) => {
            getHttpResponse(result)
              .then((result) => {
                const validateLink = result;
                resolve(validateLink);
                console.log(chalk.bgGreen.bold("Ingresando --validate"));
                console.log(validateLink);
              });
          });

      } else if (options.stats === true && options.validate === false) {
        analyzeMdFilesArray(mdFilesArray)
          .then((result) => {
            const valueStats = getStatsResult(result);
            console.log(chalk.bgGreen.bold("Ingresando --stats"));
            console.log(valueStats);
            resolve(valueStats);
          });

      } else {
        analyzeMdFilesArray(mdFilesArray)
          .then((result) => {
            const noOptions = result;
            resolve(noOptions);
            console.log(chalk.bgGreen.bold("Sin --validate, sin --stats"));
            console.log(noOptions);
          });
      }
    } else {
      console.log(chalk.bgRed.bold("La ruta no existe"));
    }
  });
};

// mdLinks("./Pruebas", { validate: true, stats: false })
//   .then(() => {
//   })
//   .catch((error) => {
//     console.error('La función mdLinks ha encontrado un error:', error);
//   });

// mdLinks("./Pruebas", { validate: false, stats: true })
//   .then(() => {
//   })
//   .catch((error) => {
//     console.error('La función mdLinks ha encontrado un error:', error);
//   });

//   mdLinks("./Pruebas", { validate: true, stats: true })
//   .then(() => {
//   })
//   .catch((error) => {
//     console.error('La función mdLinks ha encontrado un error:', error);
//   });  

