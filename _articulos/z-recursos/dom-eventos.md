---
title: ¿Qué son los eventos del DOM?
tags: javascript dom
date: 2021-05-17
---

# ¿Qué son los eventos del DOM?
-   onEvent
-   addEventListener()
-   handlers
-   Objeto event

Un evento es algo que ocurre en la página. Todo aquello que ocurre en la página como la interacción de un usuario, la carga de un recurso, que se complete una acción etc.

En teoría, no necesariamente implicando una interacción del usuario. Por ejemplo en la carga de una página existe un usuario que la carga pero, hay eventos de carga de página que ocurren cuando la página terminó de cargar y esto no depende del usuario.

### Para manejar los eventos en JavaScript utilizarás el método `addEventListener()`

Un `callback` es una función que se pasa como parámetro. Él `callback` se ejecuta automáticamente es decir, no necesita los paréntesis.

### Capturar un texto del documento y mostrarlo con un evento.

Para esto necesitarás un parámetro, por lo tanto deberás crear siempre una función anónima en este caso una función flecha y ahí ejecutarás tu función con el parámetro.

Luego necesitarás capturar dinámicamente el texto del documento con un objeto `event`. Cada vez que necesites información del objeto del evento pásale este `event` como parámetro. El objeto `event` podrás utilizarlo haciendo referencia a una `e`

En la consola del navegador todo lo que comienza con `on` son eventos.
