---
title: Objeto "location" - DOM
date: 2021-05-18
categories: javascript dom
---

# Objeto "location" - DOM
El objeto location te devolverá información sobre la url.

Propiedades
- `href` (devuelve la url actual)
- `host` (devuelve el nombre del dominio y el puerto) (también te ayudará a saber si una url es externa o interna)
- `hostname` (devuelve el nombre del dominio)
- `port` (devuelve el puerto)
- `protocol` (devuelve el protocolo si es http o https )
- `origin` (devuelve el protocolo mas el dominio)
- `hash` (detecta si la pagina tiene hash (#))
- `pathname` (devuelve la ruta interna luego del dominio)
Métodos
- `reload()` (recarga la pagina)
- `assign(url)` (cambia la navegación)
- `replace(url)` (cambia la navegación)
