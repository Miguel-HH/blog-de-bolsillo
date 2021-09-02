---
title: "Categoría: 'Internet'"
categories: internet
layout: basic
description: "Todos los posts de la categoría: 'Internet'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for categorie in item.categories %}
{% if categorie contains "internet" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
