---
title: "Petición HTTP XML - XHR"
date: 2021-05-18
categories: ajax websockets
---

# Petición HTTP XML - XHR
-   XHR es un **objeto JavaScript.**
-   Fue diseñado por Microsoft.
-   ⚠️ Antes no podíamos hacer una petición de una partecita de la página web, si no una petición completa al servidor.
    -   El servidor nos devolvía completamente todo, nuevamente el html, nuevamente el css, nuevamente el JavaScript, nuevamente las imágenes, todo.
-   XHR nos permite ahora hacer peticiones de solo pequeños trozos, de solo algunos datos, para que yo los pueda procesar sin tener que recargar toda la página.
-   XHR es usado para transferir información entre un navegador web un servidor web.
-   Todos los navegadores tienen incorporados un Objeto **XMLHttpRequest** (**XHR**).
-   XHR es usualmente usado para solicitar/pedir y recibir información para el propósito de modificar una página web.
-   A pesar de que XML contiene Http en el nombre, XHR es utilizado con otros protocolos diferentes a HTTP, y la información puede ser de muchos diferentes tipos como HTML, CSS, XML, JSON, e incluso texto plano.
-   El objeto XHR es un **sueño de desarrolladores web,** porque puedes:
    -   Actualizar una página web sin recargar la página.
    -   Solicitar información desde un servidor - después de que la página ha cargado.
    -   Recibir información desde un servidor - después de que la página ha cargado.
    -   Enviar información a un servidor - en el background.
-   El objeto XHR es el concepto subyacente de AJAX y JSON.

### Ejemplo Practico
-   Vamos a crear un servidor local fácilmente con la extensión de Visual Studio Code, llamada Live Server (muy fácil de utilizar).
-   Creamos un proyecto (folder), llámalo como tú quieras, con los siguientes archivos y folders

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primer XHR</title>
</head>
<body>
    <h1>Hola Mundo</h1>
    <form action="/data.html" method="get">
        <button>Cargar Clasicamente</button>
    </form>
    <script src="js/script.js"></script>
</body>
</html>
```

```html
<!-- data.html -->

<table>
    <thead>
        <tr>
            <th>
                nombre
            </th>
            <th>
                edad
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Carol</td>
            <td>25</td>
        </tr>
        <tr>
            <td>Diana</td>
            <td>15</td>
        </tr>
        <tr>
            <td>Lisbeth</td>
            <td>30</td>
        </tr>
    </tbody>
</table>
```

```js
// script.js

alert("hola mundo");
```

-   Iniciamos el servidor dándole click derecho - Open with Live Server, al archivo index.html. nos informará el puerto y en el navegador solo debemos escribir `http://localhost` y el puerto: `localhost:5500` en mi caso.
-   Estamos haciendo una petición al servidor, una petición a data.html, por medio del protocolo http. el servidor nos trajo toda la información solicitada y me recargo toda la página completamente. pero no queríamos perder mi hola mundo, mi index.html se perdió por completo. ¿Cómo podemos solucionar eso con AJAX?    
-   Lo que vamos a hacer es que cuando se clickee el botón "btnload" no me recargue toda la página, si no que me dibuje toda la información en el div "myContent".

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primer XHR</title>
</head>
<body>
    <h1>Hola Mundo</h1>
    <div id="myContent"></div>

    <form action="/data.html" method="get">
        <button>Cargar Clasicamente</button>
    </form>

    <button id="btnLoad">Cargar via Ajax</button>
    <script src="js/script.js"></script>
</body>
</html>
```

```js
// script.js

const contentDiv = document.getElementById('myContent');
const btn = document.getElementById('btnLoad');

// agregar un eventListener para cuando el botón es presionado
btn.addEventListener('click', event => {
    // una vez el botón es presionado
    // creo un objeto XHR
    const xhr = new XMLHttpRequest();

    /**
     * OPEN
     * Con open le digo a donde voy a hacer la petición y con que método.
     * A donde voy a hacer la petición puede ser:
     * 1. la url completa
     * 2. la url absoluta
     * 3. la url relativa
     * La relativa sería solo el / ignorando el dominio: <http://midominio.com>
     * Si tuviera que hacer la petición a otro dominio, si tendría que poner el dominio completo
     * El tercer parámetro: Quiero hacer la petición asíncrona o no (siempre va a ser true, porque no tiene sentido una petición que no sea asíncrona).
     */
    xhr.open('GET', '/data.html', true);

    // tengo que decirle al objeto que tiene que hacer con la data que recibe del servidor
    // el evento load es cuando ya el servidor me manda la respuesta
    xhr.addEventListener('load', e => {
        // A ese div, agréguele lo que reciba de texto en la respuesta del servidor. 
        console.log(e.target);
        contentDiv.innerHTML = e.target.responseText;
    });

    // Realice la petición
    xhr.send();
});
```

## Estado del objeto XMLHttpRequest
Es necesario conocer el ciclo de vida de la petición para entender cuándo será necesario reaccionar a algún evento de dicha petición.

### ReadyState
Tiene cinco estados:  
-   Uninitialized: No se ha llamado al método open() del objeto.
-   Loading: Cuando no se ha llamado a send().
-   Loaded: Informa que ya se realizó la petición, ya se hizo la llamada al método send() y el estado y encabezado ya se encuentran disponible.
-   Interactive: Cuando se está descargando la información de respuesta del servidor.
-   Completed: Indica que la petición ha sido completada correctamente.

