---
title: "Funciones callback"
date: 2021-05-21
tags: ajax websockets
---

# Funciones callback
Función que puede ser llamada dentro de otra para poder ejecutar un proceso de manera síncrona, se pasan como argumento y luego se invoca dentro de la misma (durante le proceso de la función inicial) para completar algún tipo de rutina o acción, es decir, se pasan como parámetros de otras funciones y se ejecutan dentro de estas. Las callback también pueden recibir parámetros.

### Uso

En JavaScript, es posible encontrar callbacks prácticamente en todas partes. Por ejemplo, cuando se quiere añadir un gestor de eventos a un botón, se usa un callback: una función que se ejecutará cuando el usuario haga clic en el botón seleccionado.  
Se puede considerar como ejemplo el problema de realizar varias operaciones arbitrarias en una lista. Una opción puede ser iterar sobre la lista, o también realizar alguna operación sobre cada uno de los elementos de la lista. En la práctica, la solución más común, pero no ideal, es utilizar iteradores como un bucle for) que deberá duplicarse en cada lugar del código donde sea necesario. Más aún, si la lista es actualizada por un proceso asíncrono (por ejemplo, si un elemento es añadido o eliminado), el iterador podría corromperse durante el paso a través de la lista.  
Otro uso es en la señalización de errores. Un programa en un sistema operativo Unix, por ejemplo, podría no querer terminar inmediatamente cuando recibe un SIGTERM; para tomar los recaudos necesarios, una función de retrollamada podría efectuar una limpieza.  

También puede utilizarse para controlar si una función actúa o no.

### Ejemplo

````html
<div id="myContent"></div>
<button id="btn">Ejecutar</button
````

````js
const setText = data => {
  myContent.textContent = data
}

const getData = callback => {
  setText('Solicitando autorización...')
  setTimeout(() => {
    callback(true)
  }, 1500)
}

const showData = callback => {
  setText('Esperando a mostrar la información...')
  setTimeout(() => {
    callback({name: 'Carol'})
  }, 1500)
}

btn.addEventListener('click', () => {
  getData(authorization => {
    if(authorization) {
      showData(user => {
        setText(user.name)
      })
    }
  })
})
````

En el ejemplo anterior se puede visualizar que los callback serán definidos después, cuando se llamen a las funciones originales, es decir, cuando se llame a la función **_getData,_** al momento de definir su utilidad. A pesar de que se haga uso de **_setTimeOut_**, toda la ejecución es síncrona, solo se usó para dar tiempo a leer los mensajes.

**Nota: Las callbacks a menudo se utilizan para continuar con la ejecución del código después de que se haya completado una operación asíncrona.**