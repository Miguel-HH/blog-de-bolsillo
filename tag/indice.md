---
title: "Tag: 'Índice'"
tag: indice
layout: basic
description: "Todos los posts con el tag: 'Índice'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for tag in item.tags %}
{% if tag contains "indice" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
