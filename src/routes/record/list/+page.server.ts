import type { RegisterRecord } from "$lib/types"
import { learnRecord } from "$lib/db/schema"
const sampleData: RegisterRecord[] = [
    { category: "english", date: new Date("2025-09-07"), title: "toeic", content: "toeicの頻出単語を覚えた" },
    { category: "english", date: new Date("2025-09-07"), title: "toeic", content: "toeicの頻出単語を覚えた" },
    { category: "english", date: new Date("2025-09-07"), title: "toeic", content: "toeicの頻出単語を覚えた" }
]

export const load = async ({ locals }) => {
    const db = locals.db
    if (!db) throw new Error("DB not initialized");
    const records = await db.select().from(learnRecord).all()
    console.log("records from db: ", records)
    return {
        records: records
    }
}