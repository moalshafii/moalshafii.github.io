import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { usersTable } from './users';
import { sql } from 'drizzle-orm';

export type PostTableType = typeof postsTable.$inferSelect;

export const postsTable = sqliteTable('posts', {
	id: int().primaryKey({ autoIncrement: true }),
	content: text('content').notNull(),
	userId: int('user_id')
		.notNull()
		.references(() => usersTable.id, { onDelete: 'cascade' }),
	timestamp: text('timestamp')
		.notNull()
		.default(sql`(current_timestamp)`)
});

export type PostType = typeof postsTable.$inferInsert;
