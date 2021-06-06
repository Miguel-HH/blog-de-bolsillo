---
title: "React.js"
date: 2021-05-26
tags: react
---

## Conociendo JSX
Es una sintaxis creada por Facebook para extender JavaScript. De este modo, permite escribir código JavaScript como si fuera XML.

### Ventajas
Otorga facilidad a los web designers para escribir código en React.

### Escribir código en React sin JSX
Desde index.js se accede al método ReactDOM, por ese mismo lado, se le pasa al método render los parámetros requeridos:

````jsx
ReactDOM.render(elemento, ruta);
````
Para el elemento:
````jsx
const elemento = React.createElement(componente, propiedades, hijos);
````
Para la ruta:

Se accede a la clase public, luego verificamos que el html posea un elemento con el id de la ruta.

Finalmente se crea una constante con la ruta:

````jsx
const ruta = document.getElementById("ruta");
````

## Escribir código en React con JSX
````jsx
import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById("root");

ReactDOM.render(<h1 className="saludos">Hola mundo</h1>, root);

````
Se le pueden pasar directamente el texto al método render.

## Principales restricciones
- Todo elemento en React debe tener el signo de apertura y cierre.
- Los componentes deben envolver un sólo elemento padre.
- Para devolver 2 o mas elementos, se utiliza Fragment. Este permite envolver distintos div o varios componentes hijos.
- Se puede usar <> </> como alternativa a a Fragment.
- Las etiquetas img, siempre se cierran.
- Para agregar clases, class se convierte en: className.
- Al utilizar For en React, debe ser convertido en: htmlFor.
- No utilizar estructuras condicionales como if, else o el búcle while. Por este mismo lado, se debe recurrir a otros recursos que veremos mas adelante.

## () vs {}
const App = () => (
    // Escribir cógigo JSX
)

const App = () => {
    // Escribir cógigo JS puro
}