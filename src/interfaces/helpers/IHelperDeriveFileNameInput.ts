import { IModelDef } from '@app/interfaces/models/DefModel';
import { TemplateTypeEnum } from '@app/config/enums';

export interface IHelperDeriveFileNameInput {
	defModel: IModelDef;
	templateTypeEnum: TemplateTypeEnum;
}
