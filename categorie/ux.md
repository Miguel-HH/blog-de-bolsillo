---
layout: basic
title: "Tag: 'UX'"
tag: ux
description: "Todos los posts con el tag: 'UX'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for tag in item.tags %}
{% if tag contains "ux" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
