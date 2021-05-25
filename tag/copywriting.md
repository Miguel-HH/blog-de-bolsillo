---
title: "Tag: 'Copywriting'"
tag: copywriting
layout: basic
description: "Todos los posts con el tag: 'Copywriting'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for tag in item.tags %}
{% if tag contains "copywriting" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}