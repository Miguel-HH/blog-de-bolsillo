
# Creación de nuestra primera base de datos

Se utiliza la palabra reservada: `use prueba1`
Luego de crear la base de datos, se debe hacer las colecciones que pertenecen a esta misma para poder observarla al usar: `show dbs`

***

# Creación de colecciones

## Colección

Una forma de definir este concepto, es usar como referencia las tablas en bases de datos relacionales.

## Métodos para crear colecciones

`db.createCollection("nombreColeccion")`

Es la primera forma, se asocia a crear una tabla en base de datos relacionales.

`db.prueba.insert ({ })`

La segunda forma es por inserción, de esta manera se insertan datos a una colección. Donde ya existe esta misma, simplemente se agrega el dato o caso contrario, la nueva colección.

## Consultar un valor dentro de una colección:

`db.nombreColeccion.find()`

***

# Listar y eliminar bases de datos

Para eliminar una base de datos:

Ubicarse en la instancia de la base de datos a eliminar.
Usar el método: `db.dropDatabase()`

***

# Listar y eliminar colecciones

- Seleccionar la colección deseada.
- Usar el método: `db.exampleCollection.drop()`

***

# Listar y eliminar documentos

Para listar:
- Seleccionar la colección deseada.
- Utilizar el método find().

**find() tiene un limite de 30 documentos**

Para eliminar:
- Tener seleccionada la colección deseada.
- Utilizar el método:

`db.example.deleteOne( { nombre: 'eliminar'} )`
//Elimina el primero que encuentra por orden

Elimina todos los documentos que cumplen con los parámetros de búsqueda:
`db.example.deleteMany( { nombre: 'eliminar' })`

***

# Leer datos utilizando selectores de consulta

## Consulta por criterio

Ayuda a filtrar documentos de acuerdo a condiciones.
`db.profesores.find( {idiomas: ['ingles', 'aleman' })`

## Operadores

$gt: 30 ⇒ Mayores a 30 $gte: 30 ⇒ Mayores o iguales a 30 $lt: 5 ⇒ Por debajo de 5 $eq: 2 ⇒ Contiene un 2

$ne: 30 ⇒ No tiene 30

## Operadores lógicos

$or = Una condición o la otra se deben cumplir.

$and = Una condición y la otra se deben cumplir
