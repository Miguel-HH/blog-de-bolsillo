---
title: "¿Qué es GITFLOW?"
date: 2021-06-29
categories: git
layout: post-git
index: 2
description: "Guía para entender el 'Flujo de trabajo' en GIT."
---

# ¿Qué es GITFLOW?
Es un flujo de trabajo aplicado a un repositorio Git. Es una metodología para configurar, ordenar y fusionar las ramas del proyecto.

## Ramas principales
- `master`: Contiene las versiones estables del proyecto. Es recomendable etiquetarlas con un número de versión.
- `develop`: Contienen el código de la siguiente versión del proyecto. Es la rama que integra las nuevas funciones.

## Ramas de apoyo
Están limitadas en tiempo y serán eliminadas eventualmente.
-   `feature`: Contiene el código de las nuevas funciones o características del proyecto. Surge de la rama `develop` y vuelve a fusionarse con ella.
-   `release`: Es un paso previo para la versión definitiva de producción. Surge de `develop` y una vez finalizada la rama se debe incluir tanto en la rama `develop` como en la rama `master`.
-   `hotfix`: Repara rápidamente una versión de producción. Una vez arreglado el error, la rama se incluye en `master` y `develop`.

## Resumen
1.  Se crea una rama `develop` a partir de la `master`.
2.  Se crea una rama `release` a partir de la `develop`.
3.  Se crean ramas `feature` a partir de la `develop`.
4.  Cuando se termina una rama `feature`, se fusiona en la rama `develop`.
5.  Cuando la rama `release` está lista, se fusiona en la `develop` y la `master`.
6.  Si se detecta un error en `master`, se crea una rama `hotfix` a partir de la `master`.
7.  Una vez terminada la rama `hotfix`, esta se fusiona tanto en la `develop` como en la `master`.

***

- Quiero aprender más sobre: ["GIT"](../00/git)
