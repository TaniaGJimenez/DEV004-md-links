import { mdLinks } from "../index.js";
//Test Coach Sergio
describe("mdLinks", () => {
  it("mdLinks procesa un solo archivo con 3 links", () => {
    const ruta = "ejemplo.md";
    return mdLinks(ruta, { validate: false }).then((array) => {
      expect(array).toEqual([
        {
          href: "https://es.wikipedia.org/wiki/Markdown",
          text: "Markdown",
          file: "ejemplo.md",
        },
        {
          href: "https://nodejs.org/",
          text: "Node.js",
          file: "ejemplo.md",
        },
        {
          href: "https://developers.google.com/v8/",
          text: "motor de JavaScript V8 de Chrome",
          file: "ejemplo.md",
        },
      ]);
    });
  });
});

describe("mdLinks", () => {
  it("Si la ruta es invalida arroja un mensaje de error", () => {
    const invalidPath = "/ruta/Falsa/123";
    return mdLinks(invalidPath).catch((error) => {
      expect(error).toBe(`La ruta ${invalidPath} no existe`);
    });
  });

it("Entrega una ruta absoluta cuando se ingresa una ruta relativa valida", () => {
  const relativePath = "ejemplo.md";
  const expectedAbsolutePath = 'C:\\Users\\Tania G Jimènez\\Documents\\Laboratoria\\Proyecto04\\DEV004-md-links\\ejemplo.md';
  return mdLinks(relativePath).then((absolutePath) => {
    expect(absolutePath).toBe(expectedAbsolutePath);
  });
});
});
//!Test Coach Sergio

