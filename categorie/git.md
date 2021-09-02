---
title: "Categoría: 'Git'"
categories: git
layout: basic
description: "Todos los posts de la categoría: 'Git'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for categorie in item.categories %}
{% if categorie contains "git" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
