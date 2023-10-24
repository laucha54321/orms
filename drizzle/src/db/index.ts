import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

import * as schema from "./schema";

const client = new Client({
  connectionString:
    "postgres://postgres:postgres@localhost:5432/testDB?schema=public",
});
client.connect();

export const db = drizzle(client, { schema: schema });
