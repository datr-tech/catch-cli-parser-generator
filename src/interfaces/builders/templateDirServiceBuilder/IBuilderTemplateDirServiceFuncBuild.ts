import { IFileServiceDir } from '@app/interfaces/services/fileService/DirFileService';
import { IBuilderTemplateDirServiceFuncBuildInput } from './IBuilderTemplateDirServiceFuncBuildInput';

export interface IBuilderTemplateDirServiceFuncBuild {
	(args?: IBuilderTemplateDirServiceFuncBuildInput): IFileServiceDir;
}
