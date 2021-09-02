---
title: "Objeto 'date' - DOM"
date: 2021-05-19
categories: javascript dom
---

# Objeto 'date' - DOM
Date es un objeto que trae las fechas del sistema operativo, no del navegador.

## ¿Cómo se usa el objeto date?

Para trabajar con este objeto deberás instanciarlo. Si quieres conseguir una fecha lo que deberás hacer es: crear una constate y asignarle la palabra reservada `new` y el objeto `Date`

### Instanciar
-   `new Date()`
-   `new Date(year,month,day)`
-   `new Date(year,month,day,hours,minutes,seconds)`
-   `new Date(strings)`

### Métodos
-   `getFullYear()` (Devuelve el año)
-   `getMinutes()` (Devuelve los minutos)
-   `getSeconds()` (Devuelve los segundos)
-   `getDate()` (Devuelve el día del mes)
-   `getDay()` (Devuelve el día de la semana de 0 a 6) (Lunes = 0, Domingo = 6)
-   `getMonth()` (Devuelve los meses de 0 a 11) (Enero = 0, Diciembre = 11)
-   `getTime()` (Devuelve los milisegundos desde el 1 de enero de 1970 hasta la fecha)
-   `getTimezoneOffset()` (Devuelve la diferencia de tu zona horaria al Meridiano de Greenwich que es la referencia de zona horaria para todos los países)

	> Cada operación del objeto Date siempre se devuelve en milisegundos.