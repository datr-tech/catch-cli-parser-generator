import { IControllerGenerateFuncInit } from './IControllerGenerateFuncInit';
import { IControllerGenerateFuncIsValid } from './IControllerGenerateFuncIsValid';
import { IControllerGenerateFuncRun } from './IControllerGenerateFuncRun';

export interface IControllerGenerate {
	init: IControllerGenerateFuncInit;
	isValid: IControllerGenerateFuncIsValid;
	run: IControllerGenerateFuncRun;
}
