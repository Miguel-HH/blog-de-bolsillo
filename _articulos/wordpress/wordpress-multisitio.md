---
title: "¿Cómo INSTALAR WordPress en mi PC (En local)?"
date: 2021-07-11
categories: wordpress
layout: post-wordpress
index: 2
description: "Guía para instalar WordPress en tu PC con XAMPP."
---

# WordPress multisitio local

## Configuración en el panel de control
- Instalar WordPress.
- No habilitar ningún plugin.
- En el panel lateral "Asjustes", escoger el sub-panel "Enlaces permanentes".
- Elegir la opción "Nombre de la entrada" y guardar los cambios

## Activar la opción 'multisitio'
- Ir a la carpeta donde se encuentran los archivos de WordPress y buscar el archivo "wp-config.php"
- Hacer una copia de seguridad de ese archivo y agregarle una lína de código: `define( 'WP\_ALLOW\_MULTISITE', true );`

## Configurar y activar la red
- En el panel lateral "Herramientas" ahora hay una opción nueva llamada "Configuración de la red".
- Colocar un título a la red y el email puede ser falso.
- Clic en el botón "Instalar".
- Seguir las instucciones de WordPress.
- La sustitución de datos va entre "# BEGIN WordPress" y "# END WordPress"
- Volver al panel de control y hacer clic en "Iniciar sesión" y completar los datos.

## Agregar un nuevo sitio
- En la esquina superior izquierda, hacer clic en el ícono con 3 casitas que dice: "Mis sitios".
- En el panel lateral, elegir el menú "Sitios".
- Clic en el botón "Agregar nuevo".


***

- Quiero aprender más sobre: ["WordPress"](../00/wordpress)
