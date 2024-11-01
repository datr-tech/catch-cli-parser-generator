import { TemplateTypeEnum } from '@app/config/enums';
import { jsonDefFake } from '@test/doubles/fakes';
import { IFixtureDeriveFileNameCodeHelperPositive } from '../../interfaces/fixtures/helpers';

export const deriveFileNameCodeHelperPositiveFixture: IFixtureDeriveFileNameCodeHelperPositive[] = [
	{
		codeFileNameExpected: 'Test1Parser.ts',
		jsonDef: jsonDefFake({ name: 'Test1' }),
		templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER,
	},
	{
		codeFileNameExpected: 'IParseTest2.ts',
		jsonDef: jsonDefFake({ name: 'Test2' }),
		templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE,
	},
	{
		codeFileNameExpected: 'IParseTest3Output.ts',
		jsonDef: jsonDefFake({ name: 'Test3' }),
		templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE_OUTPUT,
	},
	{
		codeFileNameExpected: 'IParserTest4.ts',
		jsonDef: jsonDefFake({ name: 'Test4' }),
		templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSER,
	},
];
