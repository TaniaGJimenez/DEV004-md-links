// import { mdLinks } from './index.js';
// import { default as chalk } from 'chalk';
// import { default as process } from 'process';

// const path = process.argv[2];
// const option1 = process.argv[3];
// const option2 = process.argv[4];

// if (path) {
//   console.log(chalk.bgBlue.bold("Procesando..."));
//   if (option1 === '--validate' && option2 === undefined) {
//     mdLinks(path, { validate: true, stats: false })
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   } else if (option1 === '--stats' && option2 === undefined) {
//     mdLinks(path, { validate: false, stats: true })
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   } else if ((option1 === '--validate' && option2 === '--stats') || (option1 === '--stats' && option2 === '--validate')) {
//     mdLinks(path, { validate: true, stats: true })
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   } else {
//     console.log(chalk.bgRed.bold('------ ERROR: No existe la opción por favor probar con: --validate, --stats, -- stats --validate" ------'))
//   }
// }

//! Ultimo intento de CLI
// import { mdLinks } from './index.js';
// import chalk from 'chalk';
// import process from 'process';

// const args = process.argv.slice(2);
// const path = args[0];
// const options = {
//   validate: args.includes('--validate'),
//   stats: args.includes('--stats')
// };

// if (path) {
//   console.log(chalk.bgBlue.bold("Procesando..."));

//   mdLinks(path, options)
//     .then((result) => {
//       // Manejar el resultado según las opciones seleccionadas
//       if (options.validate && options.stats) {
//         console.log(chalk.bgGreen.bold("Resultado con --validate y --stats:"));
//         console.log(result);
//       } else if (options.validate) {
//         console.log(chalk.bgGreen.bold("Resultado con --validate:"));
//         console.log(result);
//       } else if (options.stats) {
//         console.log(chalk.bgGreen.bold("Resultado con --stats:"));
//         console.log(result);
//       } else {
//         console.log(chalk.bgGreen.bold("Resultado sin opciones:"));
//         console.log(result);
//       }
//     })
//     .catch((error) => {
//       console.log(chalk.bgRed.bold("Ocurrió un error:"));
//       console.log(error);
//     });
// } else {
//   console.log(chalk.bgRed.bold("La ruta no existe"));
// }

//!
import { mdLinks } from "./index.js";
import { default as chalk } from "chalk";
import { default as process } from "process";

const path = process.argv[2];
const option1 = process.argv[3];
const option2 = process.argv[4];

if (path) {
  console.log(chalk.bgBlue.bold("Procesando..."));
  if (option1 === "--validate" && option2 === undefined) {
    mdLinks(path, { validate: true, stats: false }).then((result) => result);
  } else if (option1 === "--stats" && option2 === undefined) {
    mdLinks(path, { validate: false, stats: true }).then((result) => result);
  } else if (
    (option1 === "--validate" && option2 === "--stats")
  ) {
    mdLinks(path, { validate: true, stats: true }).then((result) => result);
  } else {
    console.log(
      chalk.bgRed.bold("Error: Asegurate de ingresar una ruta y alguna de estas opciones:--validate, --stats")
    );
  }
}