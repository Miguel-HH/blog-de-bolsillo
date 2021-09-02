---
title: "¿Cómo escribir variables en CSS?"
date: 2021-05-29
categories: css
layout: post-css
description: "Guía para escribir variables en 'CSS'"
---

# ¿Cómo escribir variables en CSS?

- Las variables permiten reutilizar propiedades con sus valores.
- Esto te ahorrará mucho tiempo en el futuro

## Ejemplo

Pasos para declarar variables.

````css
:root{
	--colorfondo: red; /*Declarar la variable*/
}

h1 {
	background: var(--colorfondo) /*Utilizar la variable*/
}
````

***

- Quiero aprender más sobre: ["CSS"](../00/css)
