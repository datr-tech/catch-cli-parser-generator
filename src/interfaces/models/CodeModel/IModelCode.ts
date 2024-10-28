import { ICommonFuncIsValid } from '@app/interfaces/common/ICommonFuncIsValid';
import { IModelCodeFuncWriteCodeToFile } from './IModelCodeFuncWriteCodeToFile';

export type IModelCode = {
	isValid: ICommonFuncIsValid;
	writeCodeToFile: IModelCodeFuncWriteCodeToFile;
};
