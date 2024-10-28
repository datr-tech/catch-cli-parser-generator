import { TemplateTypeEnum } from '@app/config/enums';

export const deriveFileNameCodeHelperPositiveFixture = [
	{
		codeFileNameExpected: 'Test1Parser.ts',
		jsonDefName: 'Test1',
		templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER,
	},
	{
		codeFileNameExpected: 'IParseTest2.ts',
		jsonDefName: 'Test2',
		templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE,
	},
	{
		codeFileNameExpected: 'IParseTest3Output.ts',
		jsonDefName: 'Test3',
		templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE_OUTPUT,
	},
	{
		codeFileNameExpected: 'IParserTest4.ts',
		jsonDefName: 'Test4',
		templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSER,
	},
];
