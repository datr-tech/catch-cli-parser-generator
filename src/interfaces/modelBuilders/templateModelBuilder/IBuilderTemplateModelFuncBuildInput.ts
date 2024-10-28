import { IModelDef } from '@app/interfaces/models/DefModel';
import { IFileServiceDir } from 'src/interfaces/services/fileService/DirFileService';
import { TemplateTypeEnum } from '@app/config/enums';

export interface IBuilderTemplateModelFuncBuildInput {
	defModel: IModelDef;
	templateDirModel: IFileServiceDir;
	templateTypeEnum: TemplateTypeEnum;
}
