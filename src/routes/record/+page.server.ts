import type { Actions } from './$types'

export const load = async ({ cookies }) => {
    return {
        selectCategory: cookies.get("category") ? JSON.parse(cookies.get("category") as string) : null
    }
}

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData()
        const category = {
            category: data.get('category'),
            goal: data.get('goal'),
            deriveryDate: new Date(data.get('deriveryDate') as string)
        }
        cookies.set("category", JSON.stringify(category), {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
        })
        return { success: true }
    }
}