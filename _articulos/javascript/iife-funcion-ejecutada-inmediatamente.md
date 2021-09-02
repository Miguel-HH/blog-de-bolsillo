---
title: "¿Qué son las 'IIFE' en JavaScript?"
date: 2021-06-20
categories: javascript
layout: post-javascript
description: "Descripción de las 'IIFE' o 'Expresión de función ejecutada inmediatamente'."
---

# ¿Qué son las 'IIFE' en JavaScript?

'Immediately Invoked Function Expression' (Expresión de función ejecutada inmediatamente). También conocida como **función autoejecutable**.

```js
(function () {
    // código
})();
```

 ## Las IIFE no contaminan el 'scope'

Al estar encerrada entre paréntesis, las IIFE no pueden acceder a variables fuera de estos paréntesis. Y las variables dentro de los paréntesis no pueden ser llamadas desde fuera de la IIFE.

***

- Quiero aprender más sobre: ["JavaScript"](../00/javascript)
