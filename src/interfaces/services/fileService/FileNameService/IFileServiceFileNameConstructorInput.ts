import { TemplateTypeEnum } from '@app/config/enums';
import { IHelperDeriveFileName } from '@app/interfaces/helpers';
import { IModelDef } from '@app/interfaces/models/DefModel';

export interface IFileServiceFileNameConstructorInput {
	defModel: IModelDef;
	getFileNameHelper: IHelperDeriveFileName;
	templateTypeEnum: TemplateTypeEnum;
}
