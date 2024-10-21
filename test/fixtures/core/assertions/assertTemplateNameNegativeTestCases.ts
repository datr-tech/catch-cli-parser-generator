export const assertTemplateNameNegativeTestCases = [
	{
		description: "when 'templateName' is an empty string",
		errorExpected: "Invalid 'templateName'",
		templateName: '',
	},
	{
		description: "when 'templateName' is undefined",
		errorExpected: "Invalid 'templateName'",
		templateName: undefined,
	},
];
