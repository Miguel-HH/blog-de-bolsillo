---
title: "Categoría: 'Programación Orientada a Objetos'"
categories: poo
layout: basic
description: "Todos los posts de la categoría: 'Programación Orientada a Objetos'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for categorie in item.categories %}
{% if categorie contains "poo" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
