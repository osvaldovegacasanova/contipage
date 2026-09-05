---
title: "Enfriar el biogás antes de comprimirlo: efecto sobre el número de etapas y sobre la condensación interna"
description: "El enfriamiento previo del biogás cambia la densidad de succión, y con ella el número de etapas del booster y el riesgo de condensación interna."
pubDate: 2026-08-29
heroImage: "/images/blog-biogas-boosters.webp"
tags: ["biogás", "sopladores", "ingeniería"]
author: "Continental Blowers Andes"
---

Un booster de biogás se especifica frecuentemente con dos números: caudal y presión de descarga. La temperatura y la humedad del gas en la succión suelen quedar fuera de la hoja de datos, y son las que terminan definiendo cuántas etapas de compresión se requieren y cuál puede ser la vida útil del equipo. Este artículo describe qué cambia dentro del soplador cuando el gas se enfría antes de entrar, y cómo revisar ese punto en una instalación que ya está operando.

## Lo que la hoja de datos podría estar omitiendo

En un relleno sanitario el caudal de biogás varía de forma permanente. El relleno es un sistema vivo: la temperatura ambiente, la madurez de la masa, la calidad de los residuos y cualquier evento de infiltración cambian la entrega de gas dentro de la misma jornada. Debido a esto el booster opera con variador de frecuencia y con medición de caudal de metano en línea. Cuando el caudal cae y el equipo se mantiene a las RPM de diseño, empieza a generar vacío, aspira aire, y la mezcla con oxígeno puede volver explosiva la operación.

La presión, en cambio, se mantiene estable. La resistencia a vencer viene de la antorcha o de los motogeneradores, y esa contrapresión varía poco.

Con el caudal resuelto por el variador y la presión fijada por el consumo, quedan dos variables de succión sin control explícito: la temperatura del gas y su contenido de agua. Ahí se decide el resto del diseño.

## Densidad de succión y número de etapas

Un soplador centrífugo entrega presión en proporción a la densidad del gas que maneja. A igual velocidad de rotación e igual geometría del impulsor, un gas más denso produce más presión por etapa.

La densidad de un gas crece de forma inversa a su temperatura absoluta. Bajar la succión de 40 °C a 25 °C significa pasar de 313 K a 298 K, cerca de 5% más densidad y, con ello, cerca de 5% más presión por etapa. Sobre un incremento de referencia cercano a 100 mbar por etapa a nivel del mar, ese margen se acumula a lo largo del tren de compresión.

El efecto se vuelve visible al contar etapas. Una descarga de 350 mbar manométricos se resuelve alrededor de cuatro etapas a nivel del mar. Un pre-acondicionamiento que recupera algunos milibares por etapa puede ser la diferencia entre cuatro etapas y cinco, con el impacto directo que eso tiene en largo del equipo, número de impulsores, masa rotante y costo de repuestos.

Dos condiciones acotan el cálculo. La altitud reduce la densidad del aire y del gas, así que el mismo equipo entrega menos presión por etapa en faena de altura. Y la composición del biogás importa: en relleno sanitario el metano se mueve entre 45% y 55%, y el resto de la mezcla cambia la densidad de succión.

## Condensación dentro del equipo

El biogás de relleno sale saturado de humedad. Si entra al soplador en esa condición, el agua condensa sobre impulsores y carcasa, y ese líquido acelera la corrosión interna y desbalancea el conjunto rotante.

Enfriar el gas antes de la succión hace dos cosas a la vez. Baja el punto de rocío, y permite retirar el condensado en un punto del proceso donde el drenaje es simple. El gas llega entonces al equipo con menos agua disponible, y la compresión, que además eleva la temperatura, lo aleja todavía más de la saturación.

El mismo enfriamiento condiciona la etapa siguiente. Los filtros de siloxanos trabajan dentro de una ventana definida de temperatura y humedad, así que el pre-acondicionamiento determina el rendimiento de la remoción de siloxanos aguas abajo. Los siloxanos forman sílice en los motores, de modo que esa remoción protege al generador tanto como el enfriamiento protege al soplador.

## Dónde va el pre-acondicionamiento en la línea

El orden habitual en una línea de relleno sanitario es este:

| Etapa | Función | Qué se controla |
|---|---|---|
| Captación y separación de condensado | Retirar las gotas arrastradas desde los pozos | Agua libre |
| Filtro de biogás multietapa | Separación centrífuga, demister y etapa coalescente con cartuchos cercanos a 5 µm | Material particulado fino y gotas pequeñas |
| Intercambiador de calor | Doble chaqueta, refrigerante por fuera y biogás por dentro | Temperatura y punto de rocío de succión |
| Booster centrífugo multietapas | Entregar caudal variable a presión constante | Presión de descarga |
| Filtro de siloxanos | Proteger los motogeneradores | Contenido de siloxanos |

<figure>
  <img src="/images/blog-biogas-linea.webp" alt="Dos boosters centrífugos Continental Industrie junto al intercambiador de calor en una planta de biogás de relleno sanitario" width="640" height="480" loading="lazy" />
  <figcaption>Los boosters y, a su derecha, el equipo de enfriamiento que acondiciona el gas antes de la succión.</figcaption>
</figure>

La decisión de ingeniería está en las etapas tres y cuatro. Diseñar el soplador de forma aislada deja el enfriamiento como un accesorio opcional. Diseñar la línea completa convierte el enfriamiento en un parámetro de entrada del soplador, con el potencial beneficio de un ahorro de etapas.

## Lo que el biogás exige al equipo en cualquier caso

El pre-acondicionamiento mejora el punto de operación. Las exigencias constructivas del biogás siguen siendo obligatorias.

| Componente | Especificación | Razón |
|---|---|---|
| Eje | Acero inoxidable con tratamiento térmico | Condiciones corrosivas del biogás |
| Sellos de rodamientos | Sellos especiales según la condición de succión | En rellenos y biodigestores hay presión positiva en la entrada; contenerla evita fuga de gas y contaminación del lubricante |
| Juntas de entrada y descarga | Juntas de expansión en acero inoxidable | Servicio permanente en biogás |
| Recubrimiento interior | Recubrimiento anticorrosivo específico sobre carcasa e impulsores | Corrosión interna de los metales |
| Conjunto completo | Certificación ATEX según zona | Atmósfera explosiva, Zona 1 o Zona 2 |

## Cómo revisarlo en su instalación

Cuatro mediciones bastan para saber si hay margen.

| Qué medir | Dónde | Qué indica |
|---|---|---|
| Temperatura de gas en la succión | Brida de entrada del booster | Distancia respecto de la temperatura de diseño |
| Punto de rocío en la succión | Aguas abajo del enfriamiento | Riesgo de condensación interna |
| Presión diferencial por etapa | Succión contra descarga | Si el tren rinde lo esperado a la densidad real |
| Rango de trabajo del variador | Registro del PLC | Si el equipo opera cerca del límite inferior de caudal |

Una temperatura de succión por sobre la de diseño, sostenida, indica que hay presión disponible que se está perdiendo. Si además el equipo trabaja con frecuencia en la parte baja del rango del variador, el problema es de dimensionamiento antes que de acondicionamiento, y el enfriamiento no lo resuelve.

**Dónde termina la recomendación.** El pre-acondicionamiento deja de aportar cuando el gas ya llega por debajo de su punto de rocío y a temperatura estable. En una planta con captación corta, gas frío y contrapresión baja, el costo del intercambiador y su circuito de refrigerante puede superar el valor de la etapa de compresión que ahorra. La evaluación se hace con la temperatura medida en terreno, nunca con la temperatura de catálogo.

## Caso de referencia

En una planta de biogás de relleno sanitario, Continental Blowers Andes especificó un booster para 2.700 m³/h con 350 mbar manométricos de descarga, accionado por motor eléctrico de velocidad variable para seguir la producción del relleno. La especificación incorporó, sobre el requerimiento original, un filtro desarrollado para el proyecto y un sistema de deshumidificación aguas arriba del soplador. La reducción de temperatura obtenida, cercana a 15 °C, aumentó la presión disponible por etapa y eliminó la condensación interna en el equipo. El filtro de siloxanos que protege a los motogeneradores es parte de la línea y proviene de otro proveedor.

## Preguntas frecuentes

**¿Por qué un booster de biogás necesita variador de frecuencia?**

Porque el relleno entrega caudal variable y el equipo debe seguir esa variación. A RPM fija con caudal bajo, el booster genera vacío y aspira aire, y la mezcla con oxígeno se vuelve explosiva.

**¿La presión también varía?**

No de forma relevante. La contrapresión la fija la antorcha o el motogenerador, y esos consumos son estables. Lo que varía es el caudal.

**¿Cuánto influye la altitud en el número de etapas?**

La densidad del gas baja con la altitud, así que el mismo equipo entrega menos presión por etapa. Un booster especificado a nivel del mar necesita revisión de etapas para operar en faena de altura.

**¿El enfriamiento reemplaza al filtro de siloxanos?**

No. El enfriamiento retira agua y protege al soplador. Los siloxanos se retiran en una etapa dedicada, aguas abajo, y su rendimiento depende de que el gas llegue dentro de la ventana de temperatura y humedad que el filtro requiere.

**¿Qué pasa si el biogás entra saturado al soplador?**

El agua condensa sobre impulsores y carcasa. El resultado es corrosión acelerada y desbalance del conjunto rotante, con reducción de la vida útil del equipo.
