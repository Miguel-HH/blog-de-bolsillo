---
title: "Archivos estáticos en Express"
date: 2021-05-22
categories: node-js
---

# Archivos estáticos en Express
Para trabajar con archivos estáticos (HTML, CSS, JavaScript e incluso imágenes) que puedan ser visualizados por el navegador se utilizan los middlewares. Dicho middleware ya viene incluido en express y no existe la necesidad de instalarlo. Se hace uso de ella de la siguiente manera:

````js
app.use(express.static(__dirname + '/public'))
````

Es recomendable crear una carpeta con el nombre public y guardar en ese directorio todos los archivos estáticos.

## Archivos estáticos con el módulo Path
Existe otra forma para utilizar los archivos estáticos haciendo uso del módulo Path de la siguiente manera:

````js
const path = require('path')
app.use(express.static(path.join(__dirname, '/public')))
````

## Ejemplo
- Crear carpeta `public`

````js
// controllers/users.js
const path = require('path')
const root = path.join(__dirname, '../public')

const getUsers = (req, res) => {
    res.sendFile('users.html', {root: root})
}

const createUser = (req, res) => {
    res.sendFile('create-user.html', { root: root })
}

const updateUser = (req, res) => {
    res.sendFile('update-user.html', { root: root })
}

const deleteUser = (req, res) => {
    res.sendFile('delete-user.html', { root: root })
}

module.exports = {getUsers, createUser, updateUser, deleteUser}
````