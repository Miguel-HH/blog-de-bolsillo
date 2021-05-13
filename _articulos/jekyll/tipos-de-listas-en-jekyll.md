---
title:  "Listas en Jekyll"
date: 2021-04-25
tags: jekyll
layout: post-jekyll
---

# Listas Automáticas

## Lista sin previsualización

````html
{% raw %}
    <ul>
    {% for post in site.posts %}
        <li>
            <a href="{{ post.url | remove_first:'/'}}" class="post-preview">
            {{ post.title }}</a>
        </li>
    {% endfor %}
    </ul>
{% endraw %}
````

## Lista con previsualización

````html
{% raw %}
    <ul>
    {% for post in site.posts %}
        <li>
            <a href="{{ post.url | remove_first:'/'}}">{{ post.title }}</a>
            {{ post.excerpt }}
        </li>
    {% endfor %}
    </ul>
{% endraw %}
````

---

- [Quiero aprender más sobre: "Jekyll"](../00/jekyll)