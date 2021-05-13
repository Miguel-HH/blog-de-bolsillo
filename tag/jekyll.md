---
layout: basic
title: "Tag: jekyll"
tag: jekyll
---

<h1>{{ page.title }}</h1>

{% for item in site.articulos reversed%}
{% for tag in item.tags %}
{% if tag contains "jekyll" %}
<ul>
    <li class="tag-list-date">
        <p class="first-date">
            {% assign m = item.date | date: "%-m" %}
            {{ item.date | date: "%-d" }}
            {% case m %}
            {% when '1' %}Ene
            {% when '2' %}Feb
            {% when '3' %}Mar
            {% when '4' %}Abr
            {% when '5' %}May
            {% when '6' %}Jun
            {% when '7' %}Jul
            {% when '8' %}Aug
            {% when '9' %}Set
            {% when '10' %}Oct
            {% when '11' %}Nov
            {% when '12' %}Dic
            {% endcase %}
            {{ item.date | date: "%Y" }}
        </p>
        <a class="link-list" href="{{ item.url | prepend: site.baseurl }}">
            {{ item.title }}
        </a>
        <p class="push">
            {% for tag in item.tags %}
            {% capture tag_name %}{{ tag }}{% endcapture %}
            <a href="/blog-de-bolsillo/tag/{{ tag_name }}">
                <span class="tag-highligher">
                    <nobr class="tag-cuadro">{{ tag_name }}</nobr>
                </span>
            </a>
            {% endfor %}
        </p>
    </li>
</ul>
{% endif %}
{% endfor %}
{% endfor %}