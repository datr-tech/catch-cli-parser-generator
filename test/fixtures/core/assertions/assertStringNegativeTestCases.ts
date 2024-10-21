export const assertStringNegativeTestCases = [
	{
		description: "when 'value' is an empty string",
		errorExpected: "Invalid 'aTestString'",
		name: 'aTestString',
		value: '',
	},
	{
		description: "when 'value' is undefined",
		errorExpected: "Invalid 'aTestString'",
		name: 'aTestString',
		value: undefined,
	},
	{
		description: "when 'name' and 'value' are undefined",
		errorExpected: 'Invalid string',
		name: undefined,
		value: undefined,
	},
	{
		description: "when 'name' is an empty string and 'value' are undefined",
		errorExpected: 'Invalid string',
		name: '',
		value: undefined,
	},
];
