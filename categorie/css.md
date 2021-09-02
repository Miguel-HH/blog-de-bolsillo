---
title: "Categoría: 'CSS'"
categories: css
layout: basic
description: "Todos los posts de la categoría: 'CSS'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for categorie in item.categories %}
{% if categorie contains "css" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
