import { IFileServiceFileName } from '@app/interfaces/services/fileService/FileNameService';
import { IFileServiceDir } from 'src/interfaces/services/fileService/DirService';
import { IFileServiceOutDir } from '@app/interfaces/services/fileService/OutDirService';

export interface IFileServiceFilePathConstructorInput {
	dirService: IFileServiceDir | IFileServiceOutDir;
	fileNameService: IFileServiceFileName;
	shouldFileCurrentlyExist: boolean;
}
