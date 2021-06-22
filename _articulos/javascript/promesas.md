---
title: "¿Qué son las 'Promesas' en JavaScript?"
date: 2021-06-19
tags: javascript
layout: post-javascript
description: "Descripción de 'Promesas' en JavaScript."
---

# ¿Qué son las 'Promesas' en JavaScript?

Una promesa es un objeto que recibe siempre una función que tendrá dos objetos de manera interna:

-   El primer objeto permitirá resolver la promesa, es decir, continuar con el proceso que se está realizando.
-   El segundo, permitirá rechazar la promesa deteniendo todos los procesos que se están ejecutando.

### Sintaxis

`new Promise( /* ejecutor */ function(resolver, rechazar) { ... } )`

### Ejemplo

````js
const setText = data => {
  myContent.textContent = data
}

const getData = () => {
	return new Promise((resolve, reject) => {
		setText('Solicitando autorización...')
		setTimeout(() => {
    		resolve(true)
  		}, 2000)
	})
}

const showData = () => {
	return new Promise((resolve, reject) => {
		setText('Esperando a mostrar la información...')
		setTimeout(() => {
    		resolve({name: 'Carol'})
		}, 2000)
	})
}

btn.addEventListener('click', () => {
	getData()
		.then(authorization => {
		if (authorization) {
			return showData()
      	}
	})
		.then(user => {
			setText(user.name)
  	})
})
````

**Cuando se ejecute un "then" recién comenzará con el siguiente "then".
La idea es concatenar todas las promesas sin "dibujar un triángulo".
Las promesas nos permiten encadenar muchas promesas.
Esto ocurre mucho cuando utilizamos Ajax porque no sabemos cuánto tiempo puede tardar el servidor en respondernos y puede ser posible que JS intente renderizar data que aún no hemos recibido.**

### Estados
-  _pendiente (pending)_: estado inicial, no cumplida o rechazada.
-  _cumplida (fulfilled)_: significa que la operación se completó satisfactoriamente.
-  _rechazada (rejected)_: significa que la operación falló.

***

- Quiero aprender más sobre: ["JavaScript"](../00/javascript)
