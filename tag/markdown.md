---
title: "Tag: 'Markdown'"
tag: markdown
layout: basic
description: "Todos los posts con el tag: 'Markdown'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for tag in item.tags %}
{% if tag contains "markdown" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}