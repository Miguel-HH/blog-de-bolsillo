---
title: "Peticiones HTTP"
date: 2021-05-18
tags: ajax websockets
---

# Peticiones HTTP
Cada vez que se hace una petición web a través de un navegador, lo que se realiza es una búsqueda en internet de un servidor que pueda proveer la información necesaria y que será devuelta en su momento. Es decir, al ingresar a un sitio web, se está haciendo una petición al servidor y el mismo devolverá los elementos necesarios o requerido para poder visualizar esa página web; Lo primero que devuelve es el HTML, dentro de este se pueden visualizar imágenes, adjuntos de CSS o JS.

La información es devuelta en dependencia de lo que se le esté solicitando. Usualmente cuando se hace la petición, se está pidiendo todo el contenido de dicha página, o de cada elemento que sea necesario. Con el tiempo esto ha ido mejorando, actualmente se encuentra disponible la versión 2 de HTTP, donde se encuentran mejoras de rendimiento y la forma en que es solicitada y entregada la información. Usualmente se hace una petición por cada elemento a solicitar.

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