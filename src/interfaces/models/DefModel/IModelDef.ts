import { ICommonFuncIsValid } from '@app/interfaces/common/ICommonFuncIsValid';
import { IModelDefFuncGetPayload } from './IModelDefFuncGetPayload';
import { IModelDefFuncGetType } from './IModelDefFuncGetType';
import { IModelDefFuncGetName } from './IModelDefFuncGetName';

export interface IModelDef {
	getName: IModelDefFuncGetName;
	getPayload: IModelDefFuncGetPayload;
	getType: IModelDefFuncGetType;
	isValid: ICommonFuncIsValid;
}
