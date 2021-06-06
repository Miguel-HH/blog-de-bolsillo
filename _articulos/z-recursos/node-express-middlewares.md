---
title: "¿Qué es un Middleware? - Express"
date: 2021-05-22
tags: node-js
---

# ¿Qué es un Middleware? - Express
Es una función que es ejecutada luego de que el servidor recibe una petición y antes de que este emita una respuesta.

La forma de crear este tipo de función es la siguiente:

````js
const my_middleware = (request, response, next) => {
		console.log('Ejecutando middleware')                   //Opcional
		next()
}
````

Una vez creado, se utiliza de la siguiente manera:

````js
app.use(my_middleware)
````


## Ejemplo

````js
// src/index.js
const express = require('express')
const app = express()
const port = 3000
const user = require('./routes/users')
const loggedMiddleware = require('./middlewares/logged')

// middlewares
app.use(loggedMiddleware.isLogged)

// rutas
app.get('/', (req, res) => {
    res.send('Bienvenido')
})

app.use('/users', user)

app.listen(port, () => {
    console.log('La app está corriendo en el puerto 3000')
})
````

````js
// src/middlewares/logged.js
const isLogged = (req, res, next) => {
    let logged = false
    if (logged) {
        next()
    } else {
        res.send('No puede acceder, debe loguearse')
    }
}

exports.isLogged = isLogged
````

````js
// src/routes/users.js
const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

router.get('/all', userController.getUsers)

router.get('/create', userController.createUser)

router.get('/update', userController.updateUser)

router.get('/delete', userController.deleteUser)

module.exports = router
````

````js
// src/controllers/users.js
const getUsers = (req, res) => {
    res.send('Mostrando todos los usuarios')
}

const createUser = (req, res) => {
    res.send('Crear usuario')
}

const updateUser = (req, res) => {
    res.send('Modificar usuarios')
}

const deleteUser = (req, res) => {
    res.send('Eliminar usuarios')
}

module.exports = {getUsers, createUser, updateUser, deleteUser}
````
