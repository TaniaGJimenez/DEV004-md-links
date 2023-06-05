# Markdown Links

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del Proyecto](#2-resumen-del-Proyecto)
* [3. Como Realizar la Instalación](#3-Como-Realizar-la-Instalación)
* [4. Como Utilizarlo](#4-Como-Utilizarlo)
* [5. Ejemplos de Uso](#5-Ejemplos-de-Uso)

***

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...) y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir. 

<img src="https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg" alt="md-links" width="300" />

## 2. Resumen del Proyecto

Este es un módulo instalable de npm diseñado para facilitar la verificación de enlaces dentro de archivos Markdown. Con este paquete, puedes obtener información sobre el estado de los enlaces y también obtener estadísticas relacionadas.

## 3. Como Realizar la Instalación
Para instalar el módulo, simplemente ejecuta el siguiente comando en la terminal:

```
$ npm install tania-g-md-links
```

## 4. Como Utilizarlo

### CLI (Command Line Interface - Interfaz de Línea de Comando)

Para utilizar el paquete `md-links` desde la línea de comando, sigue estos pasos:

1. Abre la terminal.
2. Escribe el siguiente comando:

```bash
md-links <ruta> [opciones]
```

- `<ruta>`: la ruta del archivo que deseas evaluar.
- `[opciones]`: selecciona una de las siguientes opciones:

Opciones:
- `--validate`: realiza una petición HTTP para verificar si los enlaces funcionan o no.
- `--stats`: muestra estadísticas básicas sobre los enlaces.
- `--validate --stats`: muestra estadísticas de los enlaces y cuántos de ellos están rotos.

Asegúrate de reemplazar `<ruta>` por la ruta real de tu archivo Markdown. Esto te permitirá ejecutar el paquete `md-links` y obtener los resultados correspondientes en la terminal.

Con esta simple línea de comando --validate, el módulo realizará una verificación de los enlaces en tu archivo Markdown y te mostrará el estado de cada uno. De esta manera, podrás identificar aquellos enlaces que no funcionan correctamente y tomar las acciones necesarias para corregirlos.

Si deseas obtener estadísticas básicas sobre los enlaces en tu archivo Markdown, puedes utilizar la opción --stats. Esto te proporcionará información como la cantidad total de enlaces y la cantidad de enlaces únicos presentes en el archivo.

Si deseas obtener estadísticas más detalladas que incluyan el estado de los enlaces, puedes combinar las opciones --stats y --validate. Esto te mostrará cuántos enlaces están rotos o inválidos, brindándote una visión completa de la calidad de los enlaces en tu archivo.


## 5. Ejemplos de Uso


### CLI (Command Line Interface - Interfaz de Línea de Comando)
```bash
md-links example.md --validate
md-links example.md --stats
md-links example.md --validate --stats 
```


¡Con esta herramienta, puedes verificar de forma sencilla y eficiente los enlaces en tus archivos Markdown y obtener valiosa información sobre ellos! Ya no tendrás que preocuparte por enlaces rotos o inválidos en tus documentos Markdown, ya que podrás identificarlos rápidamente.


