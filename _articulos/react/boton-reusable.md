---
title: "Botón reusable para React"
date: 2021-06-05
tags: react
layout: post-react
description: "Guía definitiva crear 'botones reusables' con React"
---

# Botón reusable para React

````jsx
import React from 'react'
import './Button.css'

function Button(props) {
    return (
        <button>{props.content}</button>
    )
}

export default Button;
````

## Llamar al botón desde index.js

````jsx
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/atoms/buttons/Button.js'

function App() {
    return (
        <Button content="Botón"/>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
````

***

- Quiero aprender más sobre: ["React"](../00/react)
