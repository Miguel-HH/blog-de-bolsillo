---
title: "Imprimir contenido en el DOM - JS"
tags: javascript
date: 2021-05-13
---

# Imprimir contenido en el DOM - JS
La estructura que has creado en el archivo .js de la clase que vas a utilizar te servirá para poder insertar contenido dinámico de una clase, en tu HTML haciendo un `inner.html`

Deberás crear la estructura en HTML donde quieras que este contenido sea insertado.

### ¿Cómo insertar este contenido dinámico?

Crearás una constante que será el `document.getElementById("nombreDeId")` el nombre que le hayas colocado a tu constante lo implementarás con el `inner.html`

### ¿Cómo imprimir el contenido de la clase en el DOM?

Para imprimir en el DOM usarás el nombre de tu constante más la nomenclatura punto y el parámetro `inner.html` y luego le asignarás con template strings los valores que vayas a utilizar. Dentro de las template strings o backstick crearás el contenido a imprimir en el DOM y dentro de una variable traerás con el método get los atributos de la clase.

EJ:
````js
constante.innerHTML = `<h3>${nombreDelObjeto.getNombreDelMetodo()}</h3>`
````

## Imprimir varios elementos en DOM

El parámetro `inner.HTML` solo podrá mostrar 1 objeto en el DOM, para poder mostrar varios objetos se utilizará `appendChild()`

Con `appendChild()` ya no se creará el contenido a imprimir en el DOM dentro de las template strings, sino que, se creará un elemento como parámetro.

Dentro de una constante la cual deberás asignarle el mismo nombre del elemento de `appendChild()` le asignarás a esta constante un `document.createElement("div")` el div se creará cuando el elemento sea llamado.

Luego llamarás a tu elemento del `appendChild(elemento)` más él `innerHTML` y a esto le asignarás toda la información contenida en las template strings.

En resumen, crearás un elemento donde entrarás el contenido, crearás un hijo que estará dentro de ese elemento y será él `div`. Al hijo se le agregará él `inner.HTML` y se introducirá con `appendChild()` el hijo.

Para agregar nuevos cursos esto implicará repetir el contenido y como ya sabes, esto no es una buena práctica por lo que se procedería a crear una función. Todas las indicaciones anteriores deberás colocarlas dentro de una función.

### ¿Cómo puedes hacer para que tu objeto sea dinámico?

A tu función le deberás dar un parámetro para que este sea la constante de cada atributo del objeto y al llamar la función, le deberás colocar la constante donde está creada la clase.

> Como buena práctica siempre es recomendable documentar la funcionalidad de tu código.

***

- Quiero aprender más sobre: ["JavaScript"](../00/javascript)
