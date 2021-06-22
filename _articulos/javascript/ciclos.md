---
title: "¿Qué son los 'Ciclos' en JavaScript?"
date: 2021-05-09
tags: javascript
layout: post-javascript
description: "Definición de las 'CLASES' en 'JavaScript orientado a objetos'."
---

# ¿Qué son los 'Ciclos' en JavaScript?
Los ciclos permiten ejecutar un bloque de código repetidamente, hasta que se deje de cumplir una condición.

## Ciclo for
Este ciclo cuenta con los parámetros de valor de inicialización , una condición a cumplir y un operador de aumento o decremento

````js
for(valorDeInicializacion; condicion; incrementoDeValor){
	//Bloque de codigo
}
````

Ejemplo:

````js
for(let i = 0; i <= 3; i++){
	console.log(i)
	// output:	1
	//			2
	//			3
}
````

````js
let mascotasArray = ["perro", "gato", "pez"]

for(let mascota of mascotasArray){
	console.log(`Mi mascota es un ${mascota}`)
}


//	output:
//		Mi mascota es un perro
//		Mi mascota es un gato
//		Mi mascota es un pez

````

````js
for(let producto of productos) {
	console.log(bloque de código)
}
````

## Ciclo while
Un ciclo que se ejecutará mientras se cumpla una condición.

````js
while(condicion){
	//Bloque de código
}
````

Ejemplo:

````js
let juguetes = 3

while (juguetes > 0){
	juguetes--
	console.log(`Hemos regalado un juguete. Quedan ${juguetes}`)
	//output: Hemos regalado un juguete. Quedan 2
	//output: Hemos regalado un juguete. Quedan 1
	//output: Hemos regalado un juguete. Quedan 0
}
````

> Es importante tener especial cuidado con la modificación de la variable, ya que no hacerlo puede provocar un ciclo infinito

***

- Quiero aprender más sobre: ["JavaScript"](../00/javascript)
