import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const learnRecord = sqliteTable("learn-record", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    category: text("category").notNull(),
    title: text("title").notNull(),
    content: text("content").notNull(),
    date: integer("date").notNull()
  });