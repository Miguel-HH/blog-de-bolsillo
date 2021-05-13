---
title: "Tipos de dato objeto"
date: 2021-05-08
tags: javascript
---

# Tipos de dato objeto

### Variables
Son espacios reservados en memoria para poder almacenar información y posteriormente utilizarlos o reasignarlos.

### Declaración
Para declarar una variable, solo es necesario utilizar `var` o `let` seguido del nombre de la variable y así reservar un espacio en memoria

````js
let miVariable
````

> En ECMAScript 2015 se introdujo `let` , el cual evita múltiples inconvenientes que se presentaban con el uso de `var`

````js
let miVariable

console.log(miVariable) // output: undefined
````

> Esto sucede porque la variable no tiene un valor definido

### Asignación
Se puede asignar valores a las variables mediante el uso del operador =.

````js
miVariable = "Beto Quiroga"

console.log(miVariable) // output: Beto Quiroga
````

La declaración y la asignación pueden realizarse en una misma línea de código:

````js
let miVariable = "Beto Quiroga"

console.log(miVariable) // output: Beto Quiroga
````

### Reasignación
Consiste en asignar un nuevo valor a una variable que ya poseía uno

````js
let miVariable = "Alexys Lozada"

console.log(miVariable) // output: Alexys Lozada

miVariable = "Alvaro Felipe"

cosole.log(miVariable) // output: Alvaro Felipe
````