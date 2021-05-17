---
title: Crear pages
date: 2021-04-26
tags: jekyll
layout: post-jekyll
description: Guía para crear las primeras páginas en Jekyll.
---

# Páginas por defecto en Jekyll

## Editar config

````ruby
defaults:
  -
    scope:
      type: posts
      path: _posts
    values:
      is_post: true
      layout: post
      permalink: /:categories/:title/
  -
    scope:
      type: pages
      path: _pages
    values:
      is_post: false
      layout: default
````

## Crear carpeta
- _pages

## Editar config
- `include: [_pages]`

## Crear markdown en _pages
- contact.md

````yaml
---
is_post: false
layout: default
---
````

Probar en GitHub

---

- [Quiero aprender más sobre: "Jekyll"](../00/jekyll)
