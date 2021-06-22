---
title: "¿Cómo utilizar las famosas PROPS de React?"
date: 2021-05-30
tags: react
layout: post-react
description: "Guía para entender las 'props' de React."
---

# ¿Cómo utilizar las famosas 'PROPS' de React?
Todos los atributos o propiedades de etiquetas html pueden ser escritos desde lógica de expresión JSX. Por ejemplo `<img />` necesita dos propiedades para renderizarse: src y alt.

Se crea un objeto con las propiedades deseadas:
````jsx
const curso = {
  "title": "React desde Cero",
  "image": "https://edteam-media.s3.amazonaws.com/courses/small/8b7ef439-b9bc-485f-9608-d82d0d1a7a2b.png",
  "price": "50usd"
}
````
Para culminar usamos las expresiones para igualar los atributos de la etiqueta `<img>`.
````jsx
<img src= {curso.image} alt={curso.title} />
````

## Props (abreviación de propiedades)
Utilizadas para pasar datos al componente que se quiere mostrar.

## Pasando propiedades al objeto props
Props es un objeto que puede recibir las propiedades que se le pasen. Esto permite reutilizar código de manera ordenada y precisa.
````jsx
const Curso = ({propiedad1, propiedad2, propiedad3}) => (
//JSX a mostrar
)
````

Es importante mencionar, que todas las clases, id u otros elementos pueden ser enviados por propiedades.

***

- Quiero aprender más sobre: ["React"](../00/react)
