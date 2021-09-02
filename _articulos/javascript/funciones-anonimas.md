---
title: "Funciones anónimas en JavaScript"
categories: javascript
date: 2021-05-09
---

# Funciones anónimas en JavaScript

Las funciones anónimas son aquellas que no tienen nombre, solo tienen los parámetros y las acciones que dicha función realizará

## Sintaxis básica

````js
let miFuncion = function (parametros){
	//Bloque de código
}

console.log(typeof miFuncion)// output: function
````

> Deben ser almacenadas en una variable

## Autoinvocación
Podemos autoinvocar una función al proveer los parámetros justo después de su definición, todo esto envuelto por paréntesis. Por ejemplo:

````js
(function (a, b, c){
	console.log(a + b + c)
}(2, 3, 5)) // output: 10
````

***

- Quiero aprender más sobre: ["JavaScript"](../00/javascript)
