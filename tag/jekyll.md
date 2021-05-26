---
title: "Tag: 'Jekyll'"
tag: jekyll
layout: basic
description: "Todos los posts con el tag: 'Jekyll'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for tag in item.tags %}
{% if tag contains "jekyll" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
