import { Command } from 'commander';
import { jsonArgument } from '@app/cli/arguments';
import { generateHandler } from '@app/cli/handlers';
import { preFlightOption } from '@app/cli/options';
import {
	CONSTS_COMMANDS_GENERATE_DESCRIPTION,
	CONSTS_COMMANDS_GENERATE_NAME,
} from '@app/config/consts/commands';
import { IArgsJSON } from '@app/interfaces/args';

export const generateCommand = new Command(CONSTS_COMMANDS_GENERATE_NAME);

generateCommand
	.description(CONSTS_COMMANDS_GENERATE_DESCRIPTION)
	.addArgument(jsonArgument)
	.addOption(preFlightOption)
	.action((json, options) => {
		const jsonObj = JSON.parse(json) as IArgsJSON;

		generateHandler({ json: jsonObj, options });
	});
