import { ICommonFuncIsValid } from '@app/interfaces/common';
import { IControllerGenerateFuncInit } from './IControllerGenerateFuncInit';
import { IControllerGenerateFuncRun } from './IControllerGenerateFuncRun';
import { IControllerGenerateFuncWriteCodeToFile } from './IControllerGenerateFuncWriteCodeToFile';

export interface IControllerGenerate {
	init: IControllerGenerateFuncInit;
	isValid: ICommonFuncIsValid;
	run: IControllerGenerateFuncRun;
	writeCodeToFile: IControllerGenerateFuncWriteCodeToFile;
}
