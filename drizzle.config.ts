import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	out: 'drizzle',
	schema: 'src/lib/server/schema/',
	dialect: 'sqlite',
	dbCredentials: { url: process.env.DB_FILE! }
});
