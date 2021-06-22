---
title: "Función constructora en JavaScript"
date: 2021-05-12
tags: javascript
layout: post-javascript
description: "Definición de 'Función constructora' en 'JavaScript orientada a objetos'."
---

# Función constructora en JavaScript

Con la función constructora podrás determinar un molde con el cual podrás definir los atributos que se necesiten al momento de crear un objeto determinado.

## ¿Cómo declarar una función constructora?
Se utiliza la palabra reservada function y el nombre de la función comenzando con mayúscula y en singular.

## Ejemplo

````js
function Usuario(parametro1, parametro2, parametro3, ...) {

}
````

## ¿Cómo llamar los atributos del objeto?
Se utiliza la nomenclatura punto (.)

````js
function Usuario(parametro1, parametro2, parametro3, ...) {

//Atributos
this.parametro2 = parametro2,
this.parametro3 = parametro3
}
````

Es una buena práctica al momento de llamar los atributos del objeto, colocarle los mismos nombres de los parámetros del objeto a los atributos.

## ¿Cómo llamar una función constructora?
Para ejecutar la función utilizarás la palabra reservada new seguida del nombre de la función y entre paréntesis ( ), los atributos que pide esta función. También se puede guardar estos valores en una variable y al llamar esta variable se ejecutará tu objeto.

````js
new Usuario( )

// Dentro de los paréntesis colocarías el contenido de cada parámetro separado por comas (,).
````

La función constructora te servirá para construir objetos, pero también para seguir un molde definido el cual te determinará cuáles atributos se utilizarán para crear un objeto.

A partir de la función constructora, podrás crear todos los objetos que sean necesarios.

***

- Quiero aprender más sobre: ["JavaScript"](../00/javascript)
