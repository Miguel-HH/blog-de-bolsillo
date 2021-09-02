---
title: "Atributos del DOM"
categories: javascript dom
date: 2021-05-15
---

# Atributos del DOM
Para obtener un atributo tendrás `getAttribute()` y para definir un atributo tendrás `setAttribute()`

La propiedad `classList` te devolverá la lista de clases. Esta propiedad tiene los métodos `add()` para agregar una clase, `remove()` para eliminar una clase, y `toggle()` para agregar o quitar la clase dependiendo del caso.

Existe un error muy básico cuando se trabaja en el DOM, este error es que a veces se suele romper el código del proyecto porque al llamar una clase de CSS que se encuentra sin información y en el JavaScript estas buscando esa información que no se encuentra, esto te dará un `null` que romperá el código de tu proyecto. Lo mas recomendable para que este error no suceda es siempre validar con un `if()` y dentro del `if()` colocar lo que estas llamando.

> Mucho cuidado con los `null` cuando estés trabajando en el DOM.

cuando no se pueda utilizar:
`element.id` se puede utilizar `element.setAttribute("id", "idElegido")`

-   getAttribute()
-   setAttribute()
-   classList
    -   .add()
    -   .remove()
    -   .toggle()
-   id
-   value
