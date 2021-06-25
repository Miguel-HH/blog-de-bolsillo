---
title: "Tag: 'Programación Orientada a Objetos'"
tag: poo
layout: basic
description: "Todos los posts con el tag: 'Programación Orientada a Objetos'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for tag in item.tags %}
{% if tag contains "poo" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
