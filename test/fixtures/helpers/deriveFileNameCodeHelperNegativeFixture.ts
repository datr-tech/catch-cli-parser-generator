import { TemplateTypeEnum } from '@app/config/enums';
import { jsonDefFake } from '@test/doubles/fakes';
import { IFixtureDeriveFileNameCodeHelperNegative } from '@test/fixtures/interfaces/helpers';

export const deriveFileNameCodeHelperNegativeFixture: IFixtureDeriveFileNameCodeHelperNegative[] = [
	{
		errorExpected: "Invalid 'defModel'",
		jsonDef: jsonDefFake({ name: undefined, useDefaultName: false }),
		templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER,
	},
	{
		errorExpected: "Invalid 'defModel'",
		jsonDef: jsonDefFake({ payload: undefined, useDefaultPayload: false }),
		templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER,
	},
];
