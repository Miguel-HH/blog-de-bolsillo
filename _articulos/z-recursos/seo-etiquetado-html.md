---
title: "Etiquetado HTML para SEO"
tags: seo
date: 2021-05-10
---

# Etiquetado HTML para SEO

## Head
### Title
-   `<title>Título del documento</title>`
-   `<meta name="title" content="Título del documento">` ¡NO!
-   Incluir la **keyword** que nos interesan captar tráfico.
-   Es uno de los factores más importantes a nivel de página.
-   55 caracteres máximo (móviles). 70 en pc.
-   Puede cambiar en función de la búsqueda: https://support.google.com/webmasters/answer/35624?hl=es

### Meta etiquetas: aportan datos de la página en cuestión a los robots.
- Robots:
	- `<meta name="robots" content="noindex, nofollow">` Rastrea la página, no indexa y no rastrea los enlaces en ella. Mismo efecto `<meta name="robots" content="none">`
	- `<meta name="robots" content="index, follow">` Rastrea, indexa y rastrea los nodos que contiene la página.
	- Podemos hablarle exclusivamente a google bot, así: `<meta name="googlebot" content="noindex, nofollow">`
	- `<meta name="robots" content="nosnippet">` No muestra ningún fragmento en la SERP.
	- `<meta name="robots" content="noarchive">` No guarda una versión cacheada la página.
	- `<meta name="robots" content="noimageindex">` No permite que la página esté vinculada a ninguna imagen en las SERPs de imágenes.
	- Referencia: https://support.google.com/webmasters/answer/79812?hl=es-419
- Description:
	- `<meta name="description" content="descripcion en cuestion de la web">`
	- Aporta información en la snippet.
	- Google se vale de esta meta data para mostrarle a los usuarios información relevante acerca de la página.
	- Aumenta el CTR, es mejor para el posicionamiento.
	- Si no lo tienes, Google tomará lo primero que encuentre y entienda como contenido.
	- En ocasiones Google la modifica para incluir (en negritas) las kws que los usuarios han puesto en la consola.
- Keywords:
	- ¡BASTA! Desde el 2009 está deprecated: https://webmasters.googleblog.com/2009/09/google-does-not-use-keywords-meta-tag.html
- Datos estructurados:
	- Depende de la página, son los datos estructurados que necesitará.
	- Schema.org
	- No importa si son JSON-LD, Microformatos, RDFa.
	- Si lo hacemos correctamente y cumplimos otras características (popularidad, google my business con toda la información y participación de los usuarios, redes sociales vinculadas a nuestro site, página de wikipedia) podemos aparecer en el Knowledge Graph de Google.
	- Tool: https://rubenmerino.com/herramientas-seo/generador-datos-estructurados/
- Open Graph
	- Permite la transferencia de información entre tu sitio, las redes sociales y los buscadores.
	- Aporta información muy relevante del sitio como: titulo, descripción, tipo de contenido, localización geográfica, la imagen vinculada a la página en cuestión, autor de la publicación.
	- Tools:
		- Documentación oficial: http://ogp.me/
		- Generator: https://webcode.tools/open-graph-generator
		- Checker: https://smallseotools.com/open-graph/

## Body
### Headings
- h1: según google pon los h1 que necesites. Gracias a que HTML5 le aporta semántica al contenido, es normal que existan secciones que contengan h1.
	- https://www.youtube.com/watch?v=WsgrSxCmMbM
	- ¿Es obligatorio tener 1 o varios? Al menos 1. No tenerlo, se consideraría un error en SEO y, en gran sentido lo es.
- h2, h3 ... : los que se necesite o requiera para que el usuario entienda el contenido y lo disfrute.
- Un span o `<p>` maquillado con css en forma de heading, no es considerado como heading en google. Igualmente esto puede cambiar.

### Texto
-   Cantidad: **siempre es relativo**. Lo suficiente para aportar valor al usuario.
-   Investigar a la competencia, calcular media de palabras por página y compararla con la nuestra.
-   Prominencia de las kws:
	-   Refiere al lugar en donde están las kws ubicadas en nuestra página.
	-   De menos a más (F): title, url, headings, al comienzo del texto, alt de imágenes.
-   Densidad de las kws:
	-   Cantidad de veces que aparece una kw en una porción de texto
	-   Dejarla a la escritura natural, intentar no abusar de ellas. 2% es mucho.
**La prominencia es más importante que la densidad.**

### Imágenes
-   nombre de la imagen descriptiva y con la kw en lo posible
-   `<img src="img.png" alt="historia del seo">`
-   Texto alt descriptivo, así fueran colores entre productos similares.