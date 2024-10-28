import { TemplateTypeEnum } from '@app/config/enums';
import { IModelDef } from '@app/interfaces/models/DefModel';

export interface IFileServiceFileNameHOFConstructorInput {
	defModel: IModelDef;
	templateTypeEnum: TemplateTypeEnum;
}
