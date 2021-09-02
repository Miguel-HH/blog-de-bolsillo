---
title: "Categoría: 'Blog'"
categories: blog
layout: basic
description: "Todos los posts de la categoría: 'Blog'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for categorie in item.categories %}
{% if categorie contains "blog" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
