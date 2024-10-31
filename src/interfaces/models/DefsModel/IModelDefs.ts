import { ICommonFuncIsValid } from '@app/interfaces/common/ICommonFuncIsValid';
import { IModelDefsFuncGetDefModels } from './IModelDefsFuncGetDefModels';

export interface IModelDefs {
	getDefModels: IModelDefsFuncGetDefModels;
	isValid: ICommonFuncIsValid;
}
