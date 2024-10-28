import { ICommonFuncIsValid } from '@app/interfaces/common';
import { IModelTemplateFuncGetCodeModel } from './IModelTemplateFuncGetCodeModel';

export interface IModelTemplate {
	getCodeModel: IModelTemplateFuncGetCodeModel;
	isValid: ICommonFuncIsValid;
}
