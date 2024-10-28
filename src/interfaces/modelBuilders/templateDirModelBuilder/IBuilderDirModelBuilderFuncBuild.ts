import { IFileServiceDir } from 'src/interfaces/services/fileService/DirFileService';
import { IBuilderDirModelBuilderFuncBuildInput } from './IBuilderDirModelBuilderFuncBuildInput';

export interface IBuilderDirModelBuilderFuncBuild {
	(args: IBuilderDirModelBuilderFuncBuildInput): IFileServiceDir;
}
