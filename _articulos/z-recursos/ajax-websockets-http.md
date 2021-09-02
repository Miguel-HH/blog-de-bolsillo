---
title: "Definición del protocolo HTTP"
date: 2021-05-18
categories: ajax websockets
---

# Definición del protocolo HTTP
Todas las peticiones de web necesitan un protocolo, que no es más que un conjunto de reglas que se deben seguir para poder obtener un resultado específico. Un ejemplo común es compararlo con el conjunto de reglas que se siguen en un restaurante. En este sentido, la web se basa en el protocolo HTTP.

## Protocolo HTTP
Es el que permite intercambiar información en la web, específicamente entre un servidor web y un cliente. Entre los servidores webs más conocidos encontramos Apache, Nginx, Google Web Server, etc., que funcionan sirviendo o proporcionando la información que se le es solicitada. Cada lenguaje de programación puede usar un servidor diferente y lo que hacen es esperar peticiones, y si esta viene con el protocolo correcto devolverá la respuesta esperada o solicitado.

## HTTPS
La "S" indica que la información está siendo entregada por medio de un canal cifrado, con un certificado SSL. Sin embargo, el protocolo sigue siendo la misma.


## Arquitectura de sistemas basados en HTTP

### Cliente: El agente del usuario
Cualquier herramienta que actúe en representación del usuario. Los clientes hacen las peticiones una a una. No solo el navegador puede ser un cliente, es posible crear una aplicación que realice peticiones a la web, siempre y cuando cumpla con el protocolo.

### Servidor web
Entrega la información que ha sido solicitada por el cliente por medio de su protocolo.

### Proxies
Herramientas que permiten realizar algunos procesos, como por ejemplo; Chaching (como la caché del navegador), usado principalmente cuando se hacen múltiples solicitudes de una misma información que cambia poco para evitar leerlo siempre y volverlo a entregar, filtrar, evitar accesos, balancear las cargas, autenticar, registrar eventos.

### Características del protocolo HTTP
- Es sencillo: Es texto plano que permitirá intercambiar información siempre y cuando cumpla con ciertas reglas.
- Es extensible.
- Protocolo con sesiones pero sin estados.
- HTTP y conexiones.

A partir de la versión 2 de HTTP, ya no viaja texto plano por cuestiones de velocidad y seguridad, sin embargo, se debe seguir cumpliendo con el protocolo para poder entregar la información que ha sido solicitada.

Cuando se hace una petición, desde un cliente hasta un servidor, el mismo evalúa si es correcta o no y devuelve que se pidió. Sin embargo, ni al cliente ni al servidor les interesa estar conectado, es decir, se realiza la petición, entrega una respuesta e inmediatamente se desconecta, entonces, ¿Cómo controlar si alguien está logueado? Para verificar que si suministró información correcta y permitir el acceso, o ¿Cómo guardar información de esa persona? Lo que se hace es crear sesiones, donde se guardan de parte del cliente, de modo que cada vez que haga una petición envíe el código y el servidor reconozca al cliente. Se pueden controlar las sesiones por medio de las cookies.

## Cabeceras
Permiten enviar mayor información, mejor conocido como metadata en la petición realizada, esta información puede resultar útil para controlar los datos recibidos. Por lo general se envían cookies para conocer a más detalle la información en que navega la persona.

## El objeto XMLHttpRequest
Es un objeto JavaScript, diseñado por Microsoft. Proporciona una forma fácil de obtener información de una URL sin necesidad de recargar la página completa. Esta idea nació de la necesidad de obtener información solo de un dato específico sin necesidad de hacerla completa al servidor. La idea general es poder hacer peticiones solo de datos específicos al servidor, para luego procesarlo. Para declararlo, solo es necesario hacer uso de la siguiente sentencia:

````js
var req = new XMLHttpRequest();
````
