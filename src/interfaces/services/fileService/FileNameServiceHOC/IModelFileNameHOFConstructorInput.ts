import { TemplateTypeEnum } from '@app/config/enums';
import { IModelDef } from '@app/interfaces/models/DefModel';

export interface IModelFileNameHOFConstructorInput {
	defModel: IModelDef;
	templateTypeEnum: TemplateTypeEnum;
}
