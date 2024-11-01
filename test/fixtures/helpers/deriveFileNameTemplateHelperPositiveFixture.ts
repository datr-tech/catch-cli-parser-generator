import { DefTypeEnum, TemplateTypeEnum } from '@app/config/enums';
import { IFixtureDeriveFileNameTemplateHelperPositive } from '../../interfaces/fixtures/helpers';

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
			templateFileNameExpected: 'interfaces/interface.parse.hbs',
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE,
		},
		{
			defTypeEnum: DefTypeEnum.DEF_TYPE_LEAF,
			templateFileNameExpected: 'interfaces/interface.parse.hbs',
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE,
		},
		{
			defTypeEnum: DefTypeEnum.DEF_TYPE_STEM,
			templateFileNameExpected: 'interfaces/interface.parse.hbs',
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE,
		},
		{
			defTypeEnum: DefTypeEnum.DEF_TYPE_ITER,
			templateFileNameExpected: 'interfaces/interface.parse.output.iter.hbs',
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE_OUTPUT,
		},
		{
			defTypeEnum: DefTypeEnum.DEF_TYPE_LEAF,
			templateFileNameExpected: 'interfaces/interface.parse.output.leaf.hbs',
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE_OUTPUT,
		},
		{
			defTypeEnum: DefTypeEnum.DEF_TYPE_STEM,
			templateFileNameExpected: 'interfaces/interface.parse.output.stem.hbs',
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE_OUTPUT,
		},
		{
			defTypeEnum: DefTypeEnum.DEF_TYPE_ITER,
			templateFileNameExpected: 'interfaces/interface.parser.hbs',
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSER,
		},
		{
			defTypeEnum: DefTypeEnum.DEF_TYPE_LEAF,
			templateFileNameExpected: 'interfaces/interface.parser.hbs',
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSER,
		},
		{
			defTypeEnum: DefTypeEnum.DEF_TYPE_STEM,
			templateFileNameExpected: 'interfaces/interface.parser.hbs',
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSER,
		},
	];
