---
title: "Manipulando strings en JavaScript"
tags: javascript
date: 2021-05-09
---

# Manipulando strings en JavaScript

## Método Slice
Sirve para modificar una cadena de texto que se tenga

````js
let texto = "Alberto Junior Quiroga Muñoz"
let dato = texto.slice (3)

console.log(dato) // output: berto Junior Quiroga Muñoz
````

> ¿Por qué sucede eso en la salida? El parámetro que le indicamos al método es porque irá partiendo desde el lugar que se le indica.

````js
let texto = "Alberto Junior Quiroga Muñoz"
let dato = texto.slice (3, 10)

console.log(dato) // output: berto Junio
````

## Método Split
Permite particionar una parte del texto.

````js
let texto = "Alberto Junior Quiroga Muñoz"
let dato = texto.split(" ")

console.log(dato) // output: ["Alberto","Junior","Quiroga","Muñoz"]
````

## Método Search
Necesita una expresión regular (que es una serie de caracteres que simboliza algo que el lenguaje entienda y realice una búsqueda)

### Método to...
Sirve para que el usuario pueda escribir de una "forma" que no nos conviene y to... modifica la manera en que esa misma información que suministra el usuario, se imprima como se necesita.

````js
let texto = "Alberto Junior Quiroga Muñoz"
let dato = texto.toUpperCase()

console.log(dato) // output: ALBERTO JUNIOR QUIROGA MUÑOZ
````