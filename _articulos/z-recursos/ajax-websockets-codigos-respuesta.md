---
title: "Códigos de respuesta"
date: 2021-05-18
categories: ajax websockets
---

# Códigos de respuesta
Identifican cómo fue tratada la información solicitada o enviada, además, permiten identificar qué sucedió en el servidor y cómo fue recibida la misma. Estos códigos son divididos en 5 grupos:

## Respuestas Informativas
Información brindada por el servidor, indican que el servidor ha recibido los encabezados de la petición, se identifican con los valores 1XX - 199.

## Peticiones correctas
Estos códigos de estado indican que la petición fue recibida correctamente, entendida y aceptada. Se identifican con los valores 2XX - 299.

## Redirecciones
Cuando el servidor te dirige o redirecciona a otro sitio, indica que una acción subsecuente necesita efectuarse por el agente de usuario para completar la petición. Se identifican con los valores 3XX - 399.

## Errores del cliente
Muestra que el cliente realizó de manera errónea una petición, es decir, la solicitud contiene sintaxis incorrecta o no puede procesarse, se identifican con los valores 4XX - 499.

## Errores del servidor
Indica un problema con el servidor, muestran que el servidor falló al completar una solicitud aparentemente válida, se identifican con los valores 5XX - 599.
