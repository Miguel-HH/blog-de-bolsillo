---
title: "Nube de tags"
date: 2021-05-06
tags: indice
layout: basic
---

# Nube de tags

<p class="tag-cloud">
{% assign tags =  site.articulos | map: 'tags' | sort_natural | join: ','  | split: ',' | uniq %}
{% for item in tags %}
  <a href="/blog-de-bolsillo/tag/{{ item }}">
    <span class="tag-highligher">
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
- [Organización](00/organizacion)
- [UX](00/ux)
- [UI](00/ui)
- [Marketing](00/marketing)

## Blogging y más
- [Blogging](00/blog)
- [Jekyll](00/jekyll)
- [Markdown](00/markdown)
- [Notion](00/notion)
