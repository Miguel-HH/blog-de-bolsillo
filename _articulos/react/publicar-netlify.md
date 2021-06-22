---
title: "Los 4 pasos para publicar tu 'app de React' en Netlify"
date: 2021-05-31
tags: react
layout: post-react
description: "Guía para publicar apps de React en Netlify"
---

# Los 4 pasos para publicar tu 'app de React' en Netlify

## Requisitos
- Una app hecha en react.js
- Una cuenta en Netlify. Puedes crear una en: https://www.netlify.com/

## Pasos
- Generar los archivos de producción.
````
npm run build
````
- Instalar el paquete: 'netlify-cli'
````
npm install netlify-cli -g
````
- Ejecutar:
````
netlify deploy
````
- Usar las flechas del teclado para escoger la opción: + **Create & configure a new site**
- Elegir publicar la carpeta build.
````
./build
````

***

- Quiero aprender más sobre: ["React"](../00/react)