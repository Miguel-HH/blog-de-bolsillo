---
title: "Type coercion"
tags: javascript
date: 2021-05-09
---

# Type coercion

Es la capacidad que posee JavaScript de convertir un dato en otro tipo de dato

### Ejemplos

````js
let a = 50, b = "20"

console.log(a + b)

// output: 5020
````

> Convierte el tipo numérico a String y procede a realizar una concatenación. JavaScript priorizará la implementación del operador de concatenación sobre el de suma

````js
let a = 50, b = "20"

console.log(a - b)
// output: 30
````

> El signo `-`esta estrictamente relacionado con los operadores aritméticos, por lo cual intentará convertir todos los datos a tipo numérico y realizará la operación

### NaN (Not a number)
Contradictorio a lo que pueda sonar, NaN es de tipo Number. Ejemplo:

````js
let a = 50, b = "Perro"

console.log(a - b)

// output: NaN
````

JavaScript antes de realizar la operación, interpretará el operador utilizado y se preparará internamente para recibir un tipo de dato determinado (en este caso, un tipo number). Intentará convertir la variable `b` a un number, pero al no poder hacerlo, regresará el valor NaN

### Booleanos
Los booleanos también puedes ser procesados por el type coercion. Por ejemplo:

````js
//String

console.log("" == false) // output: true
console.log("Hola" == true) // output: true

//Number

console.log(1 == true) // output: true

console.log(0 == fales) // output: true
````

***

- Quiero aprender más sobre: ["JavaScript"](../00/javascript)
