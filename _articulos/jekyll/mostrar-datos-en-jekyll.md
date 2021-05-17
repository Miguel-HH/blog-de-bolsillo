---
title: Mostrar datos en Jekyll
date: 2021-04-26
tags: jekyll
layout: post-jekyll
description: Crear datos en formato liquid para visualizar en Jekyll.
---

# Mostrar datos en Jekyll

## Crear data

- Crear una carpeta llamada `_data`.
- Crear dentro un archivo llamado `skills.yml`.

````yml
- name: dato1
  rating: 9
- name: dato2
  rating: 8
- name: dato3
  rating: 7
````

## Llamar data

- Código:

````html
{% raw %}
    <ul>
        {% for skill in site.data.skills %}
        <li class="skill">
        {{ skill.name }} - {{ skill.rating }}
        </li>
        {% endfor %}
    </ul>
{% endraw %}
````

***

- [Quiero aprender más sobre: "Jekyll"](../00/jekyll)
