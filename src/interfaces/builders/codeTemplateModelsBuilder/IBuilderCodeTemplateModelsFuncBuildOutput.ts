import { IFileServiceFilePath } from '@app/interfaces/services/fileService/FilePathService';
import { IModelCode } from '@app/interfaces/models/CodeModel';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IFileServiceDir } from '@app/interfaces/services/fileService/DirService';
import { IModelTemplate } from '@app/interfaces/models/TemplateModel';

export interface IBuilderCodeTemplateModelsFuncBuildOutput {
	codeFilePathService: IFileServiceFilePath;
	codeModel: IModelCode;
	defModel: IModelDef;
	templateDirService: IFileServiceDir;
	templateModel: IModelTemplate;
}
