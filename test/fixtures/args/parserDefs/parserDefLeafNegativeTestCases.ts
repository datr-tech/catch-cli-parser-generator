import { parserDefLeafNegativeElClass, parserDefLeafNegativeParser } from './index';

export const parserDefLeafNegativeTestCases = [
	{
		description: "when 'parserDef.el.class' is an empty string",
		errorExpected: "Invalid 'parserDef.el.class'",
		parserDefNegative: parserDefLeafNegativeElClass,
	},
	{
		description: "when 'parserDef.parser' is an empty string",
		errorExpected: "Invalid 'parserDef.parser'",
		parserDefNegative: parserDefLeafNegativeParser,
	},
];
