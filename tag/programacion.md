---
title: "Tag: 'Programación'"
tag: programacion
layout: basic
description: "Todos los posts con el tag: 'Programación'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for tag in item.tags %}
{% if tag contains "programacion" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}