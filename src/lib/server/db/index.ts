import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { DB_FILE } from '$env/static/private';
import * as schema from '$lib/server/schema';

const client = createClient({ url: DB_FILE });
export const DB = drizzle({ client, schema });
