---
title: "¿Qué significa THIS en JavaScript?"
date: 2021-06-20
tags: javascript
layout: post-javascript
description: "Definición de 'this' en JavaScript."
---

# ¿Qué significa THIS en JavaScript?

**this** es una referencia que se crea cuando una función es **invocada**, no declarada. El valor de esa referencia depende al 100% del lugar en la que esa invocación se realice, llamado _call-site_.

Ese lugar de llamada es la invocación en sí a la función. Es decir, el momento justo en que es llamada (no declarada, no _referenciada_) esa función.

En JavaScript, las funciones internas de la referencia `this` pueden vincularse a diferentes objetos dependiendo de dónde se llame a la función.

## Regla 1
Cuando se llama a una función en el ámbito global, `this` hace referencia de forma predeterminada al objeto global (`window` en el navegador, o `global` en Node.js). Por ejemplo:

```javascript
function foo() {
  this.a = 2;
}

foo();
console.log(a); // 2
```

## Regla 2
```javascript
function foo() {
  this.a = 2;
}

const obj = {
  foo: foo
};

obj.foo();
console.log(obj.a); // 2
```

Claramente, en el fragmento anterior, la función `foo()` se llama en el _contexto_ del objeto `obj`, por lo tanto `this` ahora hace referencia a `obj`. Entonces, cuando se llama a una función con un objeto de contexto, la referencia  `this` se vincula a dicho objeto.

## Regla 3
`.call`, `.apply` y `.bind` pueden utilizarse para enlazar explícitamente `this`. Usar `.bind(this)` es algo que podemos ver en muchos componentes de React.

```javascript
const foo = function() {
  console.log(this.bar)
}

foo.call({ bar: 1 }) // 1
```

## Regla 4
```javascript
function Point2D(x, y) {
  this.x = x;
  this.y = y;
}

const p1 = new Point2D(1, 2);
console.log(p1.x); // 1
console.log(p1.y); // 2
```

Lo que notamos aquí es que al llamar a la función `Point2D` utilizando la palabra clave `new`, la referencia `this` se vincula al objeto `p1`. Entonces, cuando llamamos a una función utilizando `new`, un nuevo objeto es creado y la referencia`this` se vincula al mismo.

## Regla 5
Con ES6 podemos evitar tener que asignar `this` a una variable local usando una arrow function, que automáticamente enlaza `this` al contexto del código donde ha sido definida.

```javascript
const Gato = function(nombre, sonido) {
  this.nombre = nombre;
  this.sonido = sonido;
  this.hacerSonido = function() {
    console.log( this.nombre + ' decir: ' + this.sonido );
  };
  this.molestar = function() {
    let contar = 0, max = 100;
    const t = setInterval(() => {
      this.hacerSonido();
      contar++;
      if (contar === max) {
        clearTimeout(t);
      }
    }, 500);
  };
}

const gatito = new Gato('Papá Gordo', 'Mrrooowww');
gatito.molestar();
```

***

- Tema relacionado: [Función Constructora](funcion-constructora)

***

- Quiero aprender más sobre: ["JavaScript"](../00/javascript)
