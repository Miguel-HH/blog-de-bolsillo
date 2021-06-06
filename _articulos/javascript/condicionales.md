---
title: "Condicionales en JavaScript"
tags: javascript
date: 2021-05-09
---

# Condicionales en JavaScript

El funcionamiento principal de las condicionales reside en la posibilidad de ejecutar, o no, una instrucción o bloque de instrucciones dependiendo de una condición que debe ser cumplida.

La sintaxis general de las condicionales es la siguiente:

````js
if(condición){
	bloque de código condicionado
}
````

Ejemplo:

````js
//Si eres mayor de edad y menor de 65 años puedes ir a la fiesta

let persona = "Juan Alexis"

let edad = 25

if (edad >= 18 && edad < 65){

	console.log(`${persona} puedes venir a la fiesta`)
	//output: Juan Alexis puedes venir a la fiesta

}
````

## if else
Es posible ejecutar una instrucción o bloque de instrucciones en caso de que no se cumpla la condición determinada en el condicional. Para esto hacemos uso de la palabra reservada `else` justo luego del cierre del condicional.

````js
if(condicion){
	//Esto se ejecutará si se cumple la condición
} else {
	//Esto se ejecutará si no se cumple la condición
}
````

Ejemplo:

````js
//Si eres mayor de edad y menor de 65 años puedes ir a la fiesta
//sino quedate en casa

let persona = "Juan Alexis"
let edad = 66

if (edad >= 18 && edad < 65){
	console.log(`${persona} puedes venir a la fiesta`)
	//output: Juan Alexis puedes venir a la fiesta
} else {
	console.log(\`${persona} no puedes venir a la fiesta`)
	//output: Juan Alexis no puedes venir a la fiesta
}
````

## If Else If
Es posible anidar múltiples condicionales. Para esto, podemos incluir un `if` justo luego de la palabra reservada `else` y así incluir otra condición a evaluar. Por ejemplo:

````js
//Si eres mayor de edad y menor de 65 años puedes ir a la fiesta
//sino, si tienes permiso firmado de tus padres, puedes venir
//sino quedate en casa

let persona = "Juan Alexis"
let edad = 12
let permiso = true

if (edad >= 18 && edad < 65){
	console.log(`${persona} puedes venir a la fiesta`)
	//output: Juan Alexis puedes venir a la fiesta
} else if (permiso){
	console.log(`${persona} puedes venir a la fiesta, tienes permiso`)
	//output: Juan Alexis puedes venir a la fiesta, tienes permiso
	} else {
		console.log(`${persona} no puedes venir a la fiesta`)
		//output: Juan Alexis no puedes venir a la fiesta
		}
````

***

- Quiero aprender más sobre: ["JavaScript"](../00/javascript)
