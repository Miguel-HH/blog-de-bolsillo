---
title: "Métodos de Array en JavaScript"
tags: javascript
date: 2021-05-09
---

# Métodos de Array en JavaScript

En la programación orientada objetos existen muchas funciones para el array, solo que se les conoce con el nombre de método. no confundir.

## Método push
Permite agregar elemento al array

````js
let amigos = ["Pedro","Grabiel","Juan"]

console.log(amigos) // output: [Pedro, Grabiel, Juan]

// Método push (agregar elementos al array)

amigos.push("Gastón")

console.log(amigos) // output: [Pedro, Grabiel, Juan, Gastón]
````

## Métodos que no modifican el array
### Método pop
No necesita ningún parámetro y lo que hace es quitar elementos de un arreglo.

````js
let amigos = ["Pedro","Grabiel","Juan"]

console.log(amigos) // output: [Pedro, Grabiel, Juan]

// Método pop

amigos.pop() // input: "Juan"

console.log(amigos) // output: [Pedro, Grabiel]
````

### Método slice
Sirve para partir el arreglo en 2 arreglos en un rango determinado en su parámetro, pero sin modificar el arreglo original y devuelven un nuevo arreglo con el resultado que se desea.

````js
let amigos = ["Pedro","Grabiel","Juan", "Daniel"]

console.log(amigos) // output: [Pedro, Grabiel, Juan, Daniel]

// Método slice

let dato = amigos.slice(0 , 2) 

console.log(dato) // output: [Pedro, Grabiel]

console.log(amigos) // output: [Pedro, Grabiel, Juan, Daniel]
````

***

- Quiero aprender más sobre: ["JavaScript"](../00/javascript)
