---
title: "Contenido del DOM"
tags: javascript dom
date: 2021-05-15
---

# Contenido del DOM
El contenido es lo que está dentro de un elemento. Podrás acceder a este contenido con los métodos textContent, innerHTML y outerHTML. 

- textContent solo devuelve texto (de todos los nivele dentro).
- innerHTML devuelve todo lo que se encuentra dentro de la etiqueta HTML.
- outerHTML te devolverá dentro de una string todo el elemento con todo su contenido de HTML incluyendo las etiquetas.


## Comillas simples inversas:

Las últimas en llegar a Javascript son las comillas para _string templates_:

```` js
const respuesta= 42
const texto = `The Answer to
the Ultimate Question of Life,
The Universe,
and Everything is: ${respuesta}`;

console.log(texto);
````

 Ejecutar

Ampliar

Tienen características especiales que no tienen las comillas simples o las comillas dobles, como ser multilínea o aceptar parámetros con el formato `${valor}`.
