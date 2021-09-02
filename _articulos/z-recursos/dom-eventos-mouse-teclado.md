---
title: Eventos del mouse y teclado
categories: javascript dom
date: 2021-05-17
---

# Eventos del mouse y teclado

## Eventos del mouse
Los principales eventos del mouse son los siguientes:
-   `click` (detecta un click)
-   `dblclick` (detecta un click doble)
-   `mouseenter` (es equivalente al hover de CSS cuando el mouse entra)
-   `mouseleave` (es equivalente al hover de CSS cuando el mouse sale)
-   `contextmenu` (captura el click derecho)
-   `mousedown` (detecta cuando se deja presionado el click)
-   `moseup` (detecta cuando se suelta el click)
-   mousemove (detecta cuando se mueve dentro de un elemento)

Con el método `preventDefault()` le indicarás al navegador que lo que debería hacer con una acción por defecto pare de hacerla. Por ejemplo, con el click derecho el navegador debería mostrar un menú contextual, pero si le pasas este método a tu función, ya no lo mostrará.

Con el objeto `event` podrás validar en que coordenadas está parado el mouse en el DOM pasándole las propiedades `pageX, pageY`. De esta manera podrás saber donde ocurrió exactamente un evento.

### ¿Cómo hacer un menú contextual personalizado?
Lo primero que deberás hacer es crear una constante, llamar un objeto `event` y abrir una función. Dentro de tu función crearás otra constante con el método `createElement()` para crear un `'div'`, y fuera de la constante con la propiedad `textContent` le pasarás el valor del `'div'`

Luego podrás darle estilos con la propiedad `style`. Aquí tendrás que utilizar las propiedades `pageX, pageY` usando la propiedad 

````js
style.top =${e.pageY}px & style.left = ${e.pageX}px
````

Luego usarás el método `appendChild()` para que se presente en el DOM y con una función `addEventListener` le pasarás el nombre de la constante creada agregándole el objeto `event` como parámetro.

Pero aún no todo está listo, ya que deberás validar si ya existe este menú para que se elimine cuando quieras crear uno nuevo en el DOM. Para esto, crearás un `id`, antes de hacer tú `appendChild()` y crearás una constante con el método `getElementById` y le pasarás el `id` creado.

Luego crearás un `if` y le pasarás la constante que contiene tu `id` y le indicarás la acción contraria a `appendChild()` que es `remove.Child()`

````js
const createMenu = () => {
	const menu = document.createElement('div')
	const prevMenu = document.getElementById('context-menu')
	menu.id = 'context-menu'
	menu.textContent = 'Soy un menu contextual'
	
	if(prevMenu) document.body.removeChild(prevMenu)
	document.body.appendChild(menu)
	
	menu.style.padding = '1em'
	menu.style.background = '#eee'
	menu.style.position= 'fixed'
	menu.style.top= '${e.pageY}px'
	menu.style.left= '${e.pageX}px'
}

title.addEventListener('contextmenu', e => {
	createMenu(e)
	e.preventDefault()
})
````

## Eventos del teclado
Los principales eventos del teclado son los siguientes:

-   `keydown` (cuando presionas una tecla)
-   `keyup` (cuando sueltas una tecla)
-   `keypress` (cuando dejas presionada una tecla sin soltarla)
