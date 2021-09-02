---
title: "Categoría: 'HTTP'"
categories: http
layout: basic
description: "Todos los posts de la categoría: 'HTTP'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for categorie in item.categories %}
{% if categorie contains "http" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
