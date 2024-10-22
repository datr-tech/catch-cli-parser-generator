import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';

export const assertPathNegativeTestCases = [
	{
		description: "when 'path' is an empty string",
		errorExpected: "Invalid 'path'",
		path: '',
	},
	{
		description: "when 'path' is undefined",
		errorExpected: "Invalid 'path'",
		path: undefined,
	},
	{
		description: "when 'path' does not identify a known file",
		errorExpected: "'path' does not identify a valid file object",
		path: `${CONSTS_PATHS_APP_ROOT}/assertTemplatePathNegativeTestCases.${Date.now()}.txt`,
	},
	{
		description: "when 'path' represents a dir",
		errorExpected: "'path' does not identify a valid file",
		path: CONSTS_PATHS_APP_ROOT,
	},
];
