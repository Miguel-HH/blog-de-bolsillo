---
title: "Selectores con operadores (+ > ~ *)"
date: 2021-05-29
categories: css
layout: post-css
description: "Guía para selectores con operadores + > ~ * en 'CSS'"
---

# Selectores con operadores (+ > ~ *)

Estos operadores permiten crear selectores compuestos con una relación mucho mas específica.

## Selector universal

El símbolo `*` selecciona todas las etiquetas HTML del documento y les aplica estilos.

````css
*{
	Color: orange;
}
````

## Selector Etiqueta

````css
p {
	color: blue;
}

h1,h2,h3,h4,h5 {
	font-family: Arial, Helvetica, sans-serif;
	color: black;
}
````

## Selector anidado
Para especificar selectores dentro de otros

````css
span {
	color: black;
}
p span {
	color: red;
}
````

## Selector de ID
Debe ser único en HTML, no se puede repetir

````css
#verde {
	color: green;
}
````

## Selector hijo directo

El símbolo `>` selecciona el hijo directo o hijos directos de una etiqueta HTML determinada.

````css
p > span {
	color: green; /*Seleccionará los span hijos de un p*/
}
````

## Selector hermano siguiente (adyacente)

El símbolo `+` Seleccionará la primera etiqueta HTML que sea hermana de una en específico. Si quisiéramos seleccionar el primer `div` que sea hermano de un `p` haríamos lo siguiente:

````css
h2 {
	color: black;
}

h2 + h2 {
	color: red;
}
````

## Selector hermanos siguientes

El símbolo `~` Seleccionara a todos los hermanos siguientes a una etiqueta HTML en específico. Si quisiéramos seleccionar todos los `div` después de un `p` sería de la siguiente manera:

````css
p ~ div {
	background: yellow;
}
````

## Selector de atributos



````css
input[type='number'] {
	border: black;
}

input[type='email'] {
	border: red;
}
````

***

- Quiero aprender más sobre: ["CSS"](../00/css)
