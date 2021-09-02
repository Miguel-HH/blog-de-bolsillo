# Integración de plataforma Griky

## Griky
(0:15) Inicio
(5:05) Griky es un "Software as a Service". Una instancia separada y personalizada.
(12:55) No hay experiencias similares
(20:05) Solamente se puede ingresar a Griky con una suscripción activa en Chargebee
(20:50) Otros metodos de pago no tienen una integración
(29:15) Widget de Chargebee
(35:00) Griky puede construir un widget
(40:10) Script en el header
(44:30) Payment Gateways
(57:50) 18 de Agosto 
(58:20) Suscripciones gratuitas
(1:01:50) Mínimo viable
(1:05:45) No se pueden hacer muchos cambios en la capa visual
(1:07:05) Los cursos se conectan por enlaces, no por APIs
(1:08:10) Para ir directamente  un curso, el usurio debe estar logueado
(1:12:40) Filtro de cursos
(1:13:25) Documentación de Chargebee

---

## Procesamiento del pago
Son APIs

### 1 - Formulario
- (1:00) Datos:
	- Nombre
	- Correo
	- **Información del pago**

- La información se manda a: "Checkout.com"
- (3:30) La landing debe ser autónoma

### 2 - Checkout.com (Pasarela de pagos)
- Recibe los datos del formulario
- (1:15) Envía un **token**
- El token se envía a la apliación de afiliación (Chargebee)

### 3 - Chargebee (Gestor de suscripciones)
- Crea la suscripción
- (1:50) Chargebee tiene un webhook que escucha los eventos. Eventos como "Se creó la suscripción"
- Si la suscripción está activa, entonces se manda a la plataforma: Classrun
- (26:05) El token pasa de Checkout a Chargebee, de forma nativa

### 4 - CLASS RUN (Acceso a la plataforma educativa)
- Recibe la información del pago
- Envía un correo al usuario con las credenciales

---

### dlocal.com
(24:45)
- Está enmascarado
- Es el intermediario de Checkout


---


## catalogo
clic en categorias, salen sub categorias
7-8 categorias
5 subcategorias
listado de cursos

