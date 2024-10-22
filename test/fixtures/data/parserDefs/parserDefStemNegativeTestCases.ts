import { parserDefStemNegativeElClass } from './parserDefStemNegativeElClass';
import { parserDefStemNegativeParser } from './parserDefStemNegativeParser';
import { parserDefStemNegativeChildParserWrappers } from './parserDefStemNegativeChildParserWrappers';
import { parserDefStemNegativeChildParserWrappersChildParser } from './parserDefStemNegativeChildParserWrappersChildParser';
import { parserDefStemNegativeChildParserWrappersRef } from './parserDefStemNegativeChildParserWrappersRef';

export const parserDefStemNegativeTestCases = [
	{
		description: "when 'parserDef.el.class' is an empty string",
		errorExpected: "Invalid 'parserDef.el.class'",
		parserDefNegative: parserDefStemNegativeElClass,
	},
	{
		description: "when 'parserDef.parser' is an empty string",
		errorExpected: "Invalid 'parserDef.parser'",
		parserDefNegative: parserDefStemNegativeParser,
	},
	{
		description: "when 'parserDef.childParserWrappers[].ref' is an empty string",
		errorExpected: "Invalid 'parserDef.childParserWrappers[].ref'",
		parserDefNegative: parserDefStemNegativeChildParserWrappersRef,
	},
	{
		description: "when 'parserDef.childParserWrappers[].childParser' is an empty string",
		errorExpected: "Invalid 'parserDef.childParserWrappers[].childParser'",
		parserDefNegative: parserDefStemNegativeChildParserWrappersChildParser,
	},
	{
		description: "when 'parserDef.childParserWrappers[]' is empty",
		errorExpected: "Invalid 'parserDef.childParserWrappers'",
		parserDefNegative: parserDefStemNegativeChildParserWrappers,
	},
];
