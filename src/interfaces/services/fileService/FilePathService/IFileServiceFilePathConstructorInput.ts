import { IFileServiceFileName } from '@app/interfaces/services/fileService/FileNameService';
import { IFileServiceDir } from '@app/interfaces/services/fileService/DirFileService';
import { IFileServiceOutDir } from '@app/interfaces/services/fileService/OutDirService';

export interface IFileServiceFilePathConstructorInput {
	dirModel: IFileServiceDir | IFileServiceOutDir;
	fileNameModel: IFileServiceFileName;
	shouldFileCurrentlyExist: boolean;
}
