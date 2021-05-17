---
title: ¿Cómo funciona "insertBefore()" e "insertAdjacent()"?
tags: javascript dom
date: 2021-05-17
---

# Reemplazar hijos en el DOM - 2
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
