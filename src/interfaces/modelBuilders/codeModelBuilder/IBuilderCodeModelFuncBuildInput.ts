import { TemplateTypeEnum } from '@app/config/enums';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IModelOutDirs } from '@app/interfaces/models/OutDirsModel';
import { IModelTemplate } from '@app/interfaces/models/TemplateModel';

export interface IBuilderCodeModelFuncBuildInput {
	defModel: IModelDef;
	outDirsModel: IModelOutDirs;
	templateModel: IModelTemplate;
	templateTypeEnum: TemplateTypeEnum;
}
