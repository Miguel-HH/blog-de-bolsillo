---
title: "Atributos en POO"
categories: javascript poo
date: 2021-05-12
---

# Atributos en POO

## Asignación de atributos
### ¿Cómo asignarle un nuevo valor a un objeto?
Para asignarle uno nuevo valor, se puede realizar con las 2 notaciones existentes.

Al trabajar un objeto como una constante no podrás modificar su estructura a lo largo del desarrollo, lo que si se podrá hacer es modificar sus atributos. Aunque en un momento le agregues un atributo fuera del objeto, el objeto seguirá siendo siempre el mismo. También le podrás cambiar el valor existente a un atributo.

````js
alumno.genero = "Masculino"

o

alumno["genero"] = "Masculino"

console.log(typeof(alumno.edad))
````

## Notación ES6
Se puede escribir un objeto a partir de otras variables.

Si el nombre del atributo, es igual al nombre de la constante o variable que se le está pasando como valor, podrás utilizar solo el nombre del atributo.

````js
const nombres = "Beto Junior"
const apellidos = "Quiroga M."
const edad = 29
}

const alumno = {
	nombres,
	apellidos,
	edad
}

console.log(typeof(alumno.edad))
````