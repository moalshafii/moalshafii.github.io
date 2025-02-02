import { sqliteTable, text, int } from 'drizzle-orm/sqlite-core';
import { usersTable } from './users';
import { sql } from 'drizzle-orm';

export const servicesTable = sqliteTable('services', {
	id: int().primaryKey({ autoIncrement: true }),
	userId: int('user_id')
		.notNull()
		.references(() => usersTable.id, { onDelete: 'cascade' }),

	title: text('title').notNull(),
	description: text('description'),
	category: text('category').notNull(),
	price: int('price'),

	timestamp: text('timestamp')
		.notNull()
		.default(sql`(current_timestamp)`)
});
