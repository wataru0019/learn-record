import type { RegisterRecord } from "$lib/types"
const sampleData: RegisterRecord[] = [
    { category: "english", date: new Date("2025-09-07"), title: "toeic", content: "toeicの頻出単語を覚えた" },
    { category: "english", date: new Date("2025-09-07"), title: "toeic", content: "toeicの頻出単語を覚えた" },
    { category: "english", date: new Date("2025-09-07"), title: "toeic", content: "toeicの頻出単語を覚えた" }
]

export const load = async () => {
    return {
        records: sampleData
    }
}