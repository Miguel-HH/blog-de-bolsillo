---
title: "Tag: 'HTTP'"
tag: http
layout: basic
description: "Todos los posts con el tag: 'HTTP'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for tag in item.tags %}
{% if tag contains "http" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
