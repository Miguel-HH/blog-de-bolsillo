---
title: "Instalación y creación de servidor con Express"
date: 2021-05-22
categories: node-js
---

# Instalación y creación de servidor con Express
- Escribir el comando `npm init -y` para crear el archivo `package.json`
- Instalar el módulo de express con el comando `npm install express`
- Instalar el módulo de nodemon con el comando `npm install nodemon -D`
- Crear una carpeta con el nombre src en donde se almacenará todo el código fuente.
- Dentro del `package.json` crear un script para ejecutar nodemon en el proyecto.
- ¡Listo, el entorno ya está listo para comenzar!

## Ejemplo

````json
// package.json
"scripts": {
    "server": "nodemon src/index.js"
}
````

````js
// src/index.js
const express = require('express')
const app = express()
const port = 3000

// rutas
app.get('/', (req, res) => {
    res.send('Beinvenido')
})

app.get('/users', (req, res) => {
    res.send('Mostrando todos los usuarios')
})

app.listen(port, () => {
    console.log('La app está corriendo en el puerto 3000')
})
````
