export const assertStringNameNegativeTestCases = [
	{
		description: "when 'name' is an empty string",
		errorExpected: "Invalid 'name'",
		name: '',
	},
	{
		description: "when 'name' is undefined",
		errorExpected: "Invalid 'name'",
		name: undefined,
	},
];
