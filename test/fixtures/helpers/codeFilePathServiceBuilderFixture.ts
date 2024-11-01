import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { DefTypeEnum, OutDirTypeEnum, TemplateTypeEnum } from '@app/config/enums';
import { DefModel, OutDirsModel } from '@app/models';
import { ICommonJson, ICommonJsonDef } from '@app/interfaces/common';
import { jsonDefFake } from '@test/doubles/fakes';

const jsonDefValid: ICommonJsonDef = jsonDefFake({
	name: 'TEST_JSON_DEF_VALID',
	type: DefTypeEnum.DEF_TYPE_STEM,
});

const jsonDefInvalid: ICommonJsonDef = jsonDefFake({
	name: undefined,
	type: DefTypeEnum.DEF_TYPE_STEM,
	useDefaultName: false,
});

const jsonValid: ICommonJson = {
	defs: [jsonDefInvalid],
	dirs: [
		{
			type: OutDirTypeEnum.OUT_DIR_PARSERS,
			path: CONSTS_PATHS_APP_ROOT,
		},
	],
};

const jsonInvalid: ICommonJson = {
	defs: [jsonDefValid],
	dirs: [],
};

export const codeFilePathServiceBuilderFixture = {
	defModelInvalid: DefModel({ jsonDef: jsonDefInvalid }),
	defModelValid: DefModel({ jsonDef: jsonDefValid }),
	outDirsModelInvalid: OutDirsModel({ json: jsonInvalid }),
	outDirsModelValid: OutDirsModel({ json: jsonValid }),
	templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER,
};
