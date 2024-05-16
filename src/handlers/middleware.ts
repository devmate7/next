import type { NextApiRequest, NextApiResponse } from 'next';

export default function Middleware(...middleware: Function[]) {
	return async function (
		req: NextApiRequest,
		res: NextApiResponse
	) {
		if (res.headersSent || !middleware) {}
	};
}
