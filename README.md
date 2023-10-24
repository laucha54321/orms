# Links

[POC REPO MECA](https://github.com/utnfrrodsw/poc)

# Cosas para comparar

- Documentación
- Comunidad
- Migraciones
- Proceso de Desarrollo (querys, código)
- Velocidad (performance)

# Fomato de Datos

```mermaid
classDiagram
  direction RL
Cliente "*" *-- "1" Pedido
Pedido "*" *-- "*" Producto

class Cliente{
    Int
    String nombre
    String apellido
    String telefono
    String direccion
    String Mail
}
class Producto{
    String id
    String Descripcion
    Real precio
}
class Pedido{
    string id
    Date fechaInicio
}

```
