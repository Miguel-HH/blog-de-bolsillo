---
title: "Enviar contenidos con fetch()"
date: 2021-05-26
categories: ajax websockets
---

# Enviar contenidos con fetch()

## Uso de fetch

La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. También provee un método global fetch() que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.  
Este tipo de funcionalidad se conseguía previamente haciendo uso de XMLHttpRequest. Fetch proporciona una alternativa mejor que puede ser empleada fácilmente por otras tecnologías como Service Workers. Fetch también aporta un único lugar lógico en el que definir otros conceptos relacionados con HTTP como CORS y extensiones para HTTP.  

## Enviar más información

Dentro del protocolo HTTP es posible enviar cabeceras, y por lo general, se suministra el tipo de dato que se está enviando, el que se quiere recibir, la autorización, entre otras cosas. Lo que se hace es crear un objeto header y dentro del mismo se agrega cada una de las cabeceras que posteriormente serán enviadas a fetch.  
Una petición básica de fetch es realmente simple de realizar, como se puede visualizar en el siguiente ejemplo:  

fetch('http://example.com/movies.json').then(response => response.json()) .then(data => console.log(data));

Aquí se está recuperando un archivo JSON a través de red e imprimiendo en la consola. El uso de fetch() más simple toma un argumento (la ruta del recurso que quieres obtener) y devuelve un objeto Promise conteniendo la respuesta, un objeto Response. Esto es, por supuesto, una respuesta HTTP no el archivo JSON. Para extraer el contenido en el cuerpo del JSON desde la respuesta, usamos el método json() (definido en el mixin de Body, el cual está implementado por los objetos Request y Response).  
Las peticiones de Fetch son controladas por la directiva de connect-src de Content Security Policy en vez de la directiva de los recursos que se han devuelto.