---
title: "Escribir un 'Hola mundo' con React"
date: 2021-06-05
tags: react
layout: post-react
description: "Guía definitiva para escribir un 'Hola mundo' con React."
---

# Escribir un 'Hola mundo' con React

````jsx
import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Miguel',
  lastName: 'Angel'
};

const element = (
  <h1>
    ¡Hola, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
````

***

- Quiero aprender más sobre: ["React"](../00/react)
