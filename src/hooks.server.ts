// import type { Handle } from "@sveltejs/kit";

// export const handle: Handle = async ({ event, resolve }) => {
//     event.locals.recordCategory = {
//         category: event.locals.recordCategory?.category || "",
//         goal: event.locals.recordCategory?.goal || "",
//         deriveryDate: event.locals.recordCategory?.deriveryDate || new Date()
//     }

//     return resolve(event);
// }

import type { Handle } from "@sveltejs/kit";
import { createDb } from "$lib/db/client";

export const handle: Handle = async ({ event, resolve }) => {
  // Cloudflare 環境では event.platform?.env にバインドが入る
  // wrangler.jsonc の binding 名に合わせて取得する
  const env = event.platform?.env as { learn_record?: D1Database } | undefined;
  if (env?.learn_record) {
    // createDb は { DB: D1Database } 形を受け取るためラップする
    event.locals.db = createDb({ DB: env.learn_record }); // 型は app.d.ts に定義しておく
  }
  return resolve(event);
};
