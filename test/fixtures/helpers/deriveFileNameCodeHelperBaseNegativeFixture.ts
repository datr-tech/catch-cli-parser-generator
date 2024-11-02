import { TemplateTypeEnum } from '@app/config/enums';
import { jsonDefFake } from '@test/doubles/fakes';
import { IFixtureDeriveFileNameCodeHelperNegative } from '@test/interfaces/fixtures/helpers';

export const deriveFileNameCodeHelperBaseNegativeFixture: IFixtureDeriveFileNameCodeHelperNegative[] = [
	{
		errorExpected: "Negative 'condition'",
		jsonDef: jsonDefFake({ name: undefined, useDefaultName: false }),
		templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER,
	},
	{
		errorExpected: "Negative 'condition'",
		jsonDef: jsonDefFake({ payload: undefined, useDefaultPayload: false }),
		templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER,
	},
];
