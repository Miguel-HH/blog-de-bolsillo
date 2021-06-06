---
title: "Tipos de datos en JavaScript"
date: 2021-05-08
tags: javascript
---

# Tipos de datos en JavaScript

Haciendo uso del operador `typeof` es posible saber el tipo de algún dato en especifico

### Number
Este tipo considera todos los datos numéricos, incluidos los números de punto flotante

````js
console.log(typeof 54) // output: number
console.log(typeof 12.4) // output: number
````

### String
Este tipo envuelve todos los datos de cadena de texto, incluyendo también los conocidos como `char` o carácter

````js
console.log(typeof "Hola Mundo") // output: string
console.log(typeof "S") // output: string
console.log(typeof "") // output: string
````

> Los strings se pueden escribir con comillas dobles(""), comillas simples('') o con comillas invertidas ()

### Boolean
Indican valores de verdad, por lo cual solo pueden tomar los valores de `true` o `false`

````js
console.log(typeof false) // output: boolean
console.log(typeof true) // output: boolean
console.log(typeof "true") // output: string
````

## Tipos de dato objeto

### Colecciones de datos
Tipo de dato que envuelve múltiples datos en uno solo.

### Array
Agrupación de datos, incluso de diferentes tipos. Estos son mostrados como tipo `object`

> Objetos: Colecciones de datos que poseen múltiples identificadores y valores asociados

````js
console.log(typeof ["Jose", "Juan", "Oto"]) // output: object
````

### Objetos
En los objetos, el identificador se le conoce como atributo y los valores conservan su nombre

````js
let objeto =
{
	nombre: "Samuel",
	apellido: "González",
}

console.log(typeof objeto) // output: object
````

### Null
Representado con la palabra reservada `null`, hacen referencias a valores nulos

> A pesar de no cumplir con la definición de objeto, así es determinado por JavaScript

````js
console.log(typeof null) // output: object
````

### Undefined
Bajo la palabra reservada `undefined`, hace referencia a valores no definidos

***

- Quiero aprender más sobre: ["JavaScript"](../00/javascript)
