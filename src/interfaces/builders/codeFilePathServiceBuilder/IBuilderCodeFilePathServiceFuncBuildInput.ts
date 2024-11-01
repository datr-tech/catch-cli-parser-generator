import { TemplateTypeEnum } from '@app/config/enums';
import { IHelperTemplateType } from '@app/interfaces/helpers';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IModelOutDirs } from '@app/interfaces/models/OutDirsModel';

export interface IBuilderCodeFilePathServiceFuncBuildInput {
	defModel: IModelDef;
	outDirsModel: IModelOutDirs;
	templateTypeEnum: TemplateTypeEnum;
	templateHelper?: IHelperTemplateType;
}
