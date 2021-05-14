---
title: "Nodos - DOM"
tags: javascript dom
date: 2021-05-14
---

# Nodos - DOM
> El DOM no es parte de la especificación de JavaScript. El DOM es una web API.

Cuando te encuentras trabajando en el DOM es bueno llamar a los elementos como nodos.

### ¿Qué es un nodo?

Es toda etiqueta HTML pero, con nodos el tema es más profundo, ya que también entran en juego los atributos y el contenido de las etiquetas.

Cuando se habla de DOM hay que pensar en un árbol.

Cuando tienes seleccionado un elemento de HTML en la pestaña elementos de las developers tools, si vas a la consola y escribes `$0` podrás invocar ese elemento. Esto no es JavaScript, esto solo funciona dentro de las developers tools

Los nodos tienen una propiedad llamada `nodeType` que te devolverá un número que identifica el tipo de nodo.

La propiedad `nodeName` te servirá para validar un nodo, siempre en mayúsculas el nombre del nodo.

Los nodos mas importantes son:

-   ELEMENT_NODE. Su valor es 1
-   TEXT_NODE. Su valor es 3
-   COMMENT_NODE. Su valor es 8

> Toda etiqueta HTML es un elemento, pero el texto que esta contenido dentro de la etiqueta no es un elemento sino que es un nodo.
> 
> Todo elemento es un nodo, pero no todo nodo es un elemento.

### Ejemplos
-   nodeName
-   nodeType  
    https://developer.mozilla.org/es/docs/Web/API/Node/nodeType
    -   1. Elemento
    -   2. Atributo
    -   3. Texto
    -   8. Comentario