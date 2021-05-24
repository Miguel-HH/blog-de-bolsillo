---
title: "¿Qué es una petición HTTP?"
date: 2021-05-07
tags: http
layout: post-internet
description: "Definición de 'Petición HTTP'."
---

# ¿Qué es una petición HTTP?

## Ejemplo de petición HTTP

```http
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```

Partes de la petición:
- **GET**
Method o verbo para hacer la petición
- **/**
	Path o ruta
- **HTTP/1.1**
	version of the protocol
- Headers:
	- **Host: www...**
		a qué host se está haciendo la petición
	- **Accept-Language**
		Opcional

## Respuesta del servidor
Si la petición se realizó correctamente, el servidor responderá siguiendo el mismo protocolo.

```http
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... (here comes the 29769 bytes of the requested web page)
```

- **HTTP/1.1**
	version of the protocol
- **200**
	Status code - código de respueta
- **OK**
	Status message - texto de respuesta

- **Headers**

***

- Quiero aprender más sobre: ["HTTP"](que-es-http)
- Quiero aprender más sobre: ["HTML"](../00/html)
