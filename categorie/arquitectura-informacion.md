---
title: "Categoría: 'Arquitectura de la información'"
categories: arquitectura-informacion
layout: basic
description: "Todos los posts de la categoría: 'Arquitectura de la información'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for categorie in item.categories %}
{% if categorie contains "arquitectura-informacion" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
