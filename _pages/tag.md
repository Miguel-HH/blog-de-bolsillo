---
title: "Nube de tags"
date: 2021-05-05
permalink: /tag
---

# Nube de tags

<p class="tag-nube">
{% assign tags =  site.articulos | map: 'tags' | sort_natural | join: ','  | split: ',' | uniq %}
{% for item in tags %}
  <a href="/blog/tag/{{ item }}">
    <span class="tag-highligher">
      <span class="tag-cuadro">{{ item }}</span>
    </span>
  </a>
{% endfor %}
</p>