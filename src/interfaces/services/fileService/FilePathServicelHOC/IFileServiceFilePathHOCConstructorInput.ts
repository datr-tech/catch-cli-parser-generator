import { IFileServiceDir } from 'src/interfaces/services/fileService/DirService';
import { IFileServiceFileNameHOF } from '@app/interfaces/services/fileService/FileNameServiceHOC';

export interface IFileServiceFilePathHOCConstructorInput {
	dirService: IFileServiceDir;
	fileNameService: IFileServiceFileNameHOF;
}
