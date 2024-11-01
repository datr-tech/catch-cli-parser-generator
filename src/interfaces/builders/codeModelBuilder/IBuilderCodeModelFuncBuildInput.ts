import { IModelDef } from '@app/interfaces/models/DefModel';
import { IFileServiceDir } from '@app/interfaces/services/fileService/DirService';
import { TemplateTypeEnum } from '@app/config/enums';

export interface IBuilderCodeModelFuncBuildInput {
	defModel: IModelDef;
	templateDirService: IFileServiceDir;
	templateTypeEnum: TemplateTypeEnum;
}
