---
title: "Valores de retorno en JavaScript"
categories: javascript
date: 2021-05-09
---

# Valores de retorno en JavaScript

En lugar de imprimir en consola es posible que la función retorne un valor para luego ser utilizado. Por ejemplo:

````js
let name= "Beto", lastName = "Quiroga M"

function obtenerNombreCompleto(nombre, apellidos){
	return `${nombre} ${apellidos}`
}

console.log(obtenerNombreCompleto(name, lastName))
//output: Beto Quiroga M
````

***

- Quiero aprender más sobre: ["JavaScript"](../00/javascript)
