---
title: "Guía para renderizar componentes en 'React.js'"
date: 2021-06-05
tags: react
layout: post-react
description: "Guía para renderizar componentes en 'React.js'"
---

# Guía para renderizar componentes en 'React.js'
````jsx
import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
````
- Llamamos a `ReactDOM.render()` con el elemento `<Welcome name="Sara" />`.
- React llama al componente `Welcome` con `{name: 'Sara'}` como `props`.
- Nuestro componente `Welcome` devuelve un elemento `<h1>Hello, Sara</h1>` como resultado.
- React DOM actualiza eficientemente el DOM para que coincida con `<h1>Hello, Sara</h1>`.

## Composición de componentes
````jsx
import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  return <h1>Hola, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Miguel" />
      <Welcome name="Angel" />
      <Welcome name="Laika" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
````

***

- Quiero aprender más sobre: ["React"](../00/react)
