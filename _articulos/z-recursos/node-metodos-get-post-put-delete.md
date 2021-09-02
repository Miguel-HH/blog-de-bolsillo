---
title: "Métodos GET, POST, PUT, DELETE - Node.js"
date: 2021-05-22
categories: node-js
---

# Métodos GET, POST, PUT, DELETE - Node.js
Utilizando HTTP con node.js se pueden hacer uso de los siguientes métodos:

- Cuando se accede a una URL mediante el navegador, se utiliza el método GET.
- POST envía datos desde la web al servidor sin hacer uso de la URL.
- El método PUT es para modificar.
- El método DELETE es para eliminar algún recurso.

## Ejemplo
````js
} else if (req.method == 'POST') {
    var datos = ''
    req.on('data', (d)=>{
        datos += d
    })
    req.on('end', ()=>{
        var post = qs.parse(datos)
        res.end('Datos recibidos: ' + post.nombre)
    })
}
````

- Instalar software: 'Postman'
- crear colección
- clic derecho en la colección y elegir 'Add Request'
- comprobar con GET
- Elegir método 'PUT', parámetro 'Body' y 'x-www-form-urlencoded'
- KEY: nombre
- VALUE: cualquier valor
- clic en el botón azul 'SEND'