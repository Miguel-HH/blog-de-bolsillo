---
title: "¿Qué es el DOM?"
tags: javascript dom
date: 2021-05-14
---

# ¿Qué es el DOM?
DOM son las iniciales de Document Objet Model (modelo de objetos de documentos).

## ¿Qué es el Documento?
Todo el HTML es un documento.

## ¿Qué es el Objeto?
Es un elemento independiente con propiedades y métodos.

## ¿Qué es el Modelo?
Model se refiere a la estructura particular que tienen los objetos dentro del HTML.

En HTML toda etiqueta es un objeto en el DOM, y cada objeto puede tener hijos. Por ejemplo la etiqueta `<head>` es un objeto que dentro puede tener como hijos las etiquetas `<meta> <title>` y estos hijos también son objetos. La etiqueta `<body>` es otro objeto que dentro puede tener como hijos las etiquetas `<h1> <ul> <form>` y estas también son objetos.

> Document es una variable global que representa un objeto que contiene dentro todo lo que ves en la pagina web.

La propiedad `document.nombreEtiqueta` te permitirá acceder rápidamente a los elementos del DOM.

### Comandos
-   document
    -   document.doctype
    -   document.documentEement
    -   document.head
        -   document.charset
        -   document.title
    -   document.body
        -   document.links
        -   document.images
        -   document.getSelection()  
            toString()
    -   document.scripts
    -   document.styleSheets