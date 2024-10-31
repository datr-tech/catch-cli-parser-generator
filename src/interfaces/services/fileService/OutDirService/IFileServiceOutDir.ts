import { IFileServiceDir } from 'src/interfaces/services/fileService/DirService';
import { IFileServiceOutDirFuncGetOutDirType } from './IFileServiceOutDirFuncGetOutDirType';

export interface IFileServiceOutDir extends IFileServiceDir {
	getOutDirType: IFileServiceOutDirFuncGetOutDirType;
}
