import chalk from 'chalk';
import { readdir } from 'fs/promises';
import { basename, extname, join } from 'path';
import { env } from 'process';
import type { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

const base = env.PWD as string;
const modelsPath = join(base, 'src', 'models');
const sequelize = new Sequelize({
	dialect: env.DB_DRIVER as Dialect,
	logging: false,
	storage: join(base, env.DB_DATABASE as string)
});

try {
	await sequelize.authenticate();

	for (const modelPath of await readdir(modelsPath)) {
		const model = (await import(`@/models/${basename(modelPath)}`)).default;

		extname(modelPath) === '.js'
			? model(sequelize)
			: extname(modelPath) === '.ts' && sequelize.addModels([model]);
	}

	await sequelize.sync();

	console.info(chalk.bgGreenBright('Successful to connect to database'));
} catch (e) {
	console.error(
		chalk.bgRedBright('Failed to connect to database: %s'),
		(e as Error)
	);
}

export default sequelize;
