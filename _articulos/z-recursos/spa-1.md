---
title: "Single Page Aplication con JavaScript"
date: 20201-05-29
categories: javascript spa
---

# Single Page Aplication con JavaScript

## Introducción al proyecto
Se creará una aplicación donde el usuario iniciara sesión, al ingresar se podrá ver como primera página usuarios en línea o ausente e iniciar una nueva conversación con usuarios registrados.

Recordando que el navegador no tiene que recargar o realizar peticiones a backend y renderizar desde el servidor, todo esto se hace con JavaScript. Utilizando JavaScript se realizarán las peticiones a la API, peticiones al web socket y la SPA para el cambio de pantallas.

De lado de backend se encarga de registrar los usuarios, validar el ingreso a la aplicación y fungirá como servidor web socket, no se utilizara BD, en su lugar se ocupara un array con los datos teniendo en cuenta que mientras se encuentre viva la aplicación existirá el array.
