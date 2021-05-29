---
title: "'fetch()' vs 'XMLHttpRequest'"
date: 2021-05-26
tags: ajax websockets
---

# 'fetch()' vs 'XMLHttpRequest'
Reemplazo moderno para XMLHttpRequest. Quita la complejidad del objeto XMLHttpRequest y permite de manera nativa realizar promesas sin necesidad de crear una librería propia.

Una de las características más importantes del API fetch es que utiliza promesas, es decir, devuelve un objeto con dos métodos, uno then() y otro catch() a la que pasaremos una función que será invocada cuando se obtenga la respuesta o se produzca un error.  

Es importante tomar en cuenta que, si se devuelve un código HTTP correspondiente a un error no se ejecutará el catch(), ya que se ha obtenido una respuesta válida, por lo que se ejecutará el then(). Solo si hay un error de red o de otro tipo se ejecutará el catch().

Para obtener el body o cuerpo del mensaje devuelto por el servidor se deberá obtener una segunda promesa por medio de los métodos del objeto Response. Por ello será muy habitual ver dos promesas encadenadas, una para el fetch() y otra con el retorno del método que utilicemos para obtener el body.