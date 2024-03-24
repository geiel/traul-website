import { z } from 'zod';

export const UserCookie = z.object({
	userId: z.string(),
	email: z.string(),
	isNew: z.boolean()
});
