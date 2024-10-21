export const transformParserDefPropParserUcfirstNegativeTestCases = [
	{
		description:
			"should not perform the transformation when the length of the value of the 'parser' var is less than 2",
		errorExpected: undefined,
		parser: 'a',
		parserExpected: 'a',
	},
	{
		description: "should throw the expected error when the value of the 'parser' var is undefined",
		errorExpected: "Invalid 'parser'",
		parser: undefined,
		parserExpected: undefined,
	},
	{
		description:
			"should not perform a transformation, when the length of the value of the 'parser' var after whitespace has been removed is less than 2",
		errorExpected: undefined,
		parser: '   a',
		parserExpected: '   a',
	},
];
