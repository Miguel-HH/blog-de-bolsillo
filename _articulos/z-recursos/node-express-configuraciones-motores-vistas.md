---
title: "Configuraciones y motores de vistas en Express"
date: 2021-05-22
tags: node-js
---

# Configuraciones y motores de vistas en Express
Se pueden definir configuraciones propias dentro de la aplicación express, la forma de hacerlo es la siguiente:

````js
app.set('title', 'Aplicación hecha en Node')
````

Para hacer uso de la configuración hecha, se hace de la siguiente forma:

````js
app.get('title')
````

Un motor de plantilla es añadir funcionalidades a los archivos HTML.

Para hacer configuraciones a plantillas con extensión `.ejs` es necesario instalar el módulo ejs con el comando `npm install ejs`
