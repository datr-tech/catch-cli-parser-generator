import { IModelDefFuncGetNameOutput } from './IModelDefFuncGetNameOutput';
import { IModelDefFuncGetPayloadOutput } from './IModelDefFuncGetPayloadOutput';
import { IModelDefFuncGetTypeOutput } from './IModelDefFuncGetTypeOutput';

export type IModelDefFuncGetPropOutput =
	| IModelDefFuncGetNameOutput
	| IModelDefFuncGetPayloadOutput
	| IModelDefFuncGetTypeOutput;
