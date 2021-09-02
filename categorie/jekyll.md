---
title: "Categoría: 'Jekyll'"
categories: jekyll
layout: basic
description: "Todos los posts de la categoría: 'Jekyll'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for categorie in item.categories %}
{% if categorie contains "jekyll" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
