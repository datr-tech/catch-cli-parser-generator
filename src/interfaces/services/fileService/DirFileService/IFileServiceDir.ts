import { ICommonFuncIsValid } from '@app/interfaces/common';
import { IFileServiceDirFuncGetDirPath } from './IFileServiceDirFuncGetDirPath';

export interface IFileServiceDir {
	getDirPath: IFileServiceDirFuncGetDirPath;
	isValid: ICommonFuncIsValid;
}
