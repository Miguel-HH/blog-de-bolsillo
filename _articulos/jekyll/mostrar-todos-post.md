---
title: "Mostrar todos los post en Jekyll"
date: 2021-04-25
categories: jekyll
layout: post-jekyll
description: "Guía para crear una lista en la que se muestren todos los post en Jekyll."
---

# Mostrar todos los post en Jekyll

````html
{% raw %}
<div class="date-name-tags">
  <ul>
  {% for page in site.a reversed%}
    <li class="tag-list-date">
      <p class="first-date">
        {% assign m = page.date | date: "%-m" %}
        {{ page.date | date: "%-d" }}
        {% case m %}
        {% when '1' %}Ene
        {% when '2' %}Feb
        {% when '3' %}Mar
        {% when '4' %}Abr
        {% when '5' %}May
        {% when '6' %}Jun
        {% when '7' %}Jul
        {% when '8' %}Aug
        {% when '9' %}Set
        {% when '10' %}Oct
        {% when '11' %}Nov
        {% when '12' %}Dic
        {% endcase %}
        {{ page.date | date: "%Y" }}
      </p>
      <a class="link-list" href="{{ page.url | prepend: site.baseurl }}">
        {{ page.title }}
      </a>
      <p class="push">
        {% for tag in page.tags %}
            {% capture tag_name %}{{ tag }}{% endcapture %}
            <a href="/blog/tag/{{ tag_name }}">
              <span class="tag-line">
                <span class="tag-cuadro">{{ tag_name }}</span>
              </span>
            </a>
        {% endfor %}
      </p>
    </li>
  {% endfor %}
  </ul>
</div>
{% endraw %}
````

***

- Quiero aprender más sobre: ["Jekyll"](../2/0-index-jekyll)
