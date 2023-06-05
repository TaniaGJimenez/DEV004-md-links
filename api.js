import fs from "fs";
import path from "path";
import axios from "axios";

//? la ruta es valida?
export const existingPath = (path) => fs.existsSync(path);

//? la ruta es absoluta?
export const absPath = (pathUsed) => path.isAbsolute(pathUsed);

//? Convertir de ruta relativa
export const transformPath = (converted) => path.resolve(converted);

//? La ruta es un directorio?
export const isThisADirectory = (path) => fs.statSync(path).isDirectory();

//? Es un archivo .md
export const isThisAMDFile = (pathUsed) => path.extname(pathUsed) === ".md";

//? Lee el directorio
const listDirectoryFiles = (directoryPath) => {
  const files = [];

  const readDirectory = (dirPath) => {
    const items = fs.readdirSync(dirPath);

    items.forEach((item) => {
      const itemPath = path.join(dirPath, item);
      const stat = fs.statSync(itemPath);

      if (stat.isDirectory()) {
        readDirectory(itemPath);
      } else {
        files.push(itemPath);
      }
    });
  };

  readDirectory(directoryPath);

  return files;
};

//? Hace un solo array de archivos .md
export const extractMDFilesFromDirectory = (directoryPath) => {
  const files = listDirectoryFiles(directoryPath);
  return files.filter(isThisAMDFile);
};
// console.log(extractMDFilesFromDirectory("./Pruebas"));

//? ! Función que solo busca coincidencias con regex
const findMatches = (content, filePath) => {
  const regex = /\[(.*?)\]\((https?:\/\/[^\s]+)\)/g;

  const matches = content.matchAll(regex);

  const links = [...matches].map((match) => {
    const href = match[2];
    const text = match[1];
    return {
      href,
      text,
      file: filePath,
      // file: getRelativeFilePath(filePath),
      // file: getFileName(filePath),
    };
  });

  return links;
};

//? ! Esta función lee un archivo .md y usa findMatches para extraer los links
const readAndFindLinks = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, content) => {
      if (err) {
        reject(`Error al leer el archivo: ${err}`);
        return;
      }

      const links = findMatches(content, filePath);
      resolve(links);
    });
  });
};

//? !Itera readAndFindLinks y junta todos los links en un array
export const gatherAllLinks = (mdFilesArray) => {
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
          reject(`Error ${filePath}`);
        });
    });
  });
};

//! A partir de aqui comienza comienzan funciones --validate, -stats, --validate y --stats
//? Hace la petición HTTP con Axios
export const getHttpResponse = (linksFromArray) => {
  const validate = linksFromArray.map((link) => {
    return axios
      .get(link.href)
      .then((result) => {
        const responseValidate = {
          text: link.text,
          href: link.href,
          file: link.file,
          status: result.status,
          ok: "Ok",
        };
        return responseValidate;
      })
      .catch((err) => {
        let status;
        if (err.code === "ENOTFOUND") {
          status = 404;
        } else if (err.response && err.response.status) {
          status = err.response.status;
        } else {
          status = 500;
        }
        const responseValidate = {
          text: link.text,
          href: link.href,
          file: link.file,
          status: status,
          ok: "Fail",
        };
        return responseValidate;
      });
  });

  return Promise.all(validate);
};

//?Valida los links con --stats Total:# Unique:#
export const getStatsResult = (linksFromArray) => {
  const arrayLink = linksFromArray.map((element) => element.href);
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

// //?Valida los links con --validate --stats Total:# Unique:# Broken:#
export const getResultValidateStats = (arrayObject) => {
  const arrayLink = arrayObject.map((link) => link.href);
  const uniqueLinkCount = {};
  const brokenLinkCount = arrayObject.reduce((count, link) => {
    if (link.ok === "Fail") {
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

// Pruebas con rutas para findMatches
// // La ruta relativa
// // const getRelativeFilePath = (filePath) => {
// //   const currentDirectory = process.cwd();
// //   return path.relative(currentDirectory, filePath);
// // };

// // Solo el nombre del archivo sin la ruta
// // const getFileName = (filePath) => {
// //   return path.basename(filePath);
// // };

// Pruebas readAndFindLinks
// readAndFindLinks("ejemplo.md")
//   .then((links) => {
//     console.log("Enlaces encontrados:", links);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// Pruebas gatherAllLinks
// gatherAllLinks(mdFilesArray)
//   .then((links) => {
//     console.log('Enlaces encontrados:', links);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
