---
title: "Virtual DOM"
date: 2021-05-05
tags: dom
---

# Virtual DOM

Es una copia exacta del DOM guardada en memoria.

## DOM

Document Object Model.

Es la estructura de como se representa nuestro documento html en el navegador.

## Importancia del Virtual DOM

¿Cómo se qué partes del DOM han cambiado?

"Si yo no tuviera el virtual DOM, tendría que ir a buscar en todo el DOM qué ha cambiado y para saber qué ha cambiado tendría que recorrer **todo** el DOM real y eso sería fulminante para el navegador."

> "El Virtual DOM es un punto intermedio almacenado en la memoria que nos permite manipular esos cambios de tal manera que en el DOM sólo se vuelva a renderizar la parte que nos interesa."

"Una vez que el DOM ha sido renderizado nuevamente y tenemos una estructura HTML, otra vez tenemos una copia fiel en la memoria y otra vez tenemos igualados tanto el DOM como el Virtual DOM, esperando que el estado de la aplicación vuelva a cambiar y tengamos que volver a renderizar algunos de estos elementos."

---

Fragmento de la clase de **Beto Quiroga** en: https://ed.team/cursos/react/01/02