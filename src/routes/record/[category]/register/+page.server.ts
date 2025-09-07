import type { Actions } from './$types'
import type { RegisterRecord } from '$lib/types'
import { redirect } from '@sveltejs/kit'

export const load = async ({ params }) => {
    console.log(params)
    return {
        category: params.category
    }
}

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData()
        const record: RegisterRecord = {
            category: data.get('category') as string,
            date: new Date(data.get('register-date') as string),
            title: data.get('title') as string,
            content: data.get('content') as string
        }
        // console.log("record is: ", record)
        return { success: true }
    }
}