---
title: Rastreabilidad (Crawl Budget)
categories: arquitectura-de-la-informacion
date: 2021-05-11
---

# Rastreabilidad (Crawl Budget)

¿Qué es? La rastreabilidad en el SEO es el simple hecho de que un bot pueda descubrir URLs en un sitio.

-   El trabajo del SEO es realizar una Arquitectura Web que sea fácilmente rastreable para los crawlers.

Esto beneficia a lo que se llama: Crawl Budget.

El Crawl Budget es, literalmente, el presupuesto de rastreo que asigna automáticamente el buscador al sitio en cuestión. Este presupuesto de rastreo se calcula, principalmente, identificando la frecuencia que el crawler visita y recorre nuestra web. Cuanta más frecuencia de rastreo tenga yo, más rápido google indexará mis páginas. Cuanto menos presupuesto de rastreo tenga asignado es posible que Google no llegue a rastrear toda mi web, siquiera.

En el caso de Google, el crawl budget es asignado en base a dos principales factores: Autoridad y Tráfico.

### Como aprovechar bien el Crawl Budget
- Performance
- Páginas rotas (404)
    - Indexadas por google pero ya no existentes en nuestro sitio web.
    - enlazadas internamente
- Redirecciones no controladas
	- Cadenas de redirecciones
		- Incorrecto:
			- http > http://www. > https > https://www !!
			- Post 1 > Post 2 > Post 3
        - Correcto:
			- http > https://www.
			- http://www. > https://www.
			- https:// > https://www.
			- Post 1 > Post 3
			- Post 2 > Post 3
    -   Controlar que siempre tengamos la menor cantidad posible de redirecciones.
-   URLs parametrizadas, filtros, folcsonomías controladas.
-   Con una buena estrategia de paginaciones.
    -   Correcta implementación del atributo rel en las etiquetas link en el head.
        -   `<link rel="prev" href="https://ejemplo.com/categoria/">`
        -   `<link rel="next" href="https://ejemplo.com/categoria/page/3">`
    -   Sitios chicos: numéricas secuenciales
    -   Sitios grandes: secuenciales agrupadas
    -   Scroll infinito (ejemplo: https://us.marca.com/claro/

### Como mejorar el Crawl Budget

-   Autoridad (Link Building)
-   Traffic acquisition
    -   Orgánico
    -   De pago
-   Fresh Content
    -   A nivel de sitio
    -   A nivel de página
-   Arquitectura web fácilmente rastreable
    -   Sin mucha profundidad de clicks

## Análisis y control de la rastreabilidad

### Herramientas de análisis de logs
- Google > Webmastertools > Rastreo > Estadísticas de rastreo:
    - https://www.google.com/webmasters/tools/crawl-stats?hl=es&siteUrl=https://nutricsalud.com/
- Seolyzer
    - http://seolyzer.io/
- Screaming Frog Log File Analyzer
    - https://www.screamingfrog.co.uk/log-file-analyser/
    - https://www.screamingfrog.co.uk/log-file-analyser/user-guide/
- FandangoSEO (Crawler y Log Analyzer)
- Deepcrawl (Crawler y Log Analyzer)
- Onecrawl (Crawler y Log Analyzer)

### Rastreables vs Rastreadas
1.  Descargamos las URLs que los crawlers nos proporcionan como indexables y las comparamos con las URLs que GSC > Cobertura nos lo brinda como válida (recomendable descargarse los datos).

### Rastreables vs Indexadas
1.  Descargamos las URLs que GSC a descubierto en el apartado de Cobertura y las enfrentamos con las URLs que han sido impresas en Google Search Console, en la parte de rendimiento.
2.  Descargamos las URLs indexables desde las herramientas y las enfrentamos con las URLs que han recibido hits según los log analyzer tools. Tenemos que validar que dicha URL cumple con los guidelines.
3.  Comprobar cache:url es una buena herramienta. Pero no es óptima a modo bulk.
4.  Hacer un site:url no te asegura que esté siendo rastreada de manera frecuente.
5.  Buscar la URL en Google Analytics (no es la más recomendable).
