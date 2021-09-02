---
title: "Categoría: 'Índice'"
categories: indice
layout: basic
description: "Todos los posts de la categoría: 'Índice'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for categorie in item.categories %}
{% if categorie contains "indice" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
