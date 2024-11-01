import { IModelDef } from '@app/interfaces/models/DefModel';
import { TemplateTypeEnum } from '@app/config/enums';

export interface IControllerGenerateFuncWriteCodeToFileInput {
	defModel: IModelDef;
	templateTypeEnum: TemplateTypeEnum;
}
