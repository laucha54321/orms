```mermaid
classDiagram
  direction LR
post  "1" *-- "*" comments
class post{
  Int id PK
  String Content
}
class comments{
  Int id PK
  Int id_post FK
  String Content
}
```
