---
title: "Clases - Programación orientada a objetos"
categories: javascript poo
date: 2021-05-13
---

# Clases - Programación orientada a objetos

## Conceptos de POO
> Las funciones constructoras fueron utilizadas hasta ES6.

La programación orientada a objetos permite escribir Clases que van a ser los moldes y, a partir de estas clases podrás crear los objetos que necesites.

### Diferencias entre la nomenclatura de la Función Constructora y las Clases.
Para escribir una clase, utilizarás la palabra reservada `class` y el nombre de la clase. Luego dentro de la clase se encuentra lo que se llama el método `constructor` el cual recibe los parámetros entre paréntesis ( ). El método `constructor` recibirá los mismos parámetros de la función constructora anteriormente creada.

### Ejemplo
````js
class Usuario {
	constructor(nombres, apellidos, correo, activo) {
	this.nombres = nombres,
	this.apellidos = apellidos,
	this.nombres = nombres,
	this.nombres = nombres
	}
}

const beto = new Usuario("Beto", "Quiroga", "correo", true) // instancia de un objeto

const alexys = new Usuario("Alexys", "Lozada", "correo", true) 

// beto y alexys son isntancias de clase y usuario
console.log(beto)
console.log(alexys)
````

### ¿Qué son las instancias?
Son objetos que fueron declarados a partir de una clase. El método `constructor` permitirá definir los atributos que tendrá este objeto.