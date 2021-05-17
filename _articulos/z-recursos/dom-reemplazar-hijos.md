---
title: Reemplazar hijos en el DOM
tags: javascript dom
date: 2021-05-17
---

# Reemplazar hijos en el DOM
`replaceChild(newChild, oldChild)`

Esto te servirá para reemplazar un elemento. En los parámetros deberás colocarle el nuevo hijo y separado por coma el viejo hijo el cual será reemplazado. El nuevo hijo deberá ser un elemento y siempre será el primer parámetro.

## Clonar y eliminar
Clonar significa sacar una copia de un elemento y eliminarlo pues sería removerlo.

-   `cloneNode()` (este deberá recibir un valor `true` si se quiere clonar con todas sus clases)
-   `remove()` (eliminará el elemento seleccionado)

## Crear elementos y fragmentos
Ya sabes como crear elementos con, pero`createElement()` también existe `createDocumentFragment()` que te permitirá guardar documentos en memoria, guardar estructuras HTML en memoria antes de pintarlos. Esto mejora muchísimo el rendimiento.

Un fragment es como si fuera un elemento del DOM, pero vive en memoria, por lo que te permitirá ahorrar mucho rendimiento.

> La operación más costosa para un navegador, es siempre el pintado de elementos en el DOM.

## ¿Cómo funciona "insertBefore()"?
`insertBefore()` recibe dos parámetros, el primero es el nuevo elemento y el segundo será el elemento que ya existe. Para poder insertar realizarás los siguientes pasos.

Crearás una constante para obtener el Id del padre en HTML, luego crearás otra constante para obtener los hijos de este elemento padre. Luego para los hijos del elemento padre, crearás otra constante dentro de la cual necesitarás una función para identificar cuáles de estos hijos también tienes hijos o sea los nietos del padre.

A los nietos le crearás una constante y dentro una función para definir en cuál de los nietos se hará la inserción.

Crearás una constante con el nuevo elemento que necesites insertar.

Por último al hijo del padre donde se encuentran los nietos donde insertarás tu elemento, le agregas el método `insertBefore()` y dentro de los paréntesis le colocas la constante del nuevo elemento, y separado por coma la constante del nieto donde se hará la inserción.

> Cuando se trabaja con el DOM es recomendable utilizar métodos como `filter` y `map` para hacer manipulaciones y evitar los `for`

## ¿Cómo funciona "insertAdjacent()"?
Aquí deberás coger un elemento para insertar un hijo indicándole uno de los siguientes métodos y posiciones.

-   Métodos
    -   `insertAdjacentElement(position,el)`
    -   `insertAdjacentHTML(position,html)`
    -   `insertAdjacentText(position,text)`
-   Posiciones.
    -   `beforebegin` (antes de que comience el elemento) (Seria como un hermano anterior)
    -   `afterbegin` (después de que comience el elemento) (Seria como su primer hijo)
    -   `beforeend` (antes de que termine el elemento) (Seria como su ultimo hijo)
    -   `afterend` (después de que termine el elemento) (Seria como su hermano siguiente)
