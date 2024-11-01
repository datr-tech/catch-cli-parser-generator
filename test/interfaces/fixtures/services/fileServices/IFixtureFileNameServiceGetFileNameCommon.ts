import { TemplateTypeEnum } from '../../../../../src/config/enums';
import { ICommonJsonDef } from '../../../../../src/interfaces/common';
import { IHelperDeriveFileName } from '../../../../../src/interfaces/helpers';

export interface IFixtureFileNameServiceGetFileNameCommon {
	jsonDef: ICommonJsonDef;
	getFileNameHelper: IHelperDeriveFileName;
	templateTypeEnum: TemplateTypeEnum;
}
