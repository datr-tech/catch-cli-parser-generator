import { OutDirTypeEnum, TemplateTypeEnum } from '@app/config/enums';
import { IFixtureTemplateTypeHelperPositive } from '@test/fixtures/interfaces/helpers';

export const templateTypeHelperPositiveFixture: IFixtureTemplateTypeHelperPositive[] = [
	{
		outDirTypeEnumExpected: OutDirTypeEnum.OUT_DIR_PARSERS,
		templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER,
	},
	{
		outDirTypeEnumExpected: OutDirTypeEnum.OUT_DIR_INTERFACES,
		templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE,
	},
	{
		outDirTypeEnumExpected: OutDirTypeEnum.OUT_DIR_INTERFACES,
		templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE_OUTPUT,
	},
	{
		outDirTypeEnumExpected: OutDirTypeEnum.OUT_DIR_INTERFACES,
		templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSER,
	},
];
