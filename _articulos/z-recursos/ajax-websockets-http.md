---
title: "Definición del protocolo HTTP"
date: 2021-05-18
tags: ajax websockets
---

# Definición del protocolo HTTP
Todas las peticiones de web necesitan un protocolo, que no es más que un conjunto de reglas que se deben seguir para poder obtener un resultado específico. Un ejemplo común es compararlo con el conjunto de reglas que se siguen en un restaurante. En este sentido, la web se basa en el protocolo HTTP.

## Protocolo HTTP
Es el que permite intercambiar información en la web, específicamente entre un servidor web y un cliente. Entre los servidores webs más conocidos encontramos Apache, Nginx, Google Web Server, etc., que funcionan sirviendo o proporcionando la información que se le es solicitada. Cada lenguaje de programación puede usar un servidor diferente y lo que hacen es esperar peticiones, y si esta viene con el protocolo correcto devolverá la respuesta esperada o solicitado.

## HTTPS
La "S" indica que la información está siendo entregada por medio de un canal cifrado, con un certificado SSL. Sin embargo, el protocolo sigue siendo la misma.

## Peticiones
Cada vez que se hace una petición web a través de un navegador, lo que se realiza es una búsqueda en internet de un servidor que pueda proveer la información necesaria y que será devuelta en su momento. Es decir, al ingresar a un sitio web, se está haciendo una petición al servidor y el mismo devolverá los elementos necesarios o requerido para poder visualizar esa página web; Lo primero que devuelve es el HTML, dentro de este se pueden visualizar imágenes, adjuntos de CSS o JS.

La información es devuelta en dependencia de lo que se le esté solicitando. Usualmente cuando se hace la petición, se está pidiendo todo el contenido de dicha página, o de cada elemento que sea necesario. Con el tiempo esto ha ido mejorando, actualmente se encuentra disponible la versión 2 de HTTP, donde se encuentran mejoras de rendimiento y la forma en que es solicitada y entregada la información. Usualmente se hace una petición por cada elemento a solicitar.

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

## Ejemplo: Petición HTTP

### Envío de información

````http
GET / HTTP/ 1.1
Host: developer.mozilla.org
Accept-Language: fr
````
La primera línea indica qué método se está usando para realizar la petición, seguido de qué PATH o ruta se está haciendo y por último la versión de HTTP con que se está trabajando.
La segunda línea especifica a qué HOST se está haciendo la petición.
Y por último, se puede especificar de manera opcional el lenguaje que se está aceptando.

### Respuesta del servidor

````http
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html
<!DOCTYPE html... (here comes the 29769 bytes of the requested web page)
````
- Responde con un código de respuesta y un texto de respuesta.
- La fecha.
- El servidor.
- Cuándo fue la última modificación.
- Tamaño de respuesta.
- Tipo de respuesta.
- La respuesta.

## Métodos del protocolo HTTP
Dentro de la petición es necesario enviar el método para que el servidor entienda qué acción es la que deberá realizar con la información suministrada. Existen una gran cantidad de métodos, sin embargo, dentro de la práctica los más usados son los siguientes:

- Get: Siempre que se haga una solicitud o petición se hace uso de este método.
- Post: Usado para enviar información, datos.
- Put: Actualizar información que está en el servidor.
- Delete: Eliminar información.
- Options: Permite realizar peticiones entre dominios diferentes.

Dentro de lo que se conoce como API REST estos cuatro métodos es lo que usualmente se conoce como CRUD.