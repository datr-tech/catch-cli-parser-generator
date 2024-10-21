export const transformStrToUcfirstPositiveTestCases = [
	{
		description: "should perform the expected ucfirst transformation on 'value'",
		name: 'str',
		value: 'abc',
		valueExpected: 'Abc',
	},
	{
		description: "when 'value' is in a ucfirst format, already, it should not be altered",
		name: 'str',
		value: 'Abc',
		valueExpected: 'Abc',
	},
	{
		description: "when 'value' contains all uppercase letters, they should not be altered",
		name: 'str',
		value: 'ABC',
		valueExpected: 'ABC',
	},
	{
		description: "when the first letter in 'value' is a symbol, it should not be altered",
		name: 'str',
		value: '$abc',
		valueExpected: '$abc',
	},
	{
		description:
			"when the first letter in 'parser' is a single backslash, the transformation should be performed",
		name: 'str',
		value: 'abc',
		valueExpected: 'Abc',
	},
	{
		description:
			"when 'value' var contains leading whitespace, the transformation should be performed on the remaining non-empty chars",
		name: 'str',
		value: '   abc',
		valueExpected: 'Abc',
	},
];
