import { ICommonFuncIsValid } from '@app/interfaces/common';
import { IModelFilePathFuncGetFilePath } from './IModelFilePathFuncGetFilePath';

export interface IModelFilePath {
	getFilePath: IModelFilePathFuncGetFilePath;
	isValid: ICommonFuncIsValid;
}
