---
title: "Acerca de NPM"
date: 2021-05-21
categories: node-js
---

# Acerca de NPM
NPM es el manejador de paquetes por defecto de Node.js, es decir, permite administrar cada paquete y dependencia que se vaya a utilizar en el proyecto.

## Pasos para comenzar a utilizar NPM en los proyectos
- Abrir la terminal del directorio de trabajo en el editor de código.
- Dentro de la terminal ejecutar el comando `npm init --y`. Este comando permite inicializar el proyecto creando un archivo de configuración con el nombre `package.json`
- Para ejecutar un archivo con NPM es necesario dirigirse al documento `package.json` y añadir un script de la siguiente forma:

````js
// index.js
console.log('Hola mundo')
````

````json
// package.json
"scripts": {
    "start" : "node index.js"
}
````

- Hecho esto. Dentro de la terminal se ejecuta el comando npm con el nombre del script que se le declaró anteriormente, en este caso: `npm start`

## Instalación y uso de un módulo con NPM
- Abrir la terminal dentro del proyecto.
- Ejecutar el comando `npm install hola-mundo-nodejs`
- Una vez finalizada la instalación, se añadirá dentro del documento `package.json` el nombre del módulo y la versión que se está utilizando. Adicionalmente se crea una carpeta con el nombre `node_modules` que contiene información del módulo instalado.
- Para hacer uso del módulo instalado se declara una constante dentro del archivo .js de la siguiente manera:

````js
// index.js
const hola_mundo = require('hola-mundo-nodejs')
console.log(hola_mundo.mensaje())
````

````json
// package.json
"scripts": {
    "start" : "node index.js"
}
````

## Instalar módulo Nodemon
Una forma de ahorrar tiempo haciendo las ejecuciones con npm, es instalar un módulo llamado nodemon.
- Se ejecuta el siguiente comando para instalarlo: `npm install nodemon -D`. `-D` es para especificar que dicho módulo solo será usado en cuestiones de desarrollo.
- Una vez instalado, definir dentro del `*package.json*` un script de la siguiente forma:

````json
// package.json
"scripts": {
    "server": "nodemon index.js"
}
````

- Ejecutar en la terminal el script definido con el comando `npm run nombre_del_script`
- ¡Listo!