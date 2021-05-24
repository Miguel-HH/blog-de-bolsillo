---
title: "Timers - DOM"
date: 2021-05-19
tags: javascript dom
---

# Timers - DOM

Los timers permiten ejecutar acciones después de un tiempo o también, ejecutar acciones que se repitan. Existen 2 timers

-   `setTimeOut(callback,ms)` (ejecuta lo que esta en el callback después de cierta cantidad de mili segundos)
-   `setInterval(callback,ms)` (ejecuta una función varias veces con un intervalo indicado en mili segundos) `setInterval`

> Es una buena práctica validar siempre los elementos que traigas del DOM.

**Porque si alguien manipula el HTML y estos objetos dejan de existir, entonces toda la aplicacion JS deja de funcionar.**
