---
title: "Incluir 'hojas de estilo CSS' en Jekyll"
date: 2021-04-26
tags: jekyll css
layout: post-css
description: "Agregar estilos CSS en Jekyll."
---

# Incluir 'hojas de estilo CSS' en Jekyll

## Crear carpetas
- /assets/styles/main.scss
- _sass/_general.scss

## editar main.scss
- Es muy importante colocar un bloque front matter vacío al inicio para que Jekyll procese el archivo.

````scss
---

---

@import 'general';
````

## Editar _general.scss

````scss
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-size: 18px;
  font-family: Arial;
}
````

## Agregar en default

````html
<link rel="stylesheet" type="text/css" href="/assets/styles/main.css">
````

## Agregar en post.html

````html
<link rel="stylesheet" href={{ "/assets/styles/main.css" | relative_url }}>
````

***

- Quiero aprender más sobre: ["Jekyll"](../00/jekyll)
- Quiero aprender más sobre: ["SASS"](../00/sass)
- Quiero aprender más sobre: ["CSS"](../00/css)
