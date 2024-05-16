import chalk from 'chalk';
import { join } from 'path';
import { env } from 'process';
import { verbose } from 'sqlite3';

const DIR_BASE = env.PWD as string;
const MSG_CONNECTION_FAILED = 'Failed to connect to database';
const MSG_CONNECTION_SUCCESSFUL = 'Successful to connect to database';

const sqlite3 = verbose();
const connection = {
	database: new sqlite3.Database(
		join(DIR_BASE, env.DB_DATABASE as string),
		(e: Error | null) => e
			? console.error(chalk.bgRedBright(MSG_CONNECTION_FAILED, e))
			: console.info(chalk.bgGreenBright(MSG_CONNECTION_SUCCESSFUL))
	),

	execute<T extends Record<string, unknown>>(
		statement: string,
		parameters: unknown[] = []
	): Promise<[T[], (keyof T)[]]> {
		return new Promise(
			(resolve, reject) => this.database.all(
				statement,
				...parameters,
				(e: Error | null, results: T[]) => e
					? reject(e)
					: resolve([results, Object.keys(results[0])])
			)
		);
	}
};

export default connection;
