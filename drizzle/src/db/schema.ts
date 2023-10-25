import { varchar, text } from "drizzle-orm/pg-core";
import { pgTable, serial, date, real, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { primaryKey } from "drizzle-orm/pg-core";

// Cliente
export const cliente = pgTable("cliente", {
  id: uuid("id").defaultRandom().primaryKey(),
  nombre: varchar("full_name", { length: 50 }),
  apellido: varchar("full_name", { length: 50 }),
  telefono: varchar("phone", { length: 100 }),
  direccion: varchar("address", { length: 100 }),
  mail: varchar("mail", { length: 100 }),
});

export const clienteRelations = relations(cliente, ({ many }) => ({
  pedido: many(pedido),
}));

//Pedidos
export const pedido = pgTable("pedido", {
  id: uuid("id").defaultRandom().primaryKey(),
  fechaInicio: date("fecha_inicio", { mode: "date" }).defaultNow(),
  cliente_id: uuid("cliente_id")
    .notNull()
    .references(() => cliente.id),
});

export const pedidoRelations = relations(pedido, ({ one, many }) => ({
  cliente: one(cliente, {
    fields: [pedido.cliente_id],
    references: [cliente.id],
  }),
  producto: many(producto),
}));

//Producto
export const producto = pgTable("producto", {
  id: uuid("id").defaultRandom().primaryKey(),
  descripcion: text("descripcion"),
  precio: real("precio"),
});
//ProductosPedido
export const productosPedido = pgTable(
  "productosPedido",
  {
    id_pedido: uuid("id_pedido")
      .notNull()
      .references(() => pedido.id),
    id_producto: uuid("id_producto")
      .notNull()
      .references(() => producto.id),
  },
  (t) => ({
    pk: primaryKey(t.id_pedido, t.id_producto),
  })
);

export const productosPedidoRelations = relations(
  productosPedido,
  ({ one }) => ({
    pedido: one(pedido, {
      fields: [productosPedido.id_pedido],
      references: [pedido.id],
    }),
    producto: one(producto, {
      fields: [productosPedido.id_producto],
      references: [producto.id],
    }),
  })
);
