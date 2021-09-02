---
title: "Categoría: 'UI'"
categories: ui
layout: basic
description: "Todos los posts de la categoría: 'UI'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for categorie in item.categories %}
{% if categorie contains "ui" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
