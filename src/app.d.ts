// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			db: ReturnType<typeof import("$lib/db/client").createDb> | undefined;
			// recordCategory?: {
			// 	category: string,
			// 	goal: string,
			// 	deriveryDate: Date
			// }
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
