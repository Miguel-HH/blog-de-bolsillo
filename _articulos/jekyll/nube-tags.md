---
title: "Nube de tags en Jekyll"
date: 2021-05-02
categories: jekyll
layout: post-jekyll
description: "Guía para crear una 'nube de tags' en la cual se mostrarán todos los tags en Jekyll."
---

# Nube de tags en Jekyll

````html
{% raw %}
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
{% endraw %}
````

***

- Quiero saber más de: ["Jekyll"](../00/jekyll)
