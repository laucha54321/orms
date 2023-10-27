# Drizzle

## Documentación

- Simple y completa.

## Comunidad

- Dinámica
- Va a ser de los ORMs mas populares en ts.

## Soporte de Base de Datos

- Soporte para las principales base de datos.
- Dialectos

## Proceso de Desarrollo

### Formato de los Datos

- Utiliza typescript para dar formato a los datos.
- Relación entre cliente y pedido.
- Personalmente me gusta mas la definición de Prisma (legibilidad) .

### Migraciones

- Definís el esquema de datos y con un comando aplicas las modificaciones a la base de datos.
- Como utiliza ts, un beneficio interesante es que podes empezar a hacer uso de inferencia incluso antes de generar el cliente o migrar los datos.

### Sintaxis y Querys

- Drizzle utiliza una sintaxis que esta muy relacionada con SQL.
- Esto no es ni malo ni bueno solo algo a tener en cuenta.
- En este ejemplo tenemos dos tablas una que seria la tabla posts y la otra que seria comments.
- Aca en este query drizzle primero busca el post que tenga id = 1 por eso eq.
- Y después de eso busca en la relación con los comments cada comentario que tenga una fecha anterior a la de new Date().

## Por que Drizzle es mas rápido que Prisma?

- Single Query
- Motor Rust

## Performance

### Prepared Statements

- Básicamente te permite preparar los strings de sql y luego pasarle los parametros para evitar armar el Query cada vez.

### Benchmark

- Este benchmark lo publicaron los de drizzle.
- Select all.
- El segundo esta haciendo un left join.
- En el segundo benchmark al diferencia en performance es mas aparente todavía.

## Conclusion

- Drizzle es ágil.
- Performante.
- Simple.
- Las migraciones te facilitan el desarollo.
- Pero la sintaxis se mantiene muy relacionada con SQL.
