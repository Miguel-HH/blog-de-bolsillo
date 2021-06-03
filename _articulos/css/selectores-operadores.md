---
title: "Selectores con operadores (+ > ~ *)"
date: 2021-05-29
tags: css
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

## Selector hijo directo

El símbolo `>` selecciona el hijo directo o hijos directos de una etiqueta HTML determinada.

````css
p > span {
	color: green; /*Seleccionará los span hijos de un p*/
}
````

## Selector hermano siguiente

El símbolo `+` Seleccionará la primera etiqueta HTML que sea hermana de una en específico. Si quisiéramos seleccionar el primer `div` que sea hermano de un `p` haríamos lo siguiente:

````css
p + div {
	border: 1px solid black;
}
````

## Selector hermanos siguientes

El símbolo `~` Seleccionara a todos los hermanos siguientes a una etiqueta HTML en específico. Si quisiéramos seleccionar todos los `div` después de un `p` sería de la siguiente manera:

````css
p ~ div {
	background: yellow;
}
````

***

- Quiero aprender más sobre: ["CSS"](../00/css)
