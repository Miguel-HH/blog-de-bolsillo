---
title: "DOM traversing" o recorrer el DOM
categories: javascript dom
date: 2021-05-17
---

# "DOM traversing" o recorrer el DOM

DOM traversing significa recorrer el DOM es decir, obtener un elemento HTML y poder recorrer por los hermanos, padres, e hijos de este elemento.

-   Hijos
    -   `childNodes` (devuelve todos los nodos hijos)
    -   `chlidren` (devuelve solo los elementos hijos)
    -   `firstChild` (no necesariamente devuelve un elemento, pero siempre un nodo. Ese nodo podría ser texto o elemento)
    -   `firstElementChild` (devuelve siempre un elemento)
    -   `lastChild` (lo mismo que `firstChild` )
    -   `lastElementChild` (devuelve siempre un elemento)
    -   `hasChildNodes()` (devuelve un booleano dependiendo de si tiene hijos o no)
-   Hermanos
    -   `nextSibling` (devuelve el siguiente nodo hermano)
    -   `nextElementSibling` (devuelve el siguiente elemento hermano)
    -   `previousSibling` (devuelve el anterior nodo hermano)
    -   `previousElementSibling` (devuelve el anterior elemento hermano)
-   Padres
    -   `parentNode` (devuelve el nodo que sea padre)
    -   `parentElement` (devuelve el elemento padre)
