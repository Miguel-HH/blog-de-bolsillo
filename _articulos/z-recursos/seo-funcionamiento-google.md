---
title: "¿Cómo funciona el motor de busqueda de Google?"
tags: seo
date: 2021-05-10
---

# ¿Cómo funciona el motor de busqueda de Google?
    
https://www.google.com/intl/es_es/search/howsearchworks/
    
## 1. - Descubrimiento y almacenamiento. Googlebot.
- Nodo a nodo va descubriendo páginas web.
- Parsea el contenido. ¡Problemas de renderizado aquí!
- A medida que va analizando la página, los demás nodos (links) los va colocando en una cola de rastreo, para analizarla cuando termine la actual.
- ¿Cómo descubre googlebots mi web?
- Enlaces externos.
- Google Search Console
- Robots.txt
- Sitemaps

## 2. - Indexación
Caffeine: sistema de indexación. Indexación: ordenar una lista en base a un criterio.
- Ordena o clasifica las páginas web en base a sus directrices de clasificación:
- Analiza:
	- El contenido de la web
	- El EAT - Competencia, Autoridad y Confianza del sitio.
	- ¿El Pagerank?
	- Nivel Global

## Aclaraciones
- Problemas de renderización por Javascript: googlebot
- Problemas de indexación: Contenido dinámico, parámetros, etiquetas, facetas, etc., pagerank, arquitectura web.
- Robots.txt: indexa, pero no parsea (no clasifica).
- meta robots noindex: no indexa, pero sigue los nodos en la página
- meta robots nofollow: indexa, pero no sigue los nodos dentro de la página.
- Truco: `<meta name="robots" content="none"> = <meta name="robots" content="noindex, nofollow">`

### “Pasos del motor de búsqueda de Google”
- Descubrimiento o rastreo y almacenamiento: explica cómo los googlebot descubren las páginas y parsean el contenido. También hace referencia a cómo te descubre Google y la función de los nodos (enlaces) sobre esto, la forma de almacenar a través de Google Search Console, la web en el momento que se registra la propiedad y se valida el dominio. Por otro lado utiliza herramientas como los sitemaps para descubrir nodos o el Robot.Txt que permite la interpretación del contenido del espacio que le indiques.
- Indexación: ordenar una lista basándose en un criterio. El sistema de indexación de los motores de búsqueda de Google se conoce como Caffeine y lo que hace es rankear (ordenar) basándose en los guidelines. ¿Qué analiza este sistema? El contenido y el EAT(expertise, authority, trustworthiness).

### "Problemas de renderización e indexación"
En este capítulo plantea diferentes problemas de renderización por JavaScript, de indexación o como en el caso de los Robots.txt que indexa, pero no parsea.

"Meta robots noindex vs Meta robots nofollow"

- Meta robots noindex: no indexa, pero sigue los nodos en la página.
- Meta robots nofollow: indexa, pero no sigue los nodos dentro de la página.