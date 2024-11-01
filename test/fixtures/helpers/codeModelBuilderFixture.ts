import { templateDirServiceBuilder } from '@app/builders';
import { DefTypeEnum, TemplateTypeEnum } from '@app/config/enums';
import { DefModel } from '@app/models';
import { ICommonJsonDef } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IFileServiceDir } from '@app/interfaces/services/fileService/DirService';
import { jsonDefFake } from '@test/doubles/fakes';

const jsonDefInvalid: ICommonJsonDef = jsonDefFake({
	name: undefined,
	useDefaultName: false,
});
const jsonDefValid: ICommonJsonDef = jsonDefFake({
	name: 'TEST_JSON_DEF',
	type: DefTypeEnum.DEF_TYPE_LEAF,
});

const defModelInvalid: IModelDef = DefModel({ jsonDef: jsonDefInvalid });
const defModelValid: IModelDef = DefModel({ jsonDef: jsonDefValid });
const templateDirServiceInvalid: IFileServiceDir = templateDirServiceBuilder.build({
	dirPathStr: 'UNKNOWN_DIR',
});
const templateDirServiceValid: IFileServiceDir = templateDirServiceBuilder.build();
const templateTypeEnum: TemplateTypeEnum = TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER;

export const codeModelBuilderFixture = {
	defModelInvalid,
	defModelValid,
	templateDirServiceInvalid,
	templateDirServiceValid,
	templateTypeEnum,
};
