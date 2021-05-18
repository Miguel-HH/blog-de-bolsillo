---
published: false
title: "Animaciones en CSS"
date: 2021-05-05
tags: css
layout: post-css
---

# Animaciones en CSS

## 3.1 - Animaciones vs Transiciones

### at-rule keyframes

Las animaciones cambian las propiedades CSS a través de momentos en el tiempo definidos como **@keyframes** (Debe especificarse con el signo %).

### Diferencia entre animaciones y transiciones

A diferencia de las transiciones que requieren un cambio de propiedad para ejecutarse, las animaciones ejecutan por si mismas esos cambios de propiedades.

Es posible animar varias propiedades al mismo tiempo, sólo hay que separarlas por comas.

## 3.2 - Animation name y duration

### Propiedades mínimas para animar

```css
**animation-name:** none | nombre-animacion;
/* Se pueden crear varias animaciones separadas por comas */
```

```css
**animation-duration:** 0s | time;
/* no acepta valores negativos */
```

### Otras propiedades para animar

```css
**animation-iteration-count:** 1 | number | infinite;
/* acepta números no enteros*/
```

## 3.3 - Animation timing function

```css
**animation-timing-function:** ease | ease-in | ease-in-out | ease-out | linear | steps | cubic-bezier();
```

- **ease**: Inicio acelerado, final desacelerado.
- **ease-in**: Inicio desacelerado, final acelerado.
- **ease-in-out**: Inicio y final desacelerado, medio acelerado.
- **ease-out**: Final desacelerado.
- **linear**: La misma curva de tiempo durante toda la animación.

## 3.4 - Animation iteration-count y direction

```css
**animation-direction:** normal | reverse | alternate | alternate reverse;
```

- **normal**: La animación inicia en el fotograma 0% y termina en el 100%.
- **reverse**: Inicia en el 100% y termina en el 0%.
- **alternate**: Comienza en 0%, avanza al 100% y termina regresando vuelve al 0%.
- **alternate reverse**: Comienza en 100%, avanza al 0% y termina regresando al 100%.

## 3.5 - Animation play-state

```css
animation-play-state: running | paused;
```

- **running**: Determina si la animación será ejecutada.
- **paused**: Determina si la animación será pausada.
- Si una animación se pausa, no podrá reiniciarse con CSS, sólo con JavaScript.

### Pausar animación con sólo pasar el cursor

```css
&:hover {
	animation-play-state: paused;
}
```

## 3.6 - Animation delay y fill-mode

```css
**animation-delay:** 0s | time;
/* acepta valores negativos */
```

```css
**animation-fill-mode:** none | forwards | backwards | both;
```

- **forwards**: Al finalizar la animación, el elemento se quedará con los valores del último keyframe.
- **backwards**: Al finalizar la animación, el elemento se quedará con los valores del primer keyframe.
- **none**: Al finalizar la animación, el elemento no usará el primer ni el último valor.
- **both**: Al finalizar la animación, el elemento tomará los valores que pueda del primer keyframe y luego tomará los valores que pueda del último keyframe.

## 3.7 - Shorthand animation

```css
animation: propiedad-1 propiedad-2 3s 4s;
```

- La propiedad **animation** abrevia todas las otras propiedades de animación CSS**.**
- La primera unidad de tiempo indica **animation-duration**.
- La segunda unidad de tiempo indica **animation-delay.**
- El resto de propiedades no tiene un orden específico requerido.

## 3.8 - Reverse animation

```css
@keyframes nombre-animacion {
	porcentaje | from | to {
		//estilos
	}
}
```

- Cada **keyframe** debe especificarse con el signo %.
- Los keyframes actúan como selectores por lo que pueden agruparse por comas.
- **from** = 0%
- **to** = 100%
- Si el 0% no está declarado, el navegador elegirá los valores iniciales del elemento.
- Si el 100% no está declarado, el navegador elegirá los valores iniciales del elemento.

***

- Quiero aprender más sobre: ["CSS"](../00/css)
