import { writeFileSync } from 'node:fs';
import { IFileServiceFilePath } from '@app/interfaces/services/fileService/FilePathService';

export interface IModelCodeFuncWriteCodeToFileInput {
	codeFilePathService: IFileServiceFilePath;
	writeFile?: typeof writeFileSync;
}
