---
title: "Tag: 'Frontend'"
tag: frontend
layout: basic
description: "Todos los posts con el tag: 'Frontend'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for tag in item.tags %}
{% if tag contains "frontend" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
