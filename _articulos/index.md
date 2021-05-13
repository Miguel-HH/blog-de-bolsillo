---
title: "Inicio"
tags: indice
date: 2021-05-06
layout: basic
---

# Nube de tags

<p class="tag-nube">
{% assign tags =  site.articulos | map: 'tags' | sort_natural | join: ','  | split: ',' | uniq %}
{% for item in tags %}
  <a href="/blog-de-bolsillo/tag/{{ item }}">
    <span class="tag-highligher">
      <span class="tag-cuadro">{{ item }}</span>
    </span>
  </a>
{% endfor %}
</p>

---

## Front-end Web Development
- [CSS](0/css)
- [JavaScript](0/javascript)
- [Programación](0/programacion)
- [HTML](0/html)
- [Internet](0/internet)
- [Frontend](0/frontend)
- SASS

## User Experience Design
- [Copywriting](0/copywriting)
- [Organización](0/organizacion)
- [UX](0/ux)
- UI
- Marketing

## Blogging
- [Blogging](0/blog)
- [Jekyll](0/jekyll)
- [Markdown](0/markdown)
- Notion