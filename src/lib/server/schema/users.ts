import { sql } from 'drizzle-orm';
import { sqliteTable, text, int } from 'drizzle-orm/sqlite-core';

export const usersTable = sqliteTable('users', {
	id: int().primaryKey({ autoIncrement: true }),
	username: text('username').notNull().unique(),
	email: text('email').notNull().unique(),
	password: text('password').notNull(),

	name: text('name').default('anonymous'),
	firstName: text('first_name'),
	lastName: text('last_name'),

	image: text('image'),
	cover: text('cover'),

	bio: text('bio'),
	job: text('job'),

	location: text('location'),
	city: text('city'),
	country: text('country'),

	timestamp: text('timestamp')
		.notNull()
		.default(sql`(current_timestamp)`)
});

export type UserType = typeof usersTable.$inferInsert;
