import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.recordCategory = {
        category: event.locals.recordCategory?.category || "",
        goal: event.locals.recordCategory?.goal || "",
        deriveryDate: event.locals.recordCategory?.deriveryDate || new Date()
    }

    return resolve(event);
}