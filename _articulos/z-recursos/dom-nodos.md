---
title: "Nodos - DOM"
categories: javascript dom
date: 2021-05-14
---

# Nodos - DOM
> El DOM no es parte de la especificación de JavaScript. El DOM es una web API.

Cuando te encuentras trabajando en el DOM es bueno llamar a los elementos como nodos.

### ¿Qué es un nodo?

Es toda etiqueta HTML pero, con nodos el tema es más profundo, ya que también entran en juego los atributos y el contenido de las etiquetas.

Cuando se habla de DOM hay que pensar en un árbol.

*Cuando tienes seleccionado un elemento de HTML en la pestaña elementos de las developers tools, si vas a la consola y escribes `$0` podrás invocar ese elemento. Esto no es JavaScript, esto solo funciona dentro de las developers tools*

Los nodos tienen una propiedad llamada `nodeType` que te devolverá un número que identifica el tipo de nodo.

La propiedad `nodeName` te servirá para validar un nodo, *siempre en mayúsculas* el nombre del nodo.

Los nodos mas importantes son:

-   ELEMENT_NODE. Su valor es 1
-   TEXT_NODE. Su valor es 3
-   COMMENT_NODE. Su valor es 8

> *Toda etiqueta HTML es un elemento, pero el texto que esta contenido dentro de la etiqueta no es un elemento sino que es un nodo.*
> 
> Todo elemento es un nodo, pero no todo nodo es un elemento.

## Seleccionar nodos
Las 3 formas que utilizaras el 99.9% de los casos para seleccionar serán:

-   `document.getElementById()`
-   `document.querySelector()` o `element.querySelector()`
-   `document.querySelectorAll()` o `element.querySelectorAll()`

Deberás tener muy presente que tanto `querySelector()` como `querySelectorAll()` seleccionan con selectores de CSS. Todos los selectores de CSS son válidos.

Tanto `querySelector()` como `querySelectorAll()` no necesariamente parten del documento, también podrán partir de un elemento cualquiera.

Cuando necesites obtener un elemento en particular del DOM la manera correcta es utilizar un `id`

> Como buena práctica, siempre deberás reservar los ID de HTML para JavaScripts no para CSS.

## Colecciones de nodos
- HTMLCollection
- NodeList
- Operaciones con colecciones
- childnodes. devuelve nodos
- children. devuelve elementos

El selector `document.getElementById()` ya no es tan utilizado aunque se puede seguir utilizando, hoy en día se trabaja mas con `document.getElementsByTagName()`

`getElementsByTagName()` servirá para seleccionar elementos con el nombre de la etiqueta.

`document.getElementsByTagName()` y `document.querySelectorAll()` pueden ser muy parecidos, ya que ambos utilizan los tags de CSS para seleccionar. La diferencia esta en que `document.getElementsByTagName()` maneja los elementos en forma de arrays y `document.querySelectorAll()` en forma de nodeList.

Por lo tanto si quieres utilizar los métodos `.map` `.filter` o `.forEach` con el selector `document.querySelectorAll()` deberás convertirlo a un array.

### ¿Cómo convertir un nodeList a un array?

Podrás utilizar los spread operators ( `...` ) esto los expandirá y los sacará a cada uno como un elemento único, y deberás colocarlo dentro de corchetes.

EJ: 
````js
const nodeList = [...document.querySelectorAll('li')]
````

Pero esta no es la forma mas segura de trabajarlo. La forma mas segura y recomendada es con el prototipo `Array` y el método `from` así le estarás indicando que te cree un array desde la lista que le estarás pasando como parámetro.

EJ: 
````js
const nodeList = Array.from(document.querySelectorAll('li'))
````

### ¿Cómo eliminar un elemento del DOM?

Con el nombre de tu variable y el método `.map` utilizarás una arrow function y dentro tendrás un `if` con un `textContent` que indicará el contenido, un `.trim()` que eliminará los espacios en blanco y un `toUpperCase()` para que no haya errores de tipado, comprobarás su valor y tipo y le agregarás el método `.remove()`

````js
nodeList.map( el => {
	if(el.textContent.trim().toUpperCase() === 'OBJECT') {
		el.remove()
		}
})
````

Esto te funcionará para cuando tengas algún contenido en tu proyecto que en algún momento necesite una información determinada pero que en el tiempo esta ya no se necesite mas, como por ejemplo la fecha de una clase en vivo. Para eliminar las fechas de varias clases seria demasiado trabajo, con esto podrás crear una función que recorra y determine si la fecha de la clase ya paso y le elimine la fecha.

Otra forma de poder realizar este procedimiento sin utilizar un `Array.from` es utilizando un for( of )

````js
const nodeList = (document.querySelectorAll('li'))

for( let el of nodeList) {
	if(el.textContent.trim().toUpperCase() === 'OBJECT') {
		el.remove()
	}
````