---
title: "Nube de tags en Jekyll"
date: 2021-05-02
tags: jekyll
layout: post-jekyll
---

# Nube de tags en Jekyll

````html
{% raw %}
{% assign tags =  site.a | map: 'tags' | sort_natural | join: ','  | split: ',' | uniq %}
{% for item in tags %}
    <ul>
        <a href="/blog/tag/{{ item }}">
            <span class="tag-highligher">
                <span class="tag-cuadro">{{ item }}</span>
            </span>
        </a>
    </ul>
{% endfor %}
{% endraw %}
````

---

- [Quiero saber más de: "Jekyll"](../0/jekyll)