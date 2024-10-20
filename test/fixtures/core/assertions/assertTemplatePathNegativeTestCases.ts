import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';

export const assertTemplatePathNegativeTestCases = [
	{
		description: "when 'templatePath' is an empty string",
		errorExpected: "Invalid 'templatePath'",
		templatePath: '',
	},
	{
		description: "when 'templatePath' is undefined",
		errorExpected: "Invalid 'templatePath'",
		templatePath: undefined,
	},
	{
		description: "when 'templatePath' represents a dir",
		errorExpected: "'templatePath' does not identify a valid file object",
		templatePath: `${CONSTS_PATHS_APP_ROOT}/assertTemplatePathNegativeTestCases.${Date.now()}.txt`,
	},
	{
		description: "when 'templatePath' represents a dir",
		errorExpected: "'templatePath' does not identify a valid file",
		templatePath: CONSTS_PATHS_APP_ROOT,
	},
];
