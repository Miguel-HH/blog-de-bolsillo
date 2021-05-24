---
permalink: /tag
title: "Nube de tags"
date: 2021-05-05
layout: basic
---

# Nube de tags
<p class="tag-cloud">
{% assign tags =  site.articulos | map: 'tags' | sort_natural | join: ','  | split: ',' | uniq %}
{% for item in tags %}
  <a href="/blog-de-bolsillo/tag/{{ item }}">
    <span class="tag-line">
      <span class="tag-cuadro">{{ item }}</span>
    </span>
  </a>
{% endfor %}
</p>

## Front-end Web Development
- [CSS](00/css)
- [JavaScript](00/javascript)
- [Programación](00/programacion)
- [HTML](00/html)
- [Internet](00/internet)
- [Frontend](00/frontend)
- SASS

## User Experience Design
- [Copywriting](00/copywriting)
- [Organización](00/organizacion)
- [UX](00/ux)
- UI
- Marketing

## Blogging
- [Blogging](00/blog)
- [Jekyll](00/jekyll)
- [Markdown](00/markdown)
- Notion