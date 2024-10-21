export const assertParserNameNegativeTestCases = [
	{
		description: "when 'parserName' is an empty string",
		errorExpected: "Invalid 'parserName'",
		parserName: '',
	},
	{
		description: "when 'parserName' is undefined",
		errorExpected: "Invalid 'parserName'",
		parserName: undefined,
	},
];
