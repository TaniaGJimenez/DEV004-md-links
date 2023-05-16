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

// export const getMarkdownLinks = (filePath) => {
//     const links = [];
//     const fileContent = fs.readFileSync(filePath, 'utf-8');
//     const regex = /\[([^\]]+)\]\(([^\)]+)\)/g;
  
//     let match;
//     while ((match = regex.exec(fileContent)) !== null) {
//       const text = match[1];
//       const url = match[2];
//       links.push({ text, url });
//     }
  
//     return links;
//   };
// console.log("Es un archivo .md", getMarkdownLinks('README_DataLovers.md'), getMarkdownLinks('ejemplo.md'));
