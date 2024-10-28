import { ICommonFuncIsValid } from '@app/interfaces/common';
import { IFileServiceFilePathFuncGetFilePath } from './IFileServiceFilePathFuncGetFilePath';

export interface IFileServiceFilePath {
	getFilePath: IFileServiceFilePathFuncGetFilePath;
	isValid: ICommonFuncIsValid;
}
