---
title: Objeto "navigator" - DOM
date: 2021-05-18
categories: javascript dom
---

# Objeto "navigator" - DOM
No es recomendable invertir el tiempo en detectar el navegador lo que deberías detectar son features. ¿Cómo?

Si tu página utiliza CSS grid por ejemplo, sería recomendable indicarle al usuario actualizar su navegador, como también recomendarle algún navegador.

No caigas en la trampa de que el objeto `navigator` es para detectar el navegador. Para detectar las características utilizarás CSS, JavaScript o modernizr. Modernizr es una librería que te permite detectar si un navegador tiene características que tú estás usando.

El operador `in` su usa para preguntar si una propiedad existe en un objeto. Por ejemplo: si quisieras confirmar si puedes utilizar `promise` en tu navegador lo harías de la siguiente manera: `'promise' in window` esto te devolverá un booleano.

Los navegadores trabajan sobre los desarrollos de otros navegadores.
