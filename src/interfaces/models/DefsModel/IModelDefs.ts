import { ICommonFuncIsValid } from '@app/interfaces/common/ICommonFuncIsValid';
import { IModelDefsFuncGetDefs } from './IModelDefsFuncGetDefs';

export interface IModelDefs {
	getDefs: IModelDefsFuncGetDefs;
	isValid: ICommonFuncIsValid;
}
