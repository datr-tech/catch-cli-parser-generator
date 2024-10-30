import { TemplateTypeEnum } from '@app/config/enums';
import { ICommonJsonDef } from '@app/interfaces/common';
import { IHelperDeriveFileName } from '@app/interfaces/helpers';

export interface IFixtureFileNameServiceGetFileNameCommon {
	jsonDef: ICommonJsonDef;
	getFileNameHelper: IHelperDeriveFileName;
	templateTypeEnum: TemplateTypeEnum;
}