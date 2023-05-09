import { absPath, existingPath } from "./api.js";
export const mdLinks = (path, options) => {
    const pathExists = existingPath(path);
    if(pathExists){
        const isPathAbsolute = absPath(path);
        console.log(isPathAbsolute, typeof isPathAbsolute)
        if (isPathAbsolute) {
            console.log('La ruta es absoluta');
        } else {
            console.log('La ruta es relativa');
        }
    } else {
        console.log('La ruta no existe')
    }
}

console.log (mdLinks('./Pruebas'),typeof mdLinks);//Terminal