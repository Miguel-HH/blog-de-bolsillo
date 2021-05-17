---
title: Eventos del DOM y navegador
tags: javascript dom
date: 2021-05-17
---

# Eventos del DOM y navegador

El evento principal para el DOM es el siguiente:

`DOMContentloaded` (es un evento que ocurre cuando carga todo el DOM). Este evento es importante cuando no sabes en qué momento existirá el elemento al que vas a llamar.

Los principales eventos del navegador son los siguientes:

-   `load` ( este es parecido al `DOMContentloaded` pero, este se ejecuta cuando carga toda la página).
-   `scroll` ( se ejecuta cuando haces scroll ).
-   `resize` ( se ejecuta cuando redimensionas la pantalla ).

> `Inner` se refiere a la parte interna del navegador, la ventana o el viewport, y `outer` es toda la ventana del navegador en el sistema operativo.

## Eventos de formulario
Los principales eventos de formulario son los siguientes:

-   `submit` ( se ejecuta cuando el formulario se envía)
-   `change` ( se ejecuta cuando un input del formulario cambia de valor)
-   `focus` ( se ejecuta al hacer click en un input)
-   `blur` ( se ejecuta cuando sales del focus)
-   `reset` ( se ejecuta cuando reseteas el formulario)

## Eventos multimedia
Los principales eventos multimedia son los siguientes:

-   `play` ( se ejecuta con evento click )
-   `pause` ( se ejecuta con evento click )

Para trabajar con estos controles de `play` & `pause` crearás una constante para guardar tus elementos creados previamente en `HTML`. Con el método `getElemetById` llamarás los id de tú `HTML` necesarios para trabajar con estos controles.

Luego de llamar tus elementos, crearás un método `addEventListener` con el parámetro `'click'` seguido de una función a la cual le pasarás el nombre de la constante creada seguido del evento `.play()` y ya quedará listo el botón de play.

Con el botón de pausa se haría el mismo procedimiento pero esta vez seguido del evento `.pause()`

> Los eventos aparte de ser escuchados también podrán ser ejecutados.
