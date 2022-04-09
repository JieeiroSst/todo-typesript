import { createPool, Pool } from 'mysql2-promise'

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        database: 'db',
        connectionLimit: 10
    });
    return connection;
}