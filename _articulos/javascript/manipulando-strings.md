---
title: "Manipulando strings en JavaScript"
tags: javascript
date: 2021-05-09
---

# Manipulando strings en JavaScript

## Método Slice
Sirve para modificar una cadena de texto que se tenga

````js
let texto = "Miguel Angel"
let dato = texto.slice (3)

console.log(dato) // output: guel Angel
````

> ¿Por qué sucede eso en la salida? El parámetro que le indicamos al método es porque irá partiendo desde el lugar que se le indica.

````js
let texto = "Miguel Angel"
let dato = texto.slice (3, 6)

console.log(dato) // output: guel
````

## Método Split
Permite particionar una parte del texto.

````js
let texto = "Miguel Angel"
let dato = texto.split(" ")

console.log(dato) // output: ["Miguel","Angel"]
````

## Método Search
Necesita una expresión regular (que es una serie de caracteres que simboliza algo que el lenguaje entienda y realice una búsqueda)

### Método to...
Sirve para que el usuario pueda escribir de una "forma" que no nos conviene y to... modifica la manera en que esa misma información que suministra el usuario, se imprima como se necesita.

````js
let texto = "Miguel Angel"
let dato = texto.toUpperCase()

console.log(dato) // output: MIGUEL ANGEL
````

***

- Quiero aprender más sobre: ["JavaScript"](../00/javascript)
