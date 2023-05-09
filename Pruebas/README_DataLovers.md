# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Definición y Objetivos del Proyecto](#3-Definición-y-Objetivos-del-proyecto)
* [4. Historias de Usuario](#4-Historias-de-Usuario)
* [5. Diseño de Interfaz de Usuario](#5-Diseño-de-Interfaz-de-Usuario)
* [6. Objetivos de Aprendizaje](#6-Objetivos-de-Aprendizaje)
***
## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin
precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

## 2. Resumen del proyecto

  * Se consideró como usuario principal personas que no saben de pokémon y quieren empezar a aprender sobre este juego y los pokémon de modo que se consideró que la que la página fuera lo más accesible posible para los usuarios
  * Creamos una pagina que permite a los usuarios conocer información a detalle en el cual podra ordenar alfabeticamente, filtrar por tipo y buscar cada pokemon.
  * Pokémon: En este set encontrarás una lista con los 251 Pokémon de la región de Kanto y Johto, junto con sus respectivas estadísticas usadas en el juego Pokémon GO.

  [Pokémon GO](http://pokemongolive.com).
  - [Investigación con jugadores de Pokémon Go](src/data/pokemon/README.md)




## 3. Definición y Objetivos del Proyecto

  Definición del producto

### Usuarios 
    Niños, jovenes y adultos (Desde los 6 - 45 años),
    Sin conocimiento previo del juego que deseen navegar en una web confiable y agradable para aprender caracteristicas de los pokemones para convertirse en un  maestro pokemon.
### Objetivos del proyecto 
    * Que los usuarios puedan tener una herramienta donde consultar informacion de pokemones .
    * Reconocer a los pokemones Nombre y tipo .
    * Puedan tener una navegación intuitiva.
### Problemas que soluciona 
    * Mostrar 251 pokemons en la pagina principal cada uno con sus tres características principales 
      (imagen,número de pokemon, nombre y tipo)
    * Se presentara una gráfico con los tipos de cada pokemon 
    * Filtrar por Tipo 
    * Ordenar pokemons alfabéticamente de A-Z
    * Ordenar pokemons alfabéticamente de Z-A
    * Buscar por nombre a un pokemon

## 4. Historias de Usuario 
  ### HU1: Mostrar todos los pokemones

    Quien -> Yo, como usuario 
    Qué?-> Ver todos los pokemones en la pantalla.  
    Para?-> Poder escoger un pokemon.
    
    ### Criterios de Aceptación
 
    - [x] **Encabezado con imagen de Pokemon Go.**
    - [x] **Que el main tenga una imagen de fondo (wallpaper de Pokemon)**
    - [x] **Visualizar los pokemones en lineas, haciendo scroll hacia abajo para poder visualizarlos a todos.**
    - [x] **Que se muestren todos los nombres de los Pokemones**
    - [x] **Mostrar todos los números de los pokemones**
    - [x] **Que todos los pokemones se muestren en un marco con bordes redondeados.**
      
    ### Definición de terminado
   
    - [x] **Fiel al prototipo**
    - [x] **Sea responsive. Que permanezca anclado mientras dar scroll.**
    - [x] **Despliegue en github.**
    - [x] **Testing**

  ### HU2: Filtrar Pokemon

    Quien -> Yo, como usuario  
    Qué? -> Quiero filtrar todos los pokemones por tipo: Planta, Fuego, Agua…  
    Para? -> Aprender a escoger los pokemones por tipo dependiendo de la batalla pokemon que tenga.  

    ### Criterios de Aceptación  

    - [x] Un botón que despliegue un menú con las opciones de tipo.  

    ### Definición de terminado  

    - [x] Fiel al prototipo  
    - [x] Que el código no marque error.  
    - [x] Despliegue en GitHub.  
    - [x] Testing  

  ### HU3: Input que permita escribir el nombre de los pokemones para buscarlos

    Quien -> Yo, como usuario  
    Qué? -> Buscar los pokemones por nombre  
    Para? -> Aprender a escoger los pokemones por tipo dependiendo de la batalla pokemon que tenga.  

    ### Criterios de Aceptación  

    - [x] Input que permita buscar por teclado los nombres de los pokemones.  

    ### Definición de terminado  

    - [x] Fiel al prototipo  
    - [x] Que el código no marque error.  
    - [x] Despliegue en GitHub.  
    - [x] Testing  

  ### HU4: Ordenar los poquemones de A-Z y Z-A

    Quien -> Yo, como usuario  
    Qué? -> Conocer los nombres de manera ordenada  
    Para? -> Reconocerlos más fácil dependiendo de la batalla pokemon que tenga.  

    ### Criterios de Aceptación  

    - [x] Un botón que despliegue las opciones A-Z y Z-A  

    ### Definición de terminado  

    - [x] Fiel al prototipo  
    - [x] Que el código no marque error.  
    - [x] Despliegue en GitHub.  
    - [x] Testing  

  ### HU5: Tabular y Graficar los pokemones según su tipo 

    Quien -> Yo, como usuario  
    Qué? -> Conocer cuántos pokemones hay en cada tipo.  
    Para? -> Reconocerlos más fácil los pokemones por tipo para la batalla pokemon que tenga.  

    ### Criterios de Aceptación  

    - [x] Un botón que muestre una tabla y gráfica con los tipos de pokemones  

    ### Definición de terminado  

    - [x] Fiel al prototipo  
    - [x] Que el código no marque error.  
    - [x] Despliegue en GitHub.  
    - [x] Testing  

## 5. Diseño de Interfaz de Usuario
  ### **Prototipo de baja fidelidad**
  <p align="center">
  <img src="./src/PrototipoBajaF.png" alt="Prototipo baja fidelidad" style="max-width:50%;">
</p>
<center>En el proceso de desarrollo del proyecto, cada miembro del equipo comenzó a trabajar en la creación de un prototipo de baja fidelidad de forma individual. Esto nos permitió explorar diferentes opciones de diseño y de flujo de usuario.
   Una vez que cada miembro del equipo completó su prototipo, los compartimos y trabajamos juntos en la unión de ambos. Al unir los prototipos, pudimos combinar nuestras ideas y elegir las mejores opciones de cada uno. De esta manera, creamos un prototipo que incorporó las mejores prácticas de diseño y de usabilidad. </center>  

  ### **Prototipo de alta fidelidad**
   <p align="center">
  <img src="./src/PrototipoAltaF.png" alt="Prototipo alta fidelidad" style="max-width:50%;">
</p>
Para crear el prototipo de alta fidelidad, nos basamos en el prototipo de baja fidelidad que habíamos desarrollado anteriormente. Utilizamos una herramienta de diseño para crear una versión más refinada del prototipo, en el que incluimos más detalles visuales y funcionales.
Comenzamos por agregar más detalles a las diferentes secciones y elementos de la interfaz gráfica, tales como iconos, colores, imágenes, texturas y otros elementos visuales que mejoraran la experiencia de usuario. También ajustamos el tamaño y posición de los diferentes elementos para mejorar la accesibilidad y la legibilidad de la información.
A medida que agregamos cada historia de usuario, modificamos el prototipo de alta fidelidad, ajustando y modificando la interfaz gráfica para que coincidiera con los requisitos de la historia de usuario en cuestión. Esto nos permitió garantizar que la interfaz gráfica cumpliera con los criterios de aceptación definidos y ofreciera la mejor experiencia de usuario posible.

  ### **Producto Final**
   <p align="center">
  <img src="./src/ProductoFinal.png" alt="Producto Final" style="max-width:50%;">
</p>  

### **Testeos de usabilidad**
Para evaluar la usabilidad de nuestra página web, realizamos pruebas con usuarios reales y solicitamos su feedback a través del canal de Slack del equipo. Los usuarios (compañeras y coaches) probaron la página desplegada en GitHub y nos brindaron sus opiniones y sugerencias para mejorar la navegación y la experiencia de usuario. A partir de estos test de usabilidad, pudimos identificar áreas de mejora y realizar ajustes en la interfaz para lograr una mejor experiencia para el usuario.
   - [X] *En el filtro por tipo, podrían agregar la opción "todos" para no tener que retroceder para ver todos los pokemons otra vez.*
   - [X] *Las imágenes de los pokemones centrarlos un poco y en el buscar por nombre, capaz que las letras podrián ser de un tamaño mas pequeño..Espero que les sirva..saluditos*
   - [x] *cuando selecciono un filtro nunca me indica que fue lo que filtre, esa info siempre debe ser visible para el usuario lo que podrian hacer es cambiar el texto del boton por la opcion seleccionada*
   - [x] *como no hay nada debajo del nombre del pokemon podrian reducir el tamaño de la carta y asi mostrar mas pokemones*
   - [x] *Tal vez echar un ojo en las funciones de ordenar para unificrlas dado que son basicamente el mismo codigo*
   - [x] *Modificar el header de un color solido a uno mas vistoso en este caso fue una imagen acorde con la pagina.*
  ### **Implementación de la Interfaz de Usuario (HTML/CSS/JS)**
  - [x] Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.
  - [x] Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos tamaños de pantallas: móviles, tablets y desktops.
  - [x] Que la interfaz siga los fundamentos de _visual design_.
  ### **Pruebas unitarias**
  Nuestras pruebas unitarias para el archivo src/data.js cumplen con las especificaciones técnicas del proyecto, proporcionando una cobertura de del 100% en statements, functions, lines, y branches. Esto nos asegura que nuestras funciones están siendo probadas exhaustivamente y que cualquier error o fallo en el código será detectado. Lo que nos asegura que nuestro proyecto es escalable.

### Checklist

* [x] Usa VanillaJS.
* [x] Pasa linter (`npm run pretest`)
* [x] Pasa tests (`npm test`)
* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [x] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [x] UI: Permite ordenar data por uno o más campos (asc y desc).
* [x] UI: Permite filtrar data en base a una condición.
* [x] UI: Es _responsive_.



## 6. Objetivos de aprendizaje
  ### HTML
  - [x] **Uso de HTML semántico**
  ### CSS
  - [x] **Uso de selectores de CSS**
  - [x] **Modelo de caja (box model): borde, margen, padding**
  - [x] **Uso de flexbox en CSS**
  ### Web APIs
  - [x] **Uso de selectores del DOM**
  - [x] **Manejo de eventos del DOM (listeners, propagación, delegación)**
  - [x] **Manipulación dinámica del DOM**
  ### JavaScript
  - [x] **Diferenciar entre tipos de datos primitivos y no primitivos**
  - [x] **Arrays (arreglos)**
    * [Array - MDN]
    * [Array.prototype.sort() - MDN]
    * [Array.prototype.forEach() - MDN]
    * [Array.prototype.map() - MDN]
    * [Array.prototype.filter() - MDN]
    * [Array.prototype.reduce() - MDN]
  - [x] **Objetos (key, value)**
  - [x] **Variables (declaración, asignación, ámbito)**
  - [x] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**
  - [x] **Uso de bucles/ciclos (while, for, for..of)**
  - [x] **Funciones (params, args, return)**
  - [x] **Pruebas unitarias (unit tests)**
  - [x] **Módulos de ECMAScript (ES Modules)**
  - [x] **Uso de linter (ESLINT)**
  - [x] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**
  - [x] **Diferenciar entre expresiones (expressions) y sentencias (statements)**
  ### Control de Versiones (Git y GitHub)
  - [x] **Git: Instalación y configuración**
  - [x] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**
  - [x] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**
  - [x] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**
  - [x] **GitHub: Despliegue con GitHub Pages**
  - [x] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**
  ### Centrado en el usuario
  - [x] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**
  ### Diseño de producto
  - [x] **Crear prototipos de alta fidelidad que incluyan interacciones**
  - [x] **[Seguir los principios básicos de diseño visual](https://coda.io/d/Bootcamp-UX-Contenido_dqkqk2rV9Z2/Diseno-Visual_suOT7#_luWsQ)**
  ### Investigación
  - [x] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**
