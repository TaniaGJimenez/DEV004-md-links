import { absPath, existingPath, transformPath, isThisADirectory, isThisAMDFile,listDirectoryFiles } from "./api.js";

export const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    const pathExists = existingPath(path);
    if (pathExists) {
      resolve(path);
    } else {
      reject(`La ruta ${path} no existe`);
    }
  }).then((path) => {
    const isPathAbsolute = absPath(path);
    const absolutePath = isPathAbsolute ? path : transformPath(path);
    if (isThisADirectory(absolutePath)) {
      console.log('La ruta es un directorio.', `Ruta:${absolutePath}`);
      const files = listDirectoryFiles(absolutePath);
      console.log('Archivos dentro del directorio:');
      files.forEach((file) => console.log(file));
    } else if (isThisAMDFile(absolutePath)) {
      console.log('La ruta es un archivo .md', `Ruta:${absolutePath}`);
    } else {
      console.log('La ruta no es un archivo .md ni un directorio.');
    }
    return absolutePath;
  }).catch((error) => {
    console.error(error);
  });
};
  
mdLinks('./Pruebas');
mdLinks('ejemplo.md');
mdLinks('./rutaFalsa123');