import { TemplateTypeEnum } from '@app/config/enums';
import { jsonDefFake } from '@test/doubles/fakes';
import { IFixtureDeriveFileNameTemplateHelperNegative } from '../../interfaces/fixtures/helpers';

export const deriveFileNameTemplateHelperNegativeFixture: IFixtureDeriveFileNameTemplateHelperNegative[] =
	[
		{
			defTypeEnum: undefined,
			errorExpected: "Invalid 'defModel'",
			jsonDef: jsonDefFake({ type: undefined, useDefaultType: false }),
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER,
		},
		{
			defTypeEnum: undefined,
			errorExpected: "Invalid 'defModel'",
			jsonDef: jsonDefFake({ type: undefined, useDefaultType: false }),
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE,
		},
		{
			defTypeEnum: undefined,
			errorExpected: "Invalid 'defModel'",
			jsonDef: jsonDefFake({ type: undefined, useDefaultType: false }),
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE_OUTPUT,
		},
		{
			defTypeEnum: undefined,
			errorExpected: "Invalid 'defModel'",
			jsonDef: jsonDefFake({ type: undefined, useDefaultType: false }),
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSER,
		},
	];
