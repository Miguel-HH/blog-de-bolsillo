---
title: "Categoría: 'Programación'"
categories: programacion
layout: basic
description: "Todos los posts de la categoría: 'Programación'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for categorie in item.categories %}
{% if categorie contains "programacion" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
