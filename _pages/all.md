---
title: "Artículos recientes"
permalink: /all
date: 2021-04-25
---

# Últimas publicaciones

<div class="date-name-tags">
  <ul>
  {% for page in site.articulos reversed%}
    <li class="tag-list-date">
      <p class="list-date">
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
      <div>
        <a href="{{ page.url | prepend: site.baseurl }}">
        {{ page.title }}
        </a>
        <p class="tag-list">tags: 
        {% for tag in page.tags %}
            {% capture tag_name %}{{ tag }}{% endcapture %}
            <a href="/blog-de-bolsillo/tag/{{ tag_name }}">
              <span class="tag-line">
                <span class="tag-cuadro">{{ tag_name }}</span>
              </span>
            </a>
        {% endfor %}
        </p>
      </div>
    </li>
  {% endfor %}
  </ul>
</div>