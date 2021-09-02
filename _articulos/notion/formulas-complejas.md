---
published: false
title: "Fórmulas en Notion"
date: 2021-05-05
categories: notion
layout: post-notion
description: "Ejemplo de una fórmula muy compleja utilizada en Notion"
---

# Fórmulas en Notion

````ruby
if(if(length(prop("Emociones")) > 0, length(replaceAll(prop("Emociones"), "\[^,\]", "")) + 1, 0) == 2, if(prop("Emociones") == "Alegría, Ira", "Orgullo", if(prop("Emociones") == "Alegría, Miedo", "Culpabilidad", if(prop("Emociones") == "Ira, Tristeza", "Envidia", if(prop("Emociones") == "Miedo, Tristeza", "Desesperación", "¡Confusión!")))), if(prop("Emociones") == "Alegría", if(prop("Intensidad") == "Muy intensa", "Éxtasis", if(prop("Intensidad") == "Poco intensa", "Serenidad", if(prop("Causa") == "Anticipación", "Optimismo", if(prop("Causa") == "Confianza", "Amor", if(prop("Causa") == "Rechazo", "Morbosidad", if(prop("Causa") == "Sorpresa", "Deleite", "Alegría")))))), if(prop("Emociones") == "Ira", if(prop("Intensidad") == "Muy intensa", "Furia", if(prop("Intensidad") == "Poco intensa", "Molestia", if(prop("Causa") == "Anticipación", "Alevosía", if(prop("Causa") == "Confianza", "Dominación", if(prop("Causa") == "Rechazo", "Desprecio", if(prop("Causa") == "Sorpresa", "Indignación", "Ira")))))), if(prop("Emociones") == "Miedo", if(prop("Intensidad") == "Muy intensa", "Terror", if(prop("Intensidad") == "Poco intensa", "Temor", if(prop("Causa") == "Anticipación", "Ansiedad", if(prop("Causa") == "Confianza", "Sumisión", if(prop("Causa") == "Rechazo", "Vergüenza", if(prop("Causa") == "Sorpresa", "Susto", "Miedo")))))), if(prop("Emociones") == "Tristeza", if(prop("Intensidad") == "Muy intensa", "Depresión", if(prop("Intensidad") == "Poco intensa", "Melancolía", if(prop("Causa") == "Anticipación", "Pesimismo", if(prop("Causa") == "Confianza", "Sentimentalismo", if(prop("Causa") == "Rechazo", "Remordimiento", if(prop("Causa") == "Sorpresa", "Decepción", "Tristeza")))))), "¡Confusión!")))))
````

````js
if(
    if(
        length(prop("Emociones")) > 0,
        length(replaceAll(prop("Emociones"), "[^,]", "")) + 1,
        0
    ) == 2,

    if(
        prop("Emociones") == "Alegría, Ira",
        "Orgullo",
        if(
            prop("Emociones") == "Alegría, Miedo",
            "Culpabilidad",
            if(
                prop("Emociones") == "Ira, Tristeza",
                "Envidia",
                if(
                    prop("Emociones") == "Miedo, Tristeza",
                    "Desesperación",
                    "¡Confusión!"
                )
            )
        )
    ),

    if(
        prop("Emociones") == "Alegría",
        if(
            prop("Intensidad") == "Muy intensa",
            "Éxtasis",
            if(
                prop("Intensidad") == "Poco intensa",
                "Serenidad",
                if(
                    prop("Causa") == "Anticipación",
                    "Optimismo",
                    if(
                        prop("Causa") == "Confianza",
                        "Amor",
                        if(
                            prop("Causa") == "Rechazo",
                            "Morbosidad",
                            if(
                                prop("Causa") == "Sorpresa",
                                "Deleite",
                                "Alegría"
                            )
                        )
                    )
                )
            )
        ),
        if(
            prop("Emociones") == "Ira",
            if(
                prop("Intensidad") == "Muy intensa",
                "Furia",
                if(
                    prop("Intensidad") == "Poco intensa",
                    "Molestia",
                    if(
                        prop("Causa") == "Anticipación",
                        "Alevosía",
                        if(
                            prop("Causa") == "Confianza",
                            "Dominación",
                            if(
                                prop("Causa") == "Rechazo",
                                "Desprecio",
                                if(
                                    prop("Causa") == "Sorpresa",
                                    "Indignación",
                                    "Ira"
                                )
                            )
                        )
                    )
                ),
                if(
                    prop("Emociones") == "Miedo",
                    if(
                        prop("Intensidad") == "Muy intensa",
                        "Terror",
                        if(
                            prop("Intensidad") == "Poco intensa",
                            "Temor",
                            if(
                                prop("Causa") == "Anticipación",
                                "Ansiedad",
                                if(
                                    prop("Causa") == "Confianza",
                                    "Sumision",
                                    if(
                                        prop("Causa") == "Rechazo",
                                        "Vergüenza",
                                        if(
                                            prop("Causa") == "Sorpresa",
                                            "Susto",
                                            "Miedo"
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    if(
                        prop("Emociones") == "Tristeza",
                        if(
                            prop("Intensidad") == "Muy intensa",
                            "Depresión",
                            if(
                                prop("Intensidad") == "Poco intensa",
                                "Melancolía",
                                if(
                                    prop("Causa") == "Anticipación",
                                    "Pesimismo",
                                    if(
                                        prop("Causa") == "Confianza",
                                        "Sentimentalismo",
                                        if(
                                            prop("Causa") == "Rechazo",
                                            "Remordimiento",
                                            if(
                                                prop("Causa") == "Sorpresa",
                                                "Decepción",
                                                "Miedo"
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        "¡Confusión!"
                    )
                )
            )
        )
    )
)
````

***

- Quiero aprender más sobre: ["Notion"](../00/notion)
