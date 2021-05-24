---
title: "'async' y 'await'"
date: 2021-05-21
tags: ajax websockets
---

# 'async' y 'await'
Se usa **_async_** antes de la ejecución de la función para indicar a JavaScript que dentro de ella se va a hacer uso de la palabra reservada **_await_** para recibir valores de promesas. La declaración de función **_async_** define una función asíncrona, la cual devuelve un objeto **AsyncFunction**.

### Parametros
-   Name: El nombre de la función.
-   Param: El nombre de un argumento que se debe pasar a la función.
-   Statements: Las declaraciones que conforman el cuerpo de la función.

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
    		resolve({name: 'Miguel'})
		}, 2000)
	})
}

btn.addEventListener('click', async () => {
	let user = null
	const authorization = await getData()
	if (authorization) {
		user = await showData()
	}
	setText(user.name)
})
````
