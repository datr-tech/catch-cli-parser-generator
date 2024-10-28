import { IFileServiceDir } from '@app/interfaces/services/fileService/DirFileService';
import { IFileServiceOutDirFuncGetOutDirType } from './IFileServiceOutDirFuncGetOutDirType';

export interface IFileServiceOutDir extends IFileServiceDir {
	getOutDirType: IFileServiceOutDirFuncGetOutDirType;
}
