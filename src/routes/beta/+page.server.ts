import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	google: async ({ fetch }) => {
		const request = await fetch('http://localhost:8080/google/url');
		const url = await request.text();
		redirect(303, url);
	}
} satisfies Actions;
