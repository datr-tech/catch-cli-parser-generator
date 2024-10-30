import { DefTypeEnum, TemplateTypeEnum } from '@app/config/enums';
import { IFixtureDeriveFileNameTemplateHelperPositive } from '@test/fixtures/interfaces/helpers';

export const deriveFileNameTemplateHelperPositiveFixture: IFixtureDeriveFileNameTemplateHelperPositive[] =
	[
		{
			defTypeEnum: DefTypeEnum.DEF_TYPE_ITER,
			templateFileNameExpected: 'parsers/parser.iter.hbs',
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER,
		},
		{
			defTypeEnum: DefTypeEnum.DEF_TYPE_LEAF,
			templateFileNameExpected: 'parsers/parser.leaf.hbs',
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER,
		},
		{
			defTypeEnum: DefTypeEnum.DEF_TYPE_STEM,
			templateFileNameExpected: 'parsers/parser.stem.hbs',
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER,
		},
		{
			defTypeEnum: DefTypeEnum.DEF_TYPE_ITER,
			templateFileNameExpected: 'interface.parse.hbs',
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE,
		},
		{
			defTypeEnum: DefTypeEnum.DEF_TYPE_LEAF,
			templateFileNameExpected: 'interface.parse.hbs',
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE,
		},
		{
			defTypeEnum: DefTypeEnum.DEF_TYPE_STEM,
			templateFileNameExpected: 'interface.parse.hbs',
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE,
		},
		{
			defTypeEnum: DefTypeEnum.DEF_TYPE_ITER,
			templateFileNameExpected: 'interface.parse.output.hbs',
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE_OUTPUT,
		},
		{
			defTypeEnum: DefTypeEnum.DEF_TYPE_LEAF,
			templateFileNameExpected: 'interface.parse.output.hbs',
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE_OUTPUT,
		},
		{
			defTypeEnum: DefTypeEnum.DEF_TYPE_STEM,
			templateFileNameExpected: 'interface.parse.output.hbs',
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE_OUTPUT,
		},
		{
			defTypeEnum: DefTypeEnum.DEF_TYPE_ITER,
			templateFileNameExpected: 'interface.parser.hbs',
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSER,
		},
		{
			defTypeEnum: DefTypeEnum.DEF_TYPE_LEAF,
			templateFileNameExpected: 'interface.parser.hbs',
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSER,
		},
		{
			defTypeEnum: DefTypeEnum.DEF_TYPE_STEM,
			templateFileNameExpected: 'interface.parser.hbs',
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSER,
		},
	];
