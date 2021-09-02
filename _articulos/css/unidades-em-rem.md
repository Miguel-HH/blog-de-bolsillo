---
title: "La gran diferencia entre las unidades de medida 'em' y 'rem' en CSS"
date: 2021-05-29
categories: css
layout: post-css
description: "Fundamentos para entender las unidades de medida 'em' y 'rem'."
---

# La gran diferencia entre las unidades de medida 'em' y 'rem' en CSS

Para definir el tamaño de una letra utilizamos la propiedad `font-size`.

## rem

> Es mejor utilizarlos para tamaños de fuente

Hace referencia al estándar de cada navegador cuando a tamaño de texto se refiere, suele ser 16px.

Por ejemplo, `3rem` sería el equivalente al 300% del tamaño "root" de fuente proporcionado por el navegador, o sea, 48 pixeles.

`1rem = 16px`

## em

> Es mejor utilizarlos en márgenes y paddings

La unidad `em` hace referencia al tamaño de fuente en el contexto al que se le aplica. Por ejemplo, en un párrafo que tenga un `font-size` de 10px, asignar un `span` dentro de ese párrafo que tenga por tamaño `2em` tendrá un total de pixeles de 20.

`1em = 100% del tamaño de letra relativo al contexto`

***

- Quiero aprender más sobre: ["CSS"](../00/css)
