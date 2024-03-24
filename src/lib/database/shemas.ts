import {
	pgTable,
	timestamp,
	text,
	uuid,
	pgEnum,
	integer,
	numeric,
	serial
} from 'drizzle-orm/pg-core';

const mailStatusEnum = pgEnum('status', ['Approved', 'Declined', 'Error']);
const currency = pgEnum('currency', ['DOP', 'USD']);
const mailProvider = pgEnum('mail_provider', ['gmail', 'outlook']);
const bankProvider = pgEnum('bank_provider', ['popular', 'banreservas', 'apap', 'banesco', 'bhd']);

export const users = pgTable('users', {
	id: uuid('id').notNull(),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
	mail: text('mail').notNull()
});

export const mailExpenses = pgTable('mail_expenses', {
	id: uuid('id').defaultRandom().primaryKey(),
	userId: uuid('user_id').notNull(),
	status: mailStatusEnum('status'),
	cardName: text('card_name'),
	cardNumber: integer('card_number'),
	currency: currency('currency'),
	mailVoucherDate: timestamp('mail_voucher_date'),
	amount: numeric('amount').notNull(),
	description: text('description'),
	provider: mailProvider('provider'),
	mailId: text('mail_id').unique('unique_mail_id'),
	bank: bankProvider('bank')
});

export const gmailCredentials = pgTable('gmail_credentials', {
	id: serial('id').primaryKey(),
	userId: uuid('user_id').notNull(),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
	accessToken: text('access_token'),
	idToken: text('id_token'),
	tokenType: text('token_type'),
	refreshToken: text('refresh_token'),
	expiry: timestamp('expiry', { withTimezone: true })
});
