import { TemplateTypeEnum } from '@app/config/enums';
import { IHelperGetFileName } from '@app/interfaces/helpers';
import { IModelDef } from '@app/interfaces/models/DefModel';

export interface IModelFileNameConstructorInput {
	defModel: IModelDef;
	getFileNameHelper: IHelperGetFileName;
	templateTypeEnum: TemplateTypeEnum;
}
