# Drizzle

## Documentación

La documentación en drizzle esta bastante bien sin embargo la de prisma esta mas completa.

## Comunidad

La comunidad de drizzle es super activa y por las tendencias probablemente este va a ser de los orms mas utilizados con typescript.

## Migraciones

[zenstack - Drizzle vs Prisma](https://zenstack.dev/blog/drizzle-prisma#iteration-speed)
Las migraciones de drizzle funcionan muy bien. A diferencia de prisma drizzle maneja el renombrar de columnas ofreciéndote las opciones en el terminal al hacer el migrate. ![Alt text](image.png)

## Proceso de Desarrolló

### Generar el cliente

Al drizzle utilizar typescript para definir el schema de los datos este puede hacer uso de inferencia directamente. Esto no es asi para prisma ya que primero tenes que hacer el prisma generate para que genere el cliente.

### Sintaxis y Querys

[prisma - Drizzle vs Prisma](https://www.prisma.io/docs/concepts/more/comparisons/prisma-and-drizzle)

Drizzle expone al usuario a utilizar operadores similares a los que se utilizan en SQL. Cuando haces querys con drizzle es muy similar a hacerlas con SQL directamente, la sintaxis es un poco mas linda y podemos aprovechar la inferencia de typescript pero es básicamente SQL.
Esto no es una ventaja ni desventaja solo algo que tener en cuenta. A diferencia de Prisma que si utiliza algunos operadores para hacer queys que son mas amigables si no sabes usar SQL.

## Performance

[prisma is slow](https://www.youtube.com/watch?v=J2j1XwZRi30)

### Porque drizzle es mejor que prisma?

#### Performance

Drizzle es super rápida como ORM ya que es una fina capa de abstracción en typescript sobre SQL.
Ademas a diferencia de otros ORMs (Prisma) drizzle hace un solo query por cada sentencia.

Prisma es lenta en comparación a drizzle porque prisma utiliza un motor escrito en rust que en principio era para poder desabollar para multiples lenguajes pero hoy prisma dejo de darle soporte a GoLang y el único lenguaje al que le están dando soporte es a typescript (y javascript).
Encima

### Prepeared Statements

Drizzle tiene una gran ventaja sobre prisma con los **prepared statements**.

## Conclusion

Drizzle es una herramienta que te da flexibilidad y libertad. Prisma es un poco mas rígida pero también por esa razón un poco mas simple.
