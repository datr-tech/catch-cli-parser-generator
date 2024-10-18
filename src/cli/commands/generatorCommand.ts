import { Command } from 'commander';
import { generatorHandler } from '@app/cli/handlers';
import { jsonArgument } from '@app/cli/arguments';
import {
	CONSTS_COMMANDS_GENERATOR_DESCRIPTION,
	CONSTS_COMMANDS_GENERATOR_NAME,
} from '@app/config/consts/commands';

export const generatorCommand = new Command(CONSTS_COMMANDS_GENERATOR_NAME);

generatorCommand
	.description(CONSTS_COMMANDS_GENERATOR_DESCRIPTION)
	.addArgument(jsonArgument)
	.action((name, options) => generatorHandler({ name, options }));
