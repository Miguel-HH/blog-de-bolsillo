---
title: "Función constructora en POO"
categories: javascript poo
date: 2021-05-12
---

# Función constructora en POO

Con la función constructora, podrás determinar un molde con el cual podrás definir los atributos que se necesiten al momento de crear un objeto determinado.

¿Cómo declarar una función constructora?
Para crear una función constructora, se utiliza la palabra reservada function y el nombre de la función comenzando con mayúscula y en singular. Toda función puede contener parámetros los cuales son opcionales.

Ej:

````js
function Usuario(parametro1, parametro2, parametro3, ...) {

}
````

Se le llama valor quemado a aquel que se coloca directamente al momento de llamar al objeto.

Se le llama valor dinámico a aquel que se trae de los parámetros del objeto.

¿Cómo llamar los atributos del objeto?
Para llamar los atributos, se utilizará la nomenclatura punto.

Ejemplo:

````js
function Usuario(parametro1, parametro2, parametro3, ...) {

//Atributos
this.parametro2 = parametro2,
this.parametro3 = parametro3
}
````

Es una buena práctica al momento de llamar los atributos del objeto, colocarle los mismos nombres de los parámetros del objeto a los atributos.

¿Cómo llamar una función constructora?
Para ejecutar la función utilizarás la palabra reservada new seguida del nombre de la función y entre paréntesis ( ), los atributos que pide esta función. También se puede guardar estos valores en una variable y al llamar esta variable se ejecutará tu objeto.

Ej:

````js
new Usuario( )

// Dentro de los paréntesis colocarías el contenido de cada parámetro separado por comas (,).
````

La función constructora te servirá para construir objetos, pero también para seguir un molde definido el cual te determinará cuáles atributos se utilizarán para crear un objeto.

A partir de la función constructora, podrás crear todos los objetos que sean necesarios.