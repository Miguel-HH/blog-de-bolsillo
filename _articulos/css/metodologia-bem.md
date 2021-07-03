---
title: "Metodología BEM para CSS"
date: 2021-06-28
tags: css
layout: post-css
description: "Definición de la 'Metodología BEM' para CSS."
---

# Metodología BEM para CSS
BEM es un estándar que nació para nombrar las clases de los elementos web.

## Bloque Elemento Modificador
Sintaxis: `Bloque__Elemento--Modificador`

### Bloque
Contenedor principal del componente que se esta creando.
Ejemplos: Modal, card, header, footer, menu, dropdown.

### Elemento
Partes del bloque, dentro de un bloque pueden haber muchos elementos que conforman la estructura del mismo.
Ejemplos: Icon, text, item, image, button, radio, input, link…

### Modificador
Diferentes variantes que puede tener un bloque o elemento.
Ejemplos: Active, hidden, blue, big, right, left, small.

## Buenas prácticas
- Evitar los 'Grandchild'.
- Los modificadores nunca se añaden sin la clase de bloque o elemento que los precede.
	- `bloque bloque--modificador` es correcto.
	- `bloque--modificador` no es correcto.

***

- Quiero aprender más sobre: ["CSS"](../00/css)
