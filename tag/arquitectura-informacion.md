---
layout: basic
title: 'Tag: "Arquitectura de la información"'
tag: arquitectura-informacion
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for tag in item.tags %}
{% if tag contains "arquitectura-informacion" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}