---
title: "Envío de archivos HTML"
date: 2021-05-22
categories: node-js
---

# Envío de archivos HTML
Para poder leer archivos de tipo HTML es necesario importar un módulo llamado fs. Dicho módulo ya viene incluido con Node y no hace falta instalarlo.

## Pasos para leer un archivo HTML
- Importar el módulo fs
- Leer el archivo HTML utilizando fs y la función .readFile()
- Se crea una función anónima y se pasa como parámetros un error (en caso de que ocurra) y el contenido.
- Como paso final se establecen las acciones en caso de que ocurra un error y en caso de que todo funcione correctamente.

````js
const fs = require('fs')

function onRequest(req, res) {
    console.log('Se ha detectado una nueva petición')

    fs.readFile('index.html', (err, content) => {
        if (err) {
            console.log('Ha ocurrido un error')
            console.log(err)
        } else {
            res.setHeader('Content-type', 'text/html')
            res.write(content)
            res.end()
        }
    })
}
````

El tipo de error 402 ocurre cuando un archivo, documento o una página web no es encontrada.

El tipo de error 500 es cuando ocurre un error directamente en el servidor.

Cuando todo funciona correctamente el código es `202`.

Estos estados son necesarios especificarlos dentro de las condicionales utilizando la función `.SetStatus =` e igualando al número del estado producido.