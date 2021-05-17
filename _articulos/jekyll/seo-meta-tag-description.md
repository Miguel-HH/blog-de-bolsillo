---
title: Crear meta tag "description" en Jekyll
date: 2021-05-15
tags: jekyll
layout: post-jekyll
description: Guía para crear un meta tag 'description' el cual mejorará el SEO de la página.
---

# Crear meta tag "description" en Jekyll

````yaml
---
description: Escribir 'descripción'.
---
````

- Esto generará un meta tag llamado "description" que sólo es visible para los motores de búsqueda.
- Para evitar errores de sintaxis es recomendable utilizar 'comillas simples' en vez de las "comillas dobles".

````html
<meta name="description" content="Escribir 'descripción'.">
````

## "Comillas"

````html
<title>Las comillas "dobles" o 'simples'</title>
<h1>no generan errores de sintaxis</h1>
<h2>en las etiquetas "title"</h2>
<h3>ni tampoco en los 'headings'</h3>
````

***

- [Quiero aprender más sobre: "Jekyll"](../00/jekyll)
