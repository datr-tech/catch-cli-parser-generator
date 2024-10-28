import { IModelDef } from '@app/interfaces/models/DefModel';
import { IFileServiceDir } from '@app/interfaces/services/fileService/DirFileService';
import { TemplateTypeEnum } from '@app/config/enums';

export interface IBuilderTemplateModelFuncBuildInput {
	defModel: IModelDef;
	templateDirService: IFileServiceDir;
	templateTypeEnum: TemplateTypeEnum;
}
