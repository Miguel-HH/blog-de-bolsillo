---
title: "¿Cómo crear OBJETOS de forma CONDICIONAL en JavaScript?"
date: 2021-06-21
categories: javascript poo
layout: post-javascript
description: "Guía para crear OBJETOS de forma CONDICIONAL en JavaScript."
---

# ¿Cómo crear OBJETOS de forma CONDICIONAL en JavaScript?

## Método Old School
````js
// old school
const obj1 = {a:1, b: 2};
if (condition) {
    ob1.c = 3;
}
if (otherCondition) {
    ob1.d = 4;
};
````

## Método ES6
````js
a: 1,
b: 2,
... (condition ? {c:3} : {}),
... (otherCondition ? {d:4} : {}),
};
````

***

- Quiero aprender más sobre: ["JavaScript"](../00/javascript)
