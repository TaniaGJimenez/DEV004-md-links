import fs from "fs";
import path from "path";
import axios from "axios";

//? la ruta es valida?
export const existingPath = (path) => fs.existsSync(path);
// console.log("Ruta Valida?", existingPath('./Pruebas'), existingPath('./rutaFalsa123'));

//? la ruta es absoluta?
export const absPath = (pathUsed) => path.isAbsolute(pathUsed);
// console.log("Ruta es absoluta?", absPath('./Pruebas'), absPath('ejemplo.md')
// );

//? Convertir de ruta relativa
export const transformPath = (converted) => path.resolve(converted);
// console.log(transformPath('./Pruebas'), transformPath('ejemplo.md'));

//? La ruta es un directorio?
export const isThisADirectory = (path) => fs.statSync(path).isDirectory();
// console.log("La ruta es un directorio", isThisADirectory('./Pruebas'), isThisADirectory('ejemplo.md'));

//? Es un archivo .md
export const isThisAMDFile = (pathUsed) => path.extname(pathUsed) === ".md";
// console.log("Es un archivo .md", isThisAMDFile('./Pruebas'), isThisAMDFile('ejemplo.md'));

//? Lee el directorio
export const listDirectoryFiles = (directoryPath) => {
  const files = [];

  const readDirectory = (dirPath) => {
    const items = fs.readdirSync(dirPath);

    items.forEach((item) => {
      const itemPath = path.join(dirPath, item);
      const stat = fs.statSync(itemPath);

      if (stat.isDirectory()) {
        readDirectory(itemPath); // Llamada recursiva si es un directorio
      } else {
        files.push(itemPath); // Agregar archivo a la lista
      }
    });
  };

  readDirectory(directoryPath);

  return files;
};
// console.log("Es un directorio con archivos", listDirectoryFiles('./Pruebas'));

//? Hace un solo array de archivos .md
export const extractMDFilesFromDirectory = (directoryPath) => {
  const files = listDirectoryFiles(directoryPath);
  return files.filter(isThisAMDFile);
};
// console.log(extractMDFilesFromDirectory("./Pruebas"));


//! Función que solo busca coincidencias con regex
const findMatches = (content, filePath) => {
  const regex = /\[(.*?)\]\((https?:\/\/[^\s]+)\)/g;

  const matches = Array.from(content.matchAll(regex));

  const links = matches.map((match) => {
    return {
      href: match[2],
      text: match[1],
      file: filePath,
    };
  });

  return links;
};

//! Esta función lee un archivo .md y usa findMatches para extraer los links
const readAndFindLinks = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, content) => {
      if (err) {
        reject(`Error al leer el archivo: ${err}`);
        return;
      }

      const links = findMatches(content, filePath);
      resolve(links);
    });
  });
};

//!Esta acepta todo el array de archivos md e itera readAndFindLinks 
// export const analyzeMdFilesArray = (mdFilesArray) => {
//   const results = [];

//   return new Promise((resolve, reject) => {
//     let completedCount = 0;

//     mdFilesArray.forEach((filePath) => {
//       readAndFindLinks(filePath, (error, links) => {
//         if (error) {
//           reject(`Error al analizar el archivo ${filePath}: ${error}`);
//           return;
//         }

//         results.push(...links);
//         completedCount++;

//         if (completedCount === mdFilesArray.length) {
//           resolve(results);
//         }
//       });
//     });
//   });
// };
export const analyzeMdFilesArray = (mdFilesArray) => {
  const results = [];

  return new Promise((resolve, reject) => {
    let completedCount = 0;

    mdFilesArray.forEach((filePath) => {
      readAndFindLinks(filePath)
        .then((links) => {
          results.push(...links);

          completedCount++;
          if (completedCount === mdFilesArray.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(`Error al analizar el archivo ${filePath}: ${error}`);
        });
    });
  });
};
//?Lee los archivos Md y
// export const analyzeMdFilesArray = (mdFilesArray) => {
//   const results = [];

//   return new Promise((resolve, reject) => {
//     let completedCount = 0;

//     mdFilesArray.forEach((filePath) => {
//       fs.readFile(filePath, 'utf-8', (err, content) => {
//         if (err) {
//           reject(`Error al leer el archivo: ${err}`);
//           return;
//         }

//         const matches = findMatches(content, filePath);
//         results.push(...matches);

//         completedCount++;

//         if (completedCount === mdFilesArray.length) {
//           resolve(results);
//         }
//       });
//     });
//   });
// };

//? Hace la petición HTTP con Axios
export const getHttpResponse = (mdFilesArrayLink) => {
  const validate = mdFilesArrayLink.map((link) => {
    return axios
      .get(link.href)
      .then((result) => {
        const responseValidate = Object.assign({}, link, {
          status: result.status,
          ok: result.statusText,
        });
        return responseValidate;
      })
      .catch((err) => {
        const responseValidate = Object.assign({}, link, {
          status: err.response ? 404 : "ERROR",
          ok: "fail",
        });
        return responseValidate;
      });
  });
  return Promise.all(validate);
};

  // const mdFilesArrayLink = [
  //      {
  //       href: 'http://www.instagram.com',
  //       text: 'Instagram',
  //       path: 'C:\\Users\\Tania G Jimènez\\Documents\\Laboratoria\\Proyecto04\\DEV004-md-links\\Pruebas\\README_DataLovers.md'
  //     },
  //     {
  //       href: 'http://www.wikipedia.org',
  //       text: 'Wikipedia',
  //       path: 'C:\\Users\\Tania G Jimènez\\Documents\\Laboratoria\\Proyecto04\\DEV004-md-links\\Pruebas\\README_DataLovers.md'
  //     },
  //     {
  //       href: 'http://www.aliexpress.com',
  //       text: 'Aliexpress',
  //       path: 'C:\\Users\\Tania G Jimènez\\Documents\\Laboratoria\\Proyecto04\\DEV004-md-links\\Pruebas\\README_DataLovers.md'
  //     },
  //     {
  //       href: 'https://neoattackddd.com/',
  //       text: 'Enlace roto',
  //       path: 'C:\\Users\\Tania G Jimènez\\Documents\\Laboratoria\\Proyecto04\\DEV004-md-links\\Pruebas\\README_DataLovers.md'
  //     }
    
  // ];
  // console.log("Resultados de getHttpResponse --validate:");
  // getHttpResponse(mdFilesArrayLink)
  //   .then(results => {
  //     console.log(results);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });

//?Valida los links con --stats Total:# Unique:#

export const getStatsResult = (arrayObject) => {
  const arrayLink = arrayObject.map((element) => element.href);
  const uniqueLinkCount = {};

  arrayLink.forEach((link) => {
    if (!uniqueLinkCount[link]) {
      uniqueLinkCount[link] = true;
    }
  });

  return {
    Total: arrayLink.length,
    Unique: Object.keys(uniqueLinkCount).length,
  };
};
//Prueba
// console.log("Resultados de getStatsResult --stats:");
// console.log(getStatsResult(mdFilesArrayLink));


// //?Valida los links con --validate --stats Total:# Unique:# Broken:#
export const getResultValidateStats = (arrayObject) => {
  const arrayLink = arrayObject.map((element) => element.href);
  const uniqueLinkCount = {};
  const brokenLinkCount = arrayObject.reduce((count, element) => {
    if (element.ok === "fail") {
      count++;
    }
    return count;
  }, 0);

  arrayLink.forEach((link) => {
    if (!uniqueLinkCount[link]) {
      uniqueLinkCount[link] = true;
    }
  });

  return {
    Total: arrayLink.length,
    Unique: Object.keys(uniqueLinkCount).length,
    Broken: brokenLinkCount,
  };
};
//Prueba
// console.log("Resultados de getResultValidateStats --validate --stats:");
// console.log(getResultValidateStats(mdFilesArrayLink));
