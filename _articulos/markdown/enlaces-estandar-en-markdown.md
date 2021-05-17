---
title: Enlaces Markdown
date: 2021-04-25
tags: jekyll
layout: post-md
description: Pasos para enlazar archivos con enlaces markdown estándar.
---

# Enlaces Markdown

## Formato estándar

Primero escribes entre **[corchetes]** el texto que quieres mostrar. Luego, sin dejar ningún espacio, escribes entre **(paréntesis)** la ruta y el nombre del archivo.

Ejemplo: `[texto a mostrar](ruta/nombre-del-achivo)`

## Una carpeta arriba

Para subir de la ruta actual **"articulos/jekyll/enlaces.md"** ...

````md
    |--articulos/

        |--jekyll/

            |--enlaces.md
````

... a la ruta **"articulos/jekyll-index.md"** ...

````md
    |--articulos/

        |--index-jekyll.md
````

... sólo hay que escribir: **../nombre-del-archivo**


## Una carpeta abajo

Para bajar de la ruta actual **"articulos/jekyll/enlaces.md"** ...

````md
    |--articulos/

        |--jekyll/

            |--enlaces.md
````

... a la ruta **"articulos/jekyll/datos/data.md"** ...

````md
    |--articulos/

        |--jekyll/

            |--datos/

                |--data.md
````

... sólo hay que escribir **nombre-carpeta/nombre-archivo**

***

- [Quiero aprender más sobre: "Markdown"](../00/markdown)
- [Quiero aprender más sobre: "Jekyll"](../00/jekyll)
