---
title: "Métodos - Programación orientada a objetos"
categories: javascript poo
date: 2021-05-13
---

# Métodos
> No utilices palabras reservadas para definir valores de atributos (Buena práctica).

Como buena práctica, dentro de los métodos no utilices `console.log` para presentar un resultado. Es recomendable utilizar la palabra reservada `return`

Un método siempre se deberá retornar un valor y luego se podrá ejecutar ese valor.

Ej: 

````js
nombreDelMetodo() {

`return` Lo que se quiere retornar

}
````

### ¿Qué son los métodos getters y setters?

GET = obtener

SET = dar

> Una buena práctica de la POO es, no acceder a los atributos llamándolos directamente.

### Método getters
Para acceder a los atributos deberás tener un método que se llamará `getNombreAtributo()` este método funcionará para retornar el valor del atributo. De esta manera estarás obteniendo atributos que son privados de la clase y a partir del método `getNombreAtributo()` lo estarás convirtiendo en accesible.

**Buenas prácticas**
````js
getNombreAtributo() {

 return this.parametro1

}
````

### Método setters.
Para cambiar el valor de un atributo deberás tener un método que se llamará `setNombreAtributo()` y entre los paréntesis colocar donde se guardará el nuevo valor que recibirá este método. En sí, el método funcionará para recibir el valor de un atributo y cambiarlo a un nuevo valor.

Ej: 
````js
setNombreAtributo(nuevoAtributo) {
	this.parametro1 = nuevoAtributo
}
````

> getters y setters son regla de oro en la POO.