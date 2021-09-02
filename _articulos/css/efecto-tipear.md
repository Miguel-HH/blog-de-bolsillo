---
title: "Crear un efecto de 'Máquina de escribir' con CSS puro"
date: 2021-06-19
categories: css
layout: post-css
description: "Guía para crear un efecto de 'Máquina de escribir' con CSS puro."
---

# Crear un efecto de 'Máquina de escribir' con CSS puro

````css
.main-title {
    margin: 0 0 0.5em;
    padding-bottom: 0.2em;
    width: 18ch;
    overflow: hidden;
    white-space: nowrap;
    text-decoration: none;
    font-family: monospace;
    font-size: 1.5rem;
    font-weight: 800;
    animation:  pop-up-rectangle .5s 12 forwards step-end,
                pop-up-characters 5s steps(18, end);

    &:link {
        color: var(--high1);
    }

    &:visited {
        color: var(--high1);
    }

    &:hover {
        text-decoration: underline var(--high1);
    }

    /* rectangulo parpadeando */
    box-shadow: 0.5em 0 0 transparent;
}

@keyframes pop-up-characters {
    0% {
    width: 0;
    }
}

@keyframes pop-up-rectangle {
    50% {
    /* rectangulo parpadeando */
    box-shadow: 0.5em 0 0 var(--high1);
    }
}

````

***

- Quiero aprender más sobre: ["CSS"](../00/css)
