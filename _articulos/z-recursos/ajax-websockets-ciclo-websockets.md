---
title: "Ciclo de vida de un websocket"
date: 2021-05-29
tags: ajax websockets
---

# Ciclo de vida de un websocket

Su ciclo de vida se constituye de la siguiente manera:

Conexión > estado > envío y recepción de mensajes (mientras esté conectado) > cierre

En JavaScript Websocket será un objeto y el mismo permitirá acceder a varias de sus propiedades y métodos para conocer su condición. Todo lo que se necesita para conectar a un Websocket será su URL:
````js
var exampleSocket = new WebSocket("ws://www.example.com/socketserver");
````

Una vez hecho esto ya se estará conectado.

## Diferencias con AJAX
En Ajax, cuando se hacía el XMLHttprequest se creaba un objeto, luego se registraba un evento "load" para cuando reconociera una respuesta y por último se usaba "send" para enviar la información. En este caso, AJAX se está conectando cuando se usa el método "send", en Websocket, por el contrario, se conecta tan pronto cuando se cree usando el "new WebSocket".

## Eventos
- OnOpen: Un monitor de eventos que es llamado cuando el estado readyState de la conexión Websocket cambia a OPEN. Esto indica que la conexión está lista para enviar y recibir datos. El evento es uno simple con el nombre "open".
- OnMessage: Un monitor de eventos que es llamado cuando un mensaje es recibido desde un servidor. El monitor recibe un objeto MessageEvent llamado "mensaje".
- OnError: Un monitor de eventos que es llamado cuando un error ocurre. Esto es un evento simple llamado "error".
- OnClose: Un monitor de eventos que atiende una llamada cuando la conexión del WebSocket cambia a un estado CERRADO (CLOSED). El monitor recibe un CloseEvent llamado "cerrado".

## Métodos
- Send: Transmite datos al servidor sobre la conexión WebSocket.
- Close: Cierra la conexión o intento de conexión del WebSocket si lo hay. Si la conexión ya está cerrada, no hace nada.

Nota: Los websockets reciben texto plano, Blob, Buffers de bytes.
