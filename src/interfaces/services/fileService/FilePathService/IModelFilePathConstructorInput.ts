import { IModelFileName } from 'src/interfaces/services/fileService/FileNameService';
import { IFileServiceDir } from 'src/interfaces/services/fileService/DirFileService';
import { IModelOutDir } from 'src/interfaces/services/fileService/OutDirService';

export interface IModelFilePathConstructorInput {
	dirModel: IFileServiceDir | IModelOutDir;
	fileNameModel: IModelFileName;
	shouldFileCurrentlyExist: boolean;
}
