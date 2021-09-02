---
title: "¿Cómo evitar el 'flash' color blanco antes de que cargue el tema oscuro de una página?"
date: 2021-06-12
categories: css
layout: post-css
description: "Guía para agregar correctamente un tema oscuro a tu página web."
---

# ¿Cómo evitar el 'flash' color blanco antes de que cargue el tema oscuro de una página?

Te encuentras en una página web que tiene el modo oscuro activado. El color de fondo de la página se ve de color casi negro. Recargas la página y durante un milisegundo el fondo de la página se pone de color blanco. Un blanco intenso que desentona con el resto de la página y te quema la vista. Luego de ese largo milisegundo la página aplica el tema oscuro. Todo vuelve a la normalidad.

## ¿Quién es el responsable de ese 'flash' color blanco?
- El encargado de aplicar el tema oscuro es JavaScript y, a veces, este tarda mucho tiempo en cargar.
- HTML y CSS cargan casi de inmediato y es posible que, durante un milisegundo, no se aplique el tema oscuro.

## Solución

- Agregar este código dentro de la etiqueta `<head>` en la cabecera del HTML.

````html
<!-- Esto ocultará el <body> y evitará ver el 'flash' -->
<style>
  body {
    visibility: hidden;
    opacity: 0;
  }
</style>
````

- Cargar el tema con JavaScript mientras el body sigue oculto.

````js
function aplicarTema() {
  // Aplicar el tema almacenado en "Local Storage".
}

function mostrarBody() {
  document.body.style.visibility = 'visible';
  document.body.style.opacity = 1;
}

window.addEventListener('DOMContentLoaded', function () {
  aplicarTema();
  mostrarBody();
});
````

## ¿Qué sucede si JavaScript se encuentra deshabilitado por el navegador?

La página permanecerá oculta. No se podrá ver ningún elemento. Por eso es necesario agregar estas líneas al final del `<body>`.

````html
<!-- Esto mostrará nuevamente el <body> -->
<noscript>
  <style>
    body {
      visibility: visible;
      opacity: 1;
    }
  </style>
</noscript>
````

Listo. No más 'flashes' mientras navegamos con el modo oscuro activado.

***

- Quiero aprender más sobre: ["CSS"](../00/css)
