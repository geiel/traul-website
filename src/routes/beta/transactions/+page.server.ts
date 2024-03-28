import { error } from '@sveltejs/kit';
import { z } from 'zod';
import type { PageServerLoad } from './$types';
import { UserCookie } from './schemas';

const subCategoriesSchema = z.object({
	id: z.number(),
	subCategoryType: z.string(),
	description: z.string(),
	currency: z.string(),
	totalAmount: z.number(),
	icon: z.object({
		String: z.string(),
		Valid: z.boolean()
	})
});

const uncategorizedTotal = z
	.object({
		currency: z.string(),
		totalAmount: z.number()
	})
	.array();

export const load: PageServerLoad = async ({ cookies, fetch, url }) => {
	const userParam = url.searchParams.get('user');
	if (userParam) {
		cookies.set('user', userParam, {
			secure: true,
			httpOnly: true,
			path: '/'
		});
	}

	const user = cookies.get('user');

	if (!user) {
		error(401, 'No puedes acceder aqui');
	}

	const parsedUser = UserCookie.safeParse(JSON.parse(user));

	if (!parsedUser.success) {
		error(400, parsedUser.error.message);
	}

	if (parsedUser.data.isNew) {
		await fetch('https://mailexpense-vkmj5hob2q-uk.a.run.app/gmail/initial-process?months=-1', {
			method: 'POST',
			body: JSON.stringify({
				email: parsedUser.data.email
			})
		});
	}

	const getUserCategoriesTotal = async (userId: string) => {
		const body = await fetch(
			`https://mailexpense-vkmj5hob2q-uk.a.run.app/sub-categories/2024-03?userId=${userId}`
		);
		const json = await body.json();
		const subCategories = subCategoriesSchema.array().nullable().parse(json);
		return subCategories;
	};

	const getUncategorizedTransactions = async (userId: string) => {
		const body = await fetch(
			`https://mailexpense-vkmj5hob2q-uk.a.run.app/uncategorized?yearMonth=2024-03&userId=${userId}`
		);

		const json = await body.json();
		const uncategorized = uncategorizedTotal.nullable().parse(json);
		return uncategorized;
	};

	return {
		transactions: await getUserCategoriesTotal(parsedUser.data.userId),
		uncategorizeTransactions: await getUncategorizedTransactions(parsedUser.data.userId)
	};
};
