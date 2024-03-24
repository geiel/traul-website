import { DATABASE_URL } from '$env/static/private';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './shemas';

const sql = postgres(DATABASE_URL);
const db = drizzle(sql, { schema });

export default sql;
