---
title: Objeto "window" - DOM
date: 2021-05-18
tags: javascript dom
---

# Objeto "window" - DOM
El objeto window es el objeto de más alto nivel en JavaScript en el navegador pero, solo en el navegador por lo tanto no en el servidor con node.js ya que no existe el objeto window en el servidor.

En node.js existe el objeto global que es el equivalente al objeto window.

> Todos los objetos descienden de window.

## Objetos
- `console` (Es el objeto que entrega información en consola)
- `navigator` (Es el objeto que da información sobre el navegador)
- `location` (Te da información sobre la url de la pagina en la que te encuentres)
- `history` (Te da información sobre el historial del navegador)

## Métodos
- `open()` (Permite abrir una nueva instancia (ventana) del navegador)
- `close()` (Permite cerrar una instancia (ventana) que se haya abierto únicamente con `open()` )
- `alert(message)` (Muestra un mensaje en modo de alerta)
- `confirm(message)` (Devuelve un modal de confirmación y un booleano dependiendo de la selección del usuario)
- `prompt(message)` (manda un mensaje y guarda la respuesta del usuario en una variable)
