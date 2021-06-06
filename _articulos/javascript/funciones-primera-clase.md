---
title: "Funciones de primera clase en JavaScript"
tags: javascript
date: 2021-05-09
---

# Funciones de primera clase en JavaScript

Todo lo que pueda almacenarse en una variable es conocido como dato de primera clase, eso incluye las ejecuciones de funciones que retornen un dato. Por ejemplo:

````js
function obtenerNombreCompleto(nombre, apellidos){
	return `${nombre} ${apellidos}`
}

let nombreCompleto = obtenerNombreCompleto("Juan", "Lopez")

console.log(nombreCompleto) // output: Juan Lopez
````

***

- Quiero aprender más sobre: ["JavaScript"](../00/javascript)
