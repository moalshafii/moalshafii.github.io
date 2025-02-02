import { sqliteTable, text, integer, int } from 'drizzle-orm/sqlite-core';
import { servicesTable } from './services';
import { postsTable } from './posts';
import { sql } from 'drizzle-orm';

export const mediaTable = sqliteTable('media', {
	id: int().primaryKey({ autoIncrement: true }),
	postId: integer('post_id').references(() => postsTable.id, { onDelete: 'cascade' }),
	serviceId: integer('service_id').references(() => servicesTable.id, { onDelete: 'cascade' }),
	mediaType: text('media_type').notNull(),
	url: text('url').notNull(),
	timestamp: text('timestamp')
		.notNull()
		.default(sql`(current_timestamp)`)
});

export type mediaType = typeof mediaTable.$inferInsert;
