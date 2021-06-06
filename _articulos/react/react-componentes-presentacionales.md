---
title: "Componentes presentacionales en 'React.js'"
date: 2021-05-30
tags: react
---

# Componentes presentacionales en 'React.js'

## Componentes
Son porciones de código **reutilizables** a lo largo de un proyecto. Las props le dan sentido a este concepto, ya que otorga la posibilidad de poder solamente reutilizar la estructura y pasar diferentes propiedades al componente. (Reutilizar la estructura pero no el contenido)

## Tipos de componente
Componente presentacional o componente de función

Se presenta en la interfaz, no genera eventos. Simplemente recibe propiedades y las imprime.

Su estructura es muy simple, se puede representar mediante varios pasos:

- Importar React.
- Crear una función con las siguientes características:

````jsx
const Curso = ({props a recibir}) => (
	//retorna estructura JSX
)
````

- Exportamos el componente.
