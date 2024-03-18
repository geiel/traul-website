import sql from '$lib/database';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const emailForm = data.get('email');

		if (!emailForm) {
			return fail(400, {
				message: 'Por favor ingresa tu email.'
			});
		}

		const email = emailForm.toString();

		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			return fail(400, {
				message: 'El email que ingresaste no es valido.'
			});
		}

		const userExist =
			await sql`select email from prelauch_users where prelauch_users.email = ${email}`;

		if (userExist.length > 0) {
			return fail(400, {
				message: 'El email que ingresaste ya está registrado.'
			});
		}

		await sql`insert into prelauch_users (email) values (${email.toString()})`;
	}
} satisfies Actions;
