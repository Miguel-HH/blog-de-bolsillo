---
title: "4 maneras de aplicar CSS en HTML"
date: 2021-05-29
categories: html
layout: post-html
description: "4 maneras de aplicar estilos CSS a un archivo HTML."
---

# 4 maneras de aplicar CSS en HTML

## 1. Enlace externo en la cabecera

Incluir dentro de la etiqueta `<head>`

````html
<head>
	...
    <link rel="stylesheet" href="style.css">
	...
</head>
````

## 2. Enlace externo en el cuerpo

Este código se puede incluir en el `<body>`

````html
<style>
    @import url(style.css);
</style>
````

## 3. CSS incrustado

Incrustar dentro de la cabera HTML con las etiquetas `<style></style>`

````html
<html>
	<head>
		<title>CSS incrustado en la cabecera</title>
		<style> p { color: green; } </style>
	</head>
	<body>
		<p>Párrafo de color verde.</p>
	</body>
</html>
````

## 4. CSS en línea

Este código se puede incluir en cualquier etiqueta HTML.

````html
<p style="color:red">Párrafo de color rojo.</p>
````

***

- Quiero aprender más sobre: ["HTML"](../00/html)
