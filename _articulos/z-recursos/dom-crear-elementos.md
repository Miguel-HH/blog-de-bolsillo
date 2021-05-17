---
title: ¿Cómo crear elementos en el DOM?
tags: javascript dom
date: 2021-05-15
---

# ¿Cómo crear elementos en el DOM?

Para crear un elemento crearás una constante y le asignarás el `document.createElement("")` y como parámetro le pasarás la etiqueta HTML, pero esto crearía un contenido vacío. Para pasarle un contenido deberás utilizar el nombre de tu constante y asignarle un `textContent` o un `InnerHTML` esto dependiendo de lo que necesites. También podrás agregarle clases, o id.

`appendChild()` es para insertar el elemento en algún lugar del DOM. `appendChild()` siempre insertará el elemento como último hijo de otro elemento.

### Ejemplo

````html
<div  id="teacher">Profesor: <span></span></div>
````

````js
const profesor = document.createElement("p")
const profesorContainter = document.getElementById("teacher")

profesor.textContent = "Alexys Lozada"
profesor.classList.add("teacher")

if(profesorContainer && profesorContainer.querySelector("span")) {
	profesorContainer.querySelector("span").appendChild(profesor)
}
````