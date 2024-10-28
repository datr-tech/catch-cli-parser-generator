import { IModelCode } from '@app/interfaces/models/CodeModel';
import { IFileServiceFilePath } from '@app/interfaces/services/fileService/FilePathService';

export interface IBuilderCodeModelFuncBuildOutput {
	codeFilePathService: IFileServiceFilePath;
	codeModel: IModelCode;
}
