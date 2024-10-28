import { ICommonFuncIsValid } from '@app/interfaces/common';
import { IModelFileNameFuncGetFileName } from './IModelFileNameFuncGetFileName';

export interface IModelFileName {
	getFileName: IModelFileNameFuncGetFileName;
	isValid: ICommonFuncIsValid;
}
