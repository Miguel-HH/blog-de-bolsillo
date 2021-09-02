---
title: "Hosting gratuito e ilimitado para WordPress"
date: 2021-07-08
categories: wordpress
layout: post-wordpress
index: 2
description: "WordPress"
---

# Hosting gratuito e ilimitado para WordPress
## Hosting 'gratuitos'
- **WordPress.com** ofrece un hosting gratuito. Pero no permite utilizar plugins.
- **ByetHost.com** ofrece un hosting gratuito que sí permite utilizar plugins como "Elementor".

## Certificado SSL gratuito
ByetHost ofrece un hosting y dominio gratuito. Pero no un certificado SSL. Para conseguir uno, necesitas utilizar otro dominio.

## Dominio gratuito
Los dominios **.ga** y **.tk** suelen ser gratuitos por 12 meses y son ideales para tus pequeños proyectos personales.

## ByetHost con SSL gratuito
- Un dominio **.ga** se configura desde **freenom.com**
- En la pestaña "Managment tools" elige la opción "Nameservers" y escribe:
	- NS1.BYET.ORG
	- NS2.BYET.ORG
	- NS3.BYET.ORG
	- NS4.BYET.ORG
	- NS5.BYET.ORG
- Ve a CloudFlare.com y crea un certificado SSL. Es necesario borrar los nombres de los 5 servidores y utilizar los 2 nombres que te da CloudFlare. (Esto puede tardar hasta 24 horas)
- En CloudFlare, ir a la pestaña "SSL/TLS"
- Cambiar la opción "Full" a "Flexible"
- Ir a la sub-pestaña "Edge certificates"
- Activar las opciones "Always Use HTTPS" y "Automatic HTTPS Rewrites"

***

- Quiero aprender más sobre: ["WordPress"](../00/wordpress)
