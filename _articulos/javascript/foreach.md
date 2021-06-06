---
title: "JavaScript ForEach"
tags: javascript
date: 2021-05-09
---

# JavaScript ForEach

Es la manera de decir "para cada elemento", realiza ciclos para cada uno de los elementos que haya en un arreglo. Necesita como parámetro una función

````js
let amigos = ["Pedro","Grabiel","Juan", "Daniel"]

amigos.forEach( function(amigo) {
	console.log(amigo)
}
````

### Código optimizado

````js
let amigos = ["Pedro","Grabiel","Juan", "Daniel"]

let dato = amigos.forEach(amigo => console.log(`Hola ${amigo}`))

console.log(amigos)
}
````

## map
Tiene la misma funcionalidad que ForEach, pero tiene la cualidad de devolver un array nuevo, almacenando con datos cada uno de lo elemento que hace el ciclo.

````js
let amigos = ["Pedro","Grabiel","Juan", "Daniel"]

let dato = amigos.map(amigo => (`Hola ${amigo}`))

console.log(amigos)

console.log(dato) //output: [Hola Pedro, Hola Gabriel...]
}
````

***

- Quiero aprender más sobre: ["JavaScript"](../00/javascript)
