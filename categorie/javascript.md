---
title: "Tag: 'JavaScript'"
tag: javascript
layout: basic
description: "Todos los posts con el tag: 'JavaScript'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for tag in item.tags %}
{% if tag contains "javascript" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
