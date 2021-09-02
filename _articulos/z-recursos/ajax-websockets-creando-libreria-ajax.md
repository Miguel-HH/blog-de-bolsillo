---
title: "Creando librería AJAX"
date: 2021-05-24
categories: ajax websockets
---

# Creando librería AJAX

## ¿Por qué es necesario crear una librería?

No es posible crear una sentencia de `XMLHttpRequest` por cada petición, la idea es poder enviar los métodos, la URL y las solicitudes de manera dinámica y óptima, logrando así reutilizar el código.

## Ejemplo

De no crear esta librería, deberíamos crear para cada petición un objeto xhr 😱

````js
// recibe una petición la cual es un objeto con las propiedades method y url
// retorna una promesa que al cumplirse retorna event.target

const ajax = request => {
  return new Promise(( resolve, reject ) => {
    const xhr = new XMLHttpRequest()
    xhr.open(request.method, request.url, true)
    xhr.addEventListener('load', e => {
      resolve(e.target)
    })
    xhr.send()
  })
}
````
