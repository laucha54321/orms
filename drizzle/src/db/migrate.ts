import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { migrate } from "drizzle-orm/node-postgres/migrator";

const pool = new Pool({
  connectionString:
    "postgres://postgres:postgres@localhost:5432/testDB?schema=public",
});

const db = drizzle(pool);

async function main() {
  console.log("Migrando datos...");
  await migrate(db, { migrationsFolder: "drizzle" });
  console.log("COMPLETADO");
  process.exit(0);
}

main().catch((err) => {
  console.log(err);
  process.exit(0);
});
