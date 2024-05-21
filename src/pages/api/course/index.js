import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';

import { createRouter } from "next-connect";

const router = createRouter();

router.get(async (req, res) => {
	const limit = req.query.limit ?? 10;
	const [results] = await connection.execute(
		'SELECT Course.SN, Course.Identifier, Course.Name, Course.Price, Domain.Name AS DomainName, File.Filename FROM Course LEFT JOIN Domain ON Course.DomainSN = Domain.SN JOIN File ON Course.ThumbnailSN = File.SN LIMIT ?',
		[limit]
	);

	res.status(200).json(results);
});

export default router.handler({ onError, onNoMatch })
