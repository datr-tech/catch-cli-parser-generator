import { IFileServiceDir } from 'src/interfaces/services/fileService/DirFileService';
import { IModelFileNameHOF } from 'src/interfaces/services/fileService/FileNameServiceHOC';

export interface IModelFilePathHOCConstructorInput {
	dirModel: IFileServiceDir;
	fileNameModel: IModelFileNameHOF;
}
