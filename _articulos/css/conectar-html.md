---
title: "2 maneras de conectar CSS con HTML"
date: 2021-05-29
tags: css
layout: post-css
description: "2 maneras de inclui una hoja de estilos CSS con un archivo HTML"
---

# 2 maneras de conectar CSS con HTML

## 1. Incluir la ruta del archivo en el encabezado del HTML

Sólo se puede incluir entre la etiqueta `<head>`

````html
<head>
    <link rel="stylesheet" href="style.css">
</head>
````

## 2. Incluir la ruta en cualquier parte del HTML

Este código se puede incluir en el `<body>`

````html
<style>
    @import url(style.css);
</style>
````

***

- Quiero aprender más sobre: ["CSS"](../00/css)
