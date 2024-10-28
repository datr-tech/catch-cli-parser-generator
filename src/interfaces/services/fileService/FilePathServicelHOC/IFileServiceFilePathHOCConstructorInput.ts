import { IFileServiceDir } from '@app/interfaces/services/fileService/DirFileService';
import { IFileServiceFileNameHOF } from '@app/interfaces/services/fileService/FileNameServiceHOC';

export interface IFileServiceFilePathHOCConstructorInput {
	dirModel: IFileServiceDir;
	fileNameModel: IFileServiceFileNameHOF;
}
