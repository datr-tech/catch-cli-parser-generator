import { Command } from 'commander';
import { generateCommand } from '@app/cli/commands';
import {
	CONSTS_PROGRAMME_DESCRIPTION,
	CONSTS_PROGRAMME_NAME,
} from '@app/config/consts/progamme';
import packageJson from '../package.json';

export const app = new Command();
const { version } = packageJson;

app
	.name(CONSTS_PROGRAMME_NAME)
	.description(CONSTS_PROGRAMME_DESCRIPTION)
	.version(version);

app.addCommand(generateCommand, { isDefault: true });
