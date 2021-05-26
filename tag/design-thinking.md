---
title: "Tag: 'Design thinking'"
tag: design-thinking
layout: basic
description: "Todos los posts con el tag: 'Design thinking'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for tag in item.tags %}
{% if tag contains "design-thinking" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
