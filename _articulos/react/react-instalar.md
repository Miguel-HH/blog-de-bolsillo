---
title: "Comenzando con React.js"
date: 2021-05-26
tags: react
---

# Comenzando con React.js

### Librería para iniciar proyecto
`npx create-react-app nombre-de-carpeta`

### Instalación de yarn
`npm install -g yarn`

### Subir a producción
`yarn build`


## Creación proyecto mediante Yarn

`npx create-react-app Nombre_de_proyecto`

### Edgrid
Librería Open Source desarrollada por EDteam.

### Styleguides
Es una guía con todos los conceptos necesarios para proyectos web en EDteam.

### Integrando proyectos
- Desde Yarn:
````
yarn add ed-grid edteam-style-guides node-sass
````

- Desde Npm:
````
npm i ed-grid
npm i edteam-style-guides
npm install node-sass@4.14.1
````

Es importante exponer, que para el correcto funcionamiento del proyecto React y que compile código SASS; se debe instalar node-sass y así evitar errores al ejecutar el servidor.

### Aplicando estilos
Crear un archivo de .scss y realizar los @import de cada proyecto.
Importar el archivo creado con la ruta correcta y cargarlo en App.js .
Ejecutar servidor.