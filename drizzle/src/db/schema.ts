import { varchar, text } from "drizzle-orm/pg-core";
import { pgTable, serial, date, real, uuid } from "drizzle-orm/pg-core";

export const cliente = pgTable("cliente", {
  id: uuid("id").defaultRandom().primaryKey(),
  nombre: varchar("full_name", { length: 50 }),
  apellido: varchar("full_name", { length: 50 }),
  telefono: varchar("phone", { length: 100 }),
  direccion: varchar("address", { length: 100 }),
  mail: varchar("mail", { length: 100 }),
});

export const pedido = pgTable("pedido", {
  id: uuid("id").defaultRandom().primaryKey(),
  fechaInicio: date("fecha_inicio", { mode: "date" }).defaultNow(),
});

export const producto = pgTable("producto", {
  id: uuid("id").defaultRandom().primaryKey(),
  descripcion: text("descripcion"),
  precio: real("precio"),
});
