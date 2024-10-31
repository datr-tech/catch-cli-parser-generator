import { IFileServiceDir } from 'src/interfaces/services/fileService/DirService';
import { IBuilderTemplateDirServiceFuncBuildInput } from './IBuilderTemplateDirServiceFuncBuildInput';

export interface IBuilderTemplateDirServiceFuncBuild {
	(args?: IBuilderTemplateDirServiceFuncBuildInput): IFileServiceDir;
}
