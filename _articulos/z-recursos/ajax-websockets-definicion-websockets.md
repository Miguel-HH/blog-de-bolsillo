---
title: "Definición de Websockets"
date: 2021-05-26
tags: ajax websockets
---

# Definición de Websockets

Es una tecnología que proporciona un canal de comunicación bidireccional y full-duplex sobre un único socket TCP. Está diseñada para ser implementada en navegadores y servidores web, pero puede utilizarse por cualquier aplicación cliente/servido. Cuando se trabaja con AJAX siempre se tiene una comunicación half-duplex, es decir solo por un canal es posible enviar información y recibirla, pero no enviar y recibir al mismo tiempo, sin embargo, con websockets esto no es un problema, pues si es posible enviar y recibir información al mismo tiempo.

## Ventajas
- Mejora la comunicación para desarrollos como un chat, pues no es necesario hacer múltiples peticiones en espera de una respuesta, pues el canal está escuchando activamente recibiendo en el tiempo real. Lo mismo sucede con un juego.
- Cortos periodos de carga.

## Usos
- Juegos en línea.
- Plataformas de compra y de venta.
- Chats de atención al usuario.
- Tickers de noticias deportivas en directo.
- Actualizaciones en tiempo real de las redes sociales.

WebSocket no es un sustituto total de HTTP, pero puede usarse como canal de comunicación eficiente y bidireccional siempre que se necesite dar o recibir información en tiempo real.

## AJAX o Websockets
Dependerá de la necesidad:
- AJAX: Consumo de APIs o solicitudes específicas.
- Websockets: Mantenerse escuchando información que sea necesaria recibir, enviar o actualizar en tiempo real.
