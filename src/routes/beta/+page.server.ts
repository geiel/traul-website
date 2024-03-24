import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	google: async ({ fetch }) => {
		const request = await fetch('https://mailexpense-vkmj5hob2q-uk.a.run.app/google/url');
		const url = await request.text();
		redirect(303, url);
	}
} satisfies Actions;
