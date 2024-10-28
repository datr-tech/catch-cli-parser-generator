import { ICommonFuncIsValid } from '@app/interfaces/common';
import { IControllerGenerateFuncInit } from './IControllerGenerateFuncInit';
import { IControllerGenerateFuncRun } from './IControllerGenerateFuncRun';

export interface IControllerGenerate {
	init: IControllerGenerateFuncInit;
	isValid: ICommonFuncIsValid;
	run: IControllerGenerateFuncRun;
}
