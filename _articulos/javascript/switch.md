---
title: "JavaScript Switch"
categories: javascript
date: 2021-05-09
---

# JavaScript Switch

Permite evaluar múltiples condiciones y a partir de ellas determinar la instrucción o bloque de instrucciones a ejecutar. Este condicional evitará que repitamos el `if else` en varias ocasiones para determinar un comportamiento con respecto a una variable

````js
switch (variableAEvaluar) {
	case condicion:
		console.log("Se ejecuta la primera condición")
		break
	case condicion2:
		console.log("Se ejecuta la segunda condición")
		break;
	default:
		console.log("Se ejcuta el default")
}
````

> Se utiliza `break` para evitar que se sigan realizando las validaciones siguientes y salga del Switch.

> `default` sirve para ejecutar código en caso que ninguna condición se cumpla

***

- Quiero aprender más sobre: ["JavaScript"](../00/javascript)
