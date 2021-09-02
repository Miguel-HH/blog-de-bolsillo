---
title: "Rutas en Express"
date: 2021-05-22
categories: node-js
---

# Rutas en Express
Cuando un proyecto comienza a crecer, es recomendable separar cada elemento en carpetas diferentes de modo a organizarlas mejor.

En el caso de las rutas, lo mejor es crear una carpeta con el nombre routes y dentro de ello, colocar los archivos de las rutas e ir importándolos al archivo principal.

Para poder exportar los archivos se hace uso de la función `module.exports = nombre_del_archivo`

Para importarlos se utiliza `require('nombre_del_archivo')`

Finalmente para usarlo se utiliza la función `.use('nombre_del_archivo')`
