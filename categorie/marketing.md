---
title: "Categoría: 'Marketing'"
categories: marketing
layout: basic
description: "Todos los posts de la categoría: 'Marketing'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for categorie in item.categories %}
{% if categorie contains "marketing" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
