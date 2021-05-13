---
title: "Herencia - Programación orientada a objetos"
tags: javascript poo
date: 2021-05-13
---

# Herencia - Programación orientada a objetos

La herencia en programación viene literalmente del verbo heredar.

Cuando existen atributos que se pueden compartir entre diferentes objetos, pero otros atributos que son específicos para un objeto, deberás crear una nueva clase para cada objeto que necesite un atributo específico.

### ¿Cómo utilizar la herencia?

Para heredar atributos de una clase que ya existe, al método constructor de la nueva clase le pasarás todos los atributos que este necesite, pero ya no serán creados en su método constructor, también deberás decirle a la nueva clase utilizando la palabra reservada `extends` más el nombre de la clase de donde vas a heredar, esto indicará que a la vez de la nueva clase ser diferente, también será igual a la clase de la cual heredo.

Pero esto no será suficiente para heredar todos los atributos de la clase existente, para esto en la nueva clase dentro de la función constructora deberás utilizar el método `super()` y entre paréntesis colocar los atributos necesarios.

Con el método `super()` le indicarás a la clase de la cual te estás extendiendo que también traiga a la nueva clase esos atributos.

> **Al heredar de una clase a otra, también se heredan todos los métodos.**

### Ejemplo

````js
class Profesor extends Usuario {
	constructor(n, a, c, ac, cd, calificacion) {
	super(n, a, c, ac)
	this.cursosDictados = cd
	this.calificacion = calificacion
	}
````