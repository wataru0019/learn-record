import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle",            // ← wrangler.toml の migrations_dir と揃える
  dialect: "sqlite"            // D1 は SQLite 方言
});