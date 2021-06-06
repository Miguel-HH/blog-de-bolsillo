---
title: "Operadores de concatenación"
tags: javascript
date: 2021-05-09
---

# Operadores de concatenación

Su función reside en concatenar o unir dos o mas strings. Esta representado por el signo `+`.

> Este funcionara como operador de concatenación cuando uno o mas de los datos a concatenar sea de tipo String.

````js
let a = "Hola"
let b = "mundo"
let resultado= a + " " + b

console.log(resultado) // output: Hola mundo
````

## Template Strings
Existe una forma adicional para contatenar texto llamada Template String. Este sirve como una "plantilla" para generar strings a partir de un texto, variables, operaciones o funciones proporcionadas. Este tipo de strings se escribe entre .

> Se utiliza `${ }` para hacer referencia a código JavaScript

````js
let nombre = "Beto"
let apellido = "Quiroga"
let templateString = `Mi nombre es ${nombre} y mi apellido ${apellido}`

console.log(templateString)
// output: Mi nombre es Beto y mi apellido Quiroga
````

***

- Quiero aprender más sobre: ["JavaScript"](../00/javascript)
