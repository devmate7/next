import sequelize from '@/handlers/sequelize';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	res.status(200).json(await sequelize.models.Example.findByPk(1));
}
