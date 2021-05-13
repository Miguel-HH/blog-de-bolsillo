---
title: "Operadores Lógicos"
tags: javascript
date: 2021-05-09
---

# Operadores Lógicos

## Función
Sirven para unir dos o más operadores de comparación, mediante el operador lógico AND (`&&`) y el operador lógico OR (`||`)

## AND (`&&`)
Este operador retornará verdadero solo si las dos o más premisas que lo componen son verdaderas.

````js
// Saber si a es mayor que b y si es mayor que c

let a = 20, b = 10 , c = 30

let resp = a > b && a > c

// true  &&  false

console.log(resp) // output: false
````

### OR (`||`)
Este operador retornará verdadero siempre y cuando una de las dos o más premisas sea verdadera

````js
// Saber si b es mayor que a o si b es mayor que c

let a = 20, b = 10 , c = 30

let resp = a > b || a > c

// false || false

console.log(resp) // output: false
````