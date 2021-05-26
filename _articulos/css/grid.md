---
title: "CSS Grid"
date: 2021-05-07
tags: css
layout: post-css
description: "¿Qué es 'CSS grid'?"
---

# CSS Grid

grid area

- HTML

```html
<body>
    <div class="header">
        <p>CSS GRID</p>
    </div>

    <div class="contenedor">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
    </div>
</body>
```

- CSS GRID

```css
.contenedor {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 150px 200px;
    grid-gap:20px;
}
```

grid-gap:20px
espacio entre elementos del grid

```css
	minmax(100px, auto)

    grid-template-columns: repeat(6, 1fr);
```

***

- Tema relacionado: ["CSS flexbox"](flexbox)
- Volver a: ["Layout CSS"](layout)

***

- Quiero aprender más sobre: ["CSS"](../00/css)
