---
title: "Uso de módulo http"
date: 2021-05-22
categories: node-js
---

# Uso de módulo http

## ¿Qué es HTTP?

HTTP es un protocolo de transferencia de hipertexto que permite realizar el envío de documentos o cualquier otro archivo desde el servidor al navegador.

## Pasos para crear un servidor HTTP local
- Se declara una constante para importar el módulo cuyo nombre es http.
- Una vez importado el módulo, se procede a crear el servidor haciendo uso de la función .createServer()
- Se le asigna un puerto por el cual el servidor pueda escuchar.
- Hecho esto el servidor ya está creado, pero, es necesario colocar una función que reciba como parámetros una petición y una respuesta.
- ¡Listo! El código quedaría de la siguiente manera:

````js
// index.js
const http = require('http')
const server = http.createServer()
server.listen(3000)
console.log('Mi servidor está corriendo en localhost:3000')
````

¿Cómo enviar respuestas de desde node.js?

````js
const http = require('http')
const server = http.createServer(onRequest)
server.listen(3000)
console.log('Mi servidor está corriendo en localhost:3001')

function onRequest(request, response) {
	console.log('Se ha detectado una nueva petición')
}
````

## Request
Es toda la información de la petición que está recibiendo el servidor.

Se puede acceder a informaciones específicas utilizando las siguientes funciones:

````js
console.log(request.headers.host)       //Acceder a la información del host
console.log(request.url)                //Acceder a la información de la URL
console.log(request.method)             //Acceder a la información del metodo de la petición
````

## Response
Una vez que se tenga gestionada toda la información de la petición, se tiene que enviar una respuesta al navegador desde el servidor.

- Se utiliza la función `.setHeader( , )` para enviar una cabecera al navegador. Dentro del primer parámetro se especifica el tipo de contenido y en el otro parámetro, el tipo de contenido en sí.
- Luego se hace uso de la función `.write(' ')` para enviar el contenido del texto.
- Finalizar con la función `.end()` para terminar y enviar las instrucciones.

### Ejemplo

````js
const http = require('http')
const server = http.createServer(onRequest)
const port = 3000
server.listen(port, ()=>{
    console.log('El servidor está corriendo en localhost:3000')
})

function onRequest(req, res) {
    console.log('Se ha detectado una nueva petición')
    res.setHeader('Content-type', 'text/plain')
    res.write('Bienvenidos al servidor')
    res.end()
}
````