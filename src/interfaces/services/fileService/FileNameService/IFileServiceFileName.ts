import { ICommonFuncIsValid } from '@app/interfaces/common';
import { IFileServiceFileNameFuncGetFileName } from './IFileServiceFileNameFuncGetFileName';

export interface IFileServiceFileName {
	getFileName: IFileServiceFileNameFuncGetFileName;
	isValid: ICommonFuncIsValid;
}
