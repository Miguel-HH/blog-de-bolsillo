---
title: "Trabajando con las promesas"
date: 2021-05-21
tags: ajax websockets
---

# Trabajando con las promesas
Además de ayudar a generar un código más limpio, evitando los callbacks, permiten ejecutar funciones de manera síncrona. Aseguran que la ejecución de un determinado proceso se realice tan pronto termine el proceso anterior. Suele ser complicado de realizar en JavaScript debido a que este lenguaje es asíncrono, lo que puede generar resultados inesperados es por ello que se hace uso de las promesas, pues permiten resolver este inconveniente.

En otras palabras, una promesa es un objeto que recibe siempre una función que tendrá dos objetos de manera interna:  

-   El primer objeto permitirá resolver la promesa, es decir, continuar con el proceso que se está realizando.
-   El segundo, permitirá rechazar la promesa deteniendo todos los procesos que se están ejecutando.

### Sintaxis

new Promise( /* ejecutor */ function(resolver, rechazar) { ... } );  

**Una promesa en un objeto, esa promesa recibe siempre una función que tendrá 2 objetos. Continuar con la promesa o rechazar la promesa y detener los procesos.**

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
