import { Argument } from 'commander';
import { jsonValidator } from '../validators';

export const jsonArgument = new Argument(
	'<json>',
	'The JSON definition of the parser to be generated',
).argParser(jsonValidator);
