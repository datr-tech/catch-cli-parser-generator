import { Argument } from 'commander';
import { jsonValidator } from '../validators';

export const jsonArgument = new Argument(
	'<jsonStr>',
	"The JSON definition of the parser to be generated (as 'stringified' JSON)",
).argParser(jsonValidator);
