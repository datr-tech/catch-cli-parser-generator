import { IModelDef } from '@app/interfaces/models/DefModel';
import { IFileServiceDir } from 'src/interfaces/services/fileService/DirService';
import { TemplateTypeEnum } from '@app/config/enums';

export interface IBuilderTemplateModelFuncBuildInput {
	defModel: IModelDef;
	templateDirService: IFileServiceDir;
	templateTypeEnum: TemplateTypeEnum;
}
