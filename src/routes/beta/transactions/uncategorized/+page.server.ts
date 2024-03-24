import { error } from '@sveltejs/kit';
import { UserCookie } from '../schemas';
import type { PageServerLoad } from './$types';
import { z } from 'zod';

const mailExpense = z.object({
	id: z.string(),
	userId: z.string(),
	status: z.string(),
	mailVoucherDate: z.coerce.date(),
	amount: z.number(),
	bank: z.string(),
	currency: z.object({
		String: z.string()
	}),
	description: z.string()
});

export const load: PageServerLoad = async ({ fetch, cookies }) => {
	const user = cookies.get('user');

	if (!user) {
		error(401, 'No puedes acceder aqui');
	}

	const parsedUser = UserCookie.safeParse(JSON.parse(user));

	if (!parsedUser.success) {
		error(400, parsedUser.error.message);
	}

	const body = await fetch(
		`https://mailexpense-vkmj5hob2q-uk.a.run.app/expenses/uncategorized?yearMonth=2024-03&userId=${parsedUser.data.userId}`
	);
	const json = await body.json();
	const mailExpenses = mailExpense.array().parse(json);

	return {
		mailExpenses
	};
};
