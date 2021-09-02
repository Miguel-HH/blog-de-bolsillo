---
title: "Categoría: 'WordPress'"
categories: wordpress
layout: basic
description: "Todos los posts de la categoría: 'WordPress'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for categorie in item.categories %}
{% if categorie contains "wordpress" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
