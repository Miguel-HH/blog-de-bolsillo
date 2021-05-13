---
title: "Métodos en POO"
tags: javascript poo
date: 2021-05-12
---

# Métodos en POO

Los métodos no son más que las capacidades o cualidades que puede realizar un atributo del objeto.

Los métodos del objeto, se pueden listar después de que han sido listados los atributos de objeto.

> Los métodos suelen parecerse a las funciones, pero tienes que tener cuidado de no confundirlos. Los métodos son únicamente para los objetos.

### ¿Cómo se escribe un método?
> Para llamar a un método es con la notación punto, el nombre del método y paréntesis ( ).
> 
> Siempre dividir con comas los atributos y los métodos.

Los métodos al igual que las funciones pueden o no recibir parámetros.

### ¿Cómo acceder a los atributos de un objeto a través de un método?
Para acceder a los atributos del mismo objeto al que te estás refiriendo utilizas la palabra reservada `this` Ej: `${this.atributo}`

### Ejemplo

````js
const alumno = {
	nombres = "Alberto Junior",
	apellidos = "Quiroga M.",
	edad = 62
},

presentarse() {
	console.log("Hola, mi nombre es ${alumno.nombres} ${alumno.apellidos} y tengo ${alumno.edad} años.")
}

alumno.presentarse()
````