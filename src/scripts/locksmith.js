import chalk from 'chalk';
import { randomUUID } from 'crypto';
import { createReadStream } from 'fs';
import { open, writeFile } from 'fs/promises';
import { EOL } from 'os';
import { join } from 'path';
import { env } from 'process';
import { createInterface } from 'readline';

await envelop(
	join(env.PWD, '.env'),
	{ APP_KEY: randomUUID() }
);

console.info(chalk.bgGreenBright('Successful to generate new APP_KEY'));

async function envelop(path, vars) {
	let data = '';
	const ri = createInterface({ input: createReadStream(path) });

	ri.on('line', line => {
		const offset = line.indexOf('=');
		const key = line.slice(0, offset);

		data += key in vars
			? `${key}=${vars[key]}`
			: line;
		data += EOL;
	});

	return new Promise(
		resolve => ri.on(
			'close',
			() => writeFile(path, data).then(() => resolve())
		)
	);
}
