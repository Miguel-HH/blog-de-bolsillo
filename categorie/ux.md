---
title: "Categoría: 'UX'"
categories: ux
layout: basic
description: "Todos los posts de la categoría: 'UX'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for categorie in item.categories %}
{% if categorie contains "ux" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
