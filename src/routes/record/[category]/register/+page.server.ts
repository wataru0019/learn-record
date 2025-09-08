import type { Actions } from './$types'
import type { RegisterRecord } from '$lib/types'
import { learnRecord } from '$lib/db/schema'
import { redirect } from '@sveltejs/kit'

export const load = async ({ params }) => {
    console.log(params)
    return {
        category: params.category
    }
}

export const actions: Actions = {
    default: async ({ request, locals, params }) => {
        const data = await request.formData()
        const record: RegisterRecord = {
            category: data.get('category') as string,
            date: new Date(data.get('register-date') as string),
            title: data.get('title') as string,
            content: data.get('content') as string
        }
        const db = locals.db
        if (!db) throw new Error("DB not initialized");
        await db.insert(learnRecord).values({
            id: Math.floor(Math.random() * 1000000),
            category: params.category,
            title: record.title,
            content: record.content,
            date: 20250907
            }
        )
        // console.log("record is: ", record)
        return redirect(303, '/record/list');
    }
}