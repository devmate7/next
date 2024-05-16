import sequelize from '@/handlers/sequelize';
import type { NextApiRequest, NextApiResponse } from 'next';
import { cookies } from 'next/headers';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'GET') return;

	cookies().delete('SESSION_TOKEN');
	res.status(204);
}
