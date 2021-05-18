---
title: "Crear tags en Jekyll"
date: 2021-04-25
tags: jekyll
layout: post-jekyll
description: "Guía para crear tags en Jekyll sin usar plugins."
---

# Crear tags en Jekyll

## 1. Crear una nueva carpeta

Nombrarla "_includes" y colocar dentro 2 "HTML"

- "collecttags.html"

````html
{% raw %}
<head>
    {% assign rawtags = "" %}
    {% for post in site.posts %}
    {% assign ttags = post.tags | join:'|' | append:'|' %}
    {% assign rawtags = rawtags | append:ttags %}
    {% endfor %}
    {% assign rawtags = rawtags | split:'|' | sort %}

    {% assign site.tags = "" %}
    {% for tag in rawtags %}
    {% if tag != "" %}
    {% if tags == "" %}
    {% assign tags = tag | split:'|' %}
    {% endif %}
    {% unless tags contains tag %}
    {% assign tags = tags | join:'|' | append:'|' | append:tag | split:'|' %}
    {% endunless %}
    {% endif %}
    {% endfor %}
</head>
{% endraw %}
````

- "head.html"

````html
{% raw %}
<head>
    {% if site.tags != "" %}
    {% include collecttags.html %}
    {% endif %}
</head>
{% endraw %}
````

## 2. Crear una nueva carpeta

Nombrarla "tag"

Cada tag será nombrado "NombreDelTag.html"

````html
{% raw %}
    ---
    layout: tagpage
    title: "Tag: NombreDelTag"
    tag: NombreDelTag
    ---

    <div class="tagList">
        {% assign tags = site.tags[page.tag] | map: 'tags' | uniq %}
        {% for tag in tags %}
        {% if tag contains "NombreDelTag" %}
        <ul>
            {% for note in site.articulos %}
            {% if note.tags contains tag %}
            <li><a href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a></li>
            {% endif %}
            {% endfor %}
        </ul>
        {% endif %}
        {% endfor %}
    </div>
{% endraw %}
````

## 3. Posibles bugs

Cada vez que se cree un **tag**, no se creará automáticamente la página `/tag/tagespecifico`. Es necesario agregar el tag en tag/ y reiniciar el servidor ejecutando el comando `jekyll serve` en la terminal.

***

- Quiero aprender más sobre: ["Jekyll"](../00/jekyll)
