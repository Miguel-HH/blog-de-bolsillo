---
title: Crear colecciones en Jekyll
date: 2021-05-05
tags: jekyll
layout: post-jekyll
description: Pasos para crear 'collections' en Jekyll.
---

# Crear colecciones en Jekyll

## No uses "_posts" ni "_pages", usa "Collections"

Los **post** dentro de la carpeta **_posts** tiene que nombrarse con un formato de fecha muy específico. Esto complica el proceso de creación de artículos. La solución es usar la función **collections** que Jekyll tiene por defecto.

### 1. Editar `_config.yml`

Agregar en cualquier parte del archivo:

````ruby
collections:
  articulos:
    output: true
````

### 2. Crear `articulos.md` en la carpeta `_pages`.

Ejemplo de Front Matter:

````yaml
---
layout: post
title: "Artículos"
permalink: /articulos
---
````

### 3. Crear carpeta llamada `_articulos` en la cual se colocarán todos los archivos markdown.

Ejemplo de Front Matter en cada artículo `.md`:

````yaml
---
layout: post
title: "Crear colecciones en Jekyll"
categories: blog
date: 2021-04-25
---
````

###  4. Ejecutar servidor local de jekyll.

Escribir `jekyll serve` en la terminal.

Ingresar en la ruta `localhost:4000/` y cruzar los dedos.

---

- [Quiero aprender más sobre: "Jekyll"](../00/jekyll)
