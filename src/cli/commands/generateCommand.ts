import { Command } from 'commander';
import { jsonArgument } from '@app/cli/arguments';
import { generateHandler } from '@app/cli/handlers';
import { preFlightOption } from '@app/cli/options';
import {
	CONSTS_COMMANDS_GENERATE_DESCRIPTION,
	CONSTS_COMMANDS_GENERATE_NAME,
} from '@app/config/consts/commands';
import { ICommonCodeStr, ICommonJson } from '@app/interfaces/common';
import { ICliOptionsGenerate } from '@app/interfaces/cli/options';

export const generateCommand = new Command(CONSTS_COMMANDS_GENERATE_NAME);

generateCommand
	.description(CONSTS_COMMANDS_GENERATE_DESCRIPTION)
	.addArgument(jsonArgument)
	.addOption(preFlightOption)
	.action((jsonStr: ICommonCodeStr, options: ICliOptionsGenerate): void =>
		generateHandler({
			json: JSON.parse(jsonStr) as ICommonJson,
			options,
		}),
	);
