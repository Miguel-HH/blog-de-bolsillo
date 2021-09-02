---
title: "Categoría: 'HTML'"
categories: html
layout: basic
description: "Todos los posts de la categoría: 'HTML'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for categorie in item.categories %}
{% if categorie contains "html" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
