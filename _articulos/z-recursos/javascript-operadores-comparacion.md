---
title: "Operadores de comparación"
tags: javascript
date: 2021-05-09
---

# Operadores de comparación

La función de estos es precisamente comparar la relación entre dos datos, y así, determinar un valor de verdad con respecto a dicha comparación

### Igualdad
Este operador es representado por `==`. Determina la igualdad entre dos datos, sin importar los tipos de datos que se comparen (Type coercion)

````js
let a = 50, b = 40
let resultado = a == b

console.log(resultado) // output: false

let c = 50, d = "50"
let resultado2 = c == d

console.log(resultado2) // output: true
````

### Estrictamente igual
Representado con `===`. Determina la igualdad entre dos datos, incluyendo que pertenezcan a la misma categoría de tipo de dato

````js
let a = 50, b = 50
let resultado = a === b

console.log(resultado) // output: true

let d = "50"
let resultado2 = a === d

console.log(resultado2) // output: false
````

### Diferencia
Representado por `!=`. Determina la desigualdad entre dos datos, sin tomar en cuenta los tipos de datos que se comparan.

````js
let a = 24, b = 6
let resultado = a != b

console.log(resultado) // output: true

let d = "24"
let resultado2 = a != d

console.log(resultado) // output : false
````

### Diferencia estricta
Representado por `!==`. Determina la desigualdad entre dos datos, tomando en cuenta los tipos de datos que se comparan.

````js
let a = 24, b = 24
let resultado = a !== b

console.log(resultado) // output: false

let d = "24"
let resultado2 = a !== d

console.log(resultado) // output : true
````

## Mayor/menor que
Representado por los signos `>` y `<` respectivamente. Determina que el número a comparar sea mayor o menor que el otro, sin tomar en cuenta una igualdad entre ellos.

````js
let a = 3, b = 6
let resultado = a > b

console.log(resultado) // output: false

resultado = a < b

console.log(resultado) // output: true
````

## Mayor/menor o igual que
Representado por los signos `>=` y `<=` respectivamente. Determina que el número a comparar sea mayor o menor que el otro, tomando en cuenta una igualdad entre ellos.

````js
let a = 3, b = 4, c = 4
let resultado = a <= b

console.log(resultado) // output: true

resultado = b >= c

console.log(resultado) // output: true
````