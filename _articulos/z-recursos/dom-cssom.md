---
title: ¿Qué es CSSOM?
tags: javascript dom
date: 2021-05-17
---

# ¿Qué es CSSOM?
Es el modelo de objeto de CSS, es equivalente al DOM pero en CSS. Esto te permitirá modificar CSS desde JavaScript.

-   `style` es una propiedad que te permite acceder a los estilos de un elemento HTML, de un elemento en el DOM. Con la nomenclatura del punto y la propiedad CSS que quieras modificar, podrás trabajar con los estilos de CSS en JavaScript. Con el detalle que si la propiedad en CSS lleva guiones, deberás utilizar camelCase.

Por ejemplo: `title.style.color = 'red'`

Ejemplo de camelCase: `title.style.flexDirection = ''` (en CSS se escribe `flex-direction`)

-   `matchMedia()` te permitirá evaluar breakPoints de CSS.

Las mediaQuerys de CSS se usan con `matchMedia()`

Para trabajar con las `matchMedia()` deberás crear una constante y asignarle la `matchMedia()` y dentro de los paréntesis en una string pasas una mediaQuery de CSS.

Ej: `const mediumBp = matchMedia('(min-width: 640px) and (orientation: portrait)')`

`matches: boolean` (es una propiedad que te dice si se cumple o no una mediaQuery, esta devolverá true o false).

CSS no puede cambiar de posición un elemento en el DOM por lo tanto ahí en esos casos donde CSS no puede manipular, es donde podrías utilizar mediaQuerys con JavaScript.

-   `getComputedStyle()` te devuelve todos los estilos calculados de un elemento. No es lo mismo un estilo calculado que un estilo declarado.
-   `getBoundingClientRect()` te devuelve las dimensiones y posiciones exactas de un elemento.

Las propiedades `naturalWidth` y `naturalHeight` te devolverán el tamaño real de una imagen.
