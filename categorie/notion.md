---
title: "Categoría: 'Notion'"
categories: notion
layout: basic
description: "Todos los posts de la categoría: 'Notion'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for categorie in item.categories %}
{% if categorie contains "notion" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
