---
title: "Propiedad CSS: 'box-sizing'"
date: 2021-05-29
categories: css
layout: post-css
description: "Fundamentos para prender la propiedad CSS: 'box-sizing'"
---

# Propiedad CSS: 'box-sizing'

Esta propiedad permite establecer donde el navegador implementará los márgenes, border y padding.

Un elemento de tipo bloque genera tres cajas: el content-box, el padding-box y el border-box. De manera predeterminada, el navegador modifica las dimensiones del content-box y por encima suma las dimensiones del resto de propiedades del elemento de bloque.

Para que las dimensiones determinadas por el autor se respeten es recomendado usar border-box.

````css
.box{
	box-sizing: border-box;
}
````

***

- Quiero aprender más sobre: ["CSS"](../00/css)
