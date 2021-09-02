---
title: "Categoría: 'Design thinking'"
categories: design-thinking
layout: basic
description: "Todos los posts de la categoría: 'Design thinking'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for categorie in item.categories %}
{% if categorie contains "design-thinking" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
