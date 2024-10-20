export const assertTemplateNameNegativeTestCases = [
	{
		description: "when 'templateNames' is an empty string",
		errorExpected: "Invalid 'templateNames'",
		templateName: '',
	},
	{
		description: "when 'templateNames' is undefined",
		errorExpected: "Invalid 'templateNames'",
		templateName: undefined,
	},
];
