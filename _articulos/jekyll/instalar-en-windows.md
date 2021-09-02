---
title: "¿Cómo instalar Jekyll en Windows?"
date: 2021-04-26
categories: jekyll
layout: post-jekyll
description: "Pasos para instalar Jekyll en Windows."
---

# ¿Cómo instalar Jekyll en Windows?

## Instalar Ruby
- Descargar la última versión de [Ruby+Devkit](https://rubyinstaller.org/downloads/)
- Instalar. En el último paso activar la opción **ridk install**.

## Instalar Jekyll
- Abrir la consola de Windows y escribir: `gem install jekyll bundler`
- Comprobar la versión de Jekyll escribiendo: `jekyll -v`
- Escribir `jekyll new (Nombre)` en la ruta que se creará el proyecto.

## Abrir un servidor en Jekyll
- Crear una terminal en VScode.
- `jekyll serve`
- Ir a: `localhost:4000` en cualquier navegador.
- Si hay algún error, escribir `bundle add webrick`

## Gemfile
- seguir instrucciones

## _config.yml
- `baseurl:`

## Subir a GitHub pages
- comprobar

***

- Quiero aprender más sobre: ["Jekyll"](../00/jekyll)
