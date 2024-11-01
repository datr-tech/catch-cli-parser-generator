import { TemplateTypeEnum } from '@app/config/enums';
import { ICommonJsonDef } from '@app/interfaces/common';

export interface IFixtureDeriveFileNameCodeHelperCommon {
	jsonDef: ICommonJsonDef;
	templateTypeEnum: TemplateTypeEnum;
}
