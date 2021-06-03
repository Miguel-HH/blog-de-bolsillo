---
title: "¿Cómo publicar tu 'app de React.js' en Netlify?"
date: 2021-05-31
tags: react
layout: post
description: "Guía para publicar en 'Netlify' tu app desarrollada en react.js"
---

# ¿Cómo publicar tu 'app de React.js' en Netlify?

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
