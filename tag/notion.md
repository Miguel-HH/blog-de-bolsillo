---
title: "Tag: 'Notion'"
tag: notion
layout: basic
description: "Todos los posts con el tag: 'Notion'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for tag in item.tags %}
{% if tag contains "notion" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}