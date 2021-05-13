---
title: "JavaScript Filter, Find, Includes, Every"
tags: javascript
date: 2021-05-09
---

# JavaScript

## Filter
Sirve para filtrar contenido específico en una cantidad de elementos en un arreglo.

````js
let numeros = [10, 456, 78, 12, 14,36, 40]

let dato = numeros.filter(num => num>20)

console.log(dato) //output: [456, 78, 36, 40]
````

## Find
Sirve para encontrar un valor entre los elementos de un arreglo. Solo toma el primer dato que consiga.

````js
let numeros = [10, 456, 78, 12, 14,36, 40]

let dato = numeros.find(num => num>20)

console.log(dato) //output: [456, 78, 36, 40]
````

## Includes
Sirve para encontrar un valor que sea exactamente igual al que se busca.

````js
let numeros = [10, 456, 78, 12, 14,36, 40]

let dato = numeros.includes(33)

Console.log(dato) // output: true
````

## Some
Permite comprobar si un elemento cumple con la condición que se le indica, Sirve para comparar una validación.

````js
let numeros = [10, 456, 78, 12, 14,36, 40]

let dato = numeros.some(num => num>0)

Console.log(dato) // output: true
````

## Every
Válida si todos los elementos cumplen con una condición.

````js
let numeros = [10, 456, 78, 12, 14,36, 40]

let dato = numeros.every(num => typeof num === "number")

Console.log(dato) // output: true
````