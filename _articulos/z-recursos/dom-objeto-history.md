---
title: Objeto "history" - DOM
date: 2021-05-18
categories: javascript dom
---

# Objeto "history" - DOM
Este objeto contiene el historial de navegación de la pestaña, no de todo el navegador. Y no es para devolver un historial con todas las url sino, es más para detectar las flechas atrás y adelante.

## Propiedades
- `length` (cantidad de elementos incluye la página actual)

## Métodos
- `back()` (te manda atrás)
- `forward()` (te manda adelante)
- `go(position)` (te manda a la posición que le indiques, siendo -1 = `back` y 1 = `forward`)