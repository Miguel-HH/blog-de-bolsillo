---
title: "¿Cómo INSTALAR WordPress en mi PC (En local)?"
date: 2021-07-11
categories: wordpress
layout: post-wordpress
index: 2
description: "Guía para instalar WordPress en tu PC con XAMPP."
---

# ¿Cómo INSTALAR WordPress en mi PC (En local)?
## Descargar e instalar XAMPP
[Enlace de descarga](https://www.apachefriends.org/es/download.html)

## Arrancar los servidores desde XAMPP
- Clic en el botón "Start" de los servidores "Apache" y "MySQL".
- Los módulos deberían cambiar a color verde.

## Comprobrar el funcionamiento de los servidores
- Ir a cualquier navegador web y escribir `localhost`.
- Si todo funciona correctamente seremos redireccionados al Dashboard de XAMPP.

## Crear una 'Base de datos' con phpMyAdmin
- En el Dashboard, clic en el botón ubicado en la esquina superior derecha "phpMyAdmin".
- En el panel lateral izquierdo, hacer clic en "Nueva".
- Colocar un nombre a la base de datos y escoger la opción "utf8_spanish_ci".
- Hacer clic en el botón "Crear".

## Instalación de WordPress
- Descargar los archivos de WordPress desde la web oficial.
- Descomprimir los archivos en la ruta: **xampp/htdocs**
- Cambiar el nombre de la carpeta copiada.
- En un navegador, escribir `localhost/NombreDeLaCarpeta`
- Colocar los datos:
	- NombreDeLaBasedDeDatos
	- root
	- dejar vacío

## Información necesaria
- El título del sitio puede cambiarse.
- Es necesario apuntar el nombre de usuario y la contraseña.
- El email puede ser falso.
- Es recomendable disuadir a los motores de búsqueda.

## Iniciar sesión local
- Antes de iniciar sesión es necesario activar las bases de datos "Apache" y "MySQL" en XAMPP
- En un navegador, escribir `localhost/NombreDeLaCarpeta`
- Para editar la página agregar la extensión `/wp-admin`

***

- Quiero aprender más sobre: ["WordPress"](../00/wordpress)
