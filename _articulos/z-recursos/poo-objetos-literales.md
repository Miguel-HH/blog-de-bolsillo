---
title: "Objetos literales en POO"
tags: javascript poo
date: 2021-05-12
---

# Objetos literales en POO

### ¿Qué es un objeto literal?
Un objeto es un tipo de dato (Con el comando `console.log(typeof(variable))` podrás ver el tipo de dato de una variable o constante.

### ¿Cómo escribir objetos literales?
- Los objetos se escriben dentro de llaves { } y dentro de las llaves escribes los atributos del objeto.
- Cada atributo debe estar separado por una coma ( , ) entre ellos.

### ¿Cómo acceder a los atributos de un objeto?
Para poder acceder existen 2 opciones, la notación punto ( . ) y la notación por corchetes.

-   Notación punto `console.log(constante.atributo)`
-   Notación corchetes `console.log(constante[" "])` (Con notación corchete si o se debe traer como una cadena de texto.

> Los objetos pueden contener cualquier atributo que a su vez contengan diferentes tipos de datos como valor.
> 
> Se puede anidar un objeto dentro de otro objeto.

### Ejemplo

````js
const alumno = {
	nombres: "Beto Junior",
	apellidos: "Quiroga M.",
	edad: 29
}

console.log(typeof(alumno.edad))
````
