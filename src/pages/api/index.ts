import connection from '@/handlers/sqlite3';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const [[data]] = await connection.execute('SELECT * FROM example');

	res.status(200).json(data);
}
