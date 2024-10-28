import { IFileServiceDir } from 'src/interfaces/services/fileService/DirFileService';
import { IModelOutDirFuncGetOutDirType } from './IModelOutDirFuncGetOutDirType';

export interface IModelOutDir extends IFileServiceDir {
	getOutDirType: IModelOutDirFuncGetOutDirType;
}
