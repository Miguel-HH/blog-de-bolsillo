---
title: "Categoría: 'Copywriting'"
categories: copywriting
layout: basic
description: "Todos los posts de la categoría: 'Copywriting'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for categorie in item.categories %}
{% if categorie contains "copywriting" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
