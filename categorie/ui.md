---
layout: basic
title: "Tag: 'UI'"
tag: ui
description: "Todos los posts con el tag: 'UI'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for tag in item.tags %}
{% if tag contains "ui" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}