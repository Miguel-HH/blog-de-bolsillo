---
title: "Tag: 'Blog'"
tag: blog
layout: basic
description: "Todos los posts con el tag: 'Blog'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for tag in item.tags %}
{% if tag contains "blog" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}