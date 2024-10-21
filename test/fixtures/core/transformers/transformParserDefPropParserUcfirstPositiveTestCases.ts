export const transformParserDefPropParserUcfirstPositiveTestCases = [
	{
		description:
			"should perform the expected ucfirst transformation on the value of the 'parser' var",
		parser: 'abc',
		parserExpected: 'Abc',
	},
	{
		description:
			"when the value of the 'parser' var is in a ucfirst format, it should not be altered",
		parser: 'Abc',
		parserExpected: 'Abc',
	},
	{
		description:
			"when the value of the 'parser' var contains all uppercase letters, they should not be altered",
		parser: 'ABC',
		parserExpected: 'ABC',
	},
	{
		description:
			"when the value of the first letter in the 'parser' var is a symbol, it should not be altered",
		parser: '$abc',
		parserExpected: '$abc',
	},
	{
		description:
			"when the value of the first letter in the 'parser' var is a single backslash, the transformation should be performed",
		parser: 'abc',
		parserExpected: 'Abc',
	},
	{
		description:
			"when the value of the 'parser' var contains leading whitespace, the transformation should be performed on the remaining non-empty chars",
		parser: '   abc',
		parserExpected: 'Abc',
	},
];
