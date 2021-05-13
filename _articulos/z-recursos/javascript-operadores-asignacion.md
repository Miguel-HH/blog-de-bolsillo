---
title: "Operadores de asignación"
tags: javascript
date: 2021-05-09
---

# Operadores de asignación

## Asignación aritmética

Estos operadores permiten reasignar el valor de una variable con el valor obtenido en una operación aritmética, donde esta variable es parte de la operación. Es un método abreviado de realizar operaciones aritméticas. Por ejemplo:

````js
//Código sin asignación aritmética

let a = 10
let b = 4
a = a + b

console.log(a) // output: 14

//Código con asiganción aritmética

let a = 10
let b = 4
a += b

console.log(a) // output: 14
````

> A la variable `a` se le asignará el valor de la operación realizada en relación a la variable `b`. Estas operaciones pueden ser realizadas con cualquiera de los operadores revisados en la clase anterior. Por ejemplo `+=`, `-=`, `*=`, `/=` y `%=`

## Operador exponencial
Devuelve el resultado de elevar el primer operando al segundo operando de potencia. Se representa con `**`.

````js
let a = 5
let b = 3
let operacion = a ** b

console.log(operacion) // output: 125
````