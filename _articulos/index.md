---
title: "Nube de tags"
date: 2021-05-06
categories: indice
layout: basic
description: "Nube de tags."
---

# Categorías
<p class="tag-cloud">
{% assign categories =  site.articulos | map: 'categories' | sort_natural | join: ','  | split: ',' | uniq %}
{% for item in categories %}
  <a href="/blog-de-bolsillo/categorie/{{ item }}">
    <span class="tag-line">
      <span class="tag-cuadro">{{ item }}</span>
    </span>
  </a>
{% endfor %}
</p>

## Desarrollo Web Frontend
- [CSS](00/css)
- [JavaScript](00/javascript)
- [Programación](00/programacion)
- [HTML](00/html)
- [Internet](00/internet)
- [Frontend](00/frontend)
- SASS

## Diseño de Experiencia de Usuario
- [Arquitectura de la información](00/arquitectura-informacion)
- [Copywriting](00/copywriting)
- [Design thinking](00/design-thinking)
- [UX](00/ux)
- [UI](00/ui)
- [Marketing](00/marketing)

## Blogging y más
- [Blogging](00/blog)
- [Jekyll](00/jekyll)
- [Markdown](00/markdown)
- [Notion](00/notion)
