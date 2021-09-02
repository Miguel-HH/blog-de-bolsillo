---
title: "Tag: 'React.js'"
tag: react
layout: basic
description: "Todos los posts con el tag: 'React.js'."
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for tag in item.tags %}
{% if tag contains "react" %}
<ul>
    {% include list-date-tag.html %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
