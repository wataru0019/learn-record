import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

// Cloudflare Workers ランタイムの Env を受けてクライアントを作る
export function createDb(env: { DB: D1Database }) {
  return drizzle(env.DB, { schema });
}