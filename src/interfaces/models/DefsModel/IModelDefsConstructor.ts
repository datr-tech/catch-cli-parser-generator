import { IModelDefs } from './IModelDefs';
import { IModelDefsConstructorInput } from './IModelDefsConstructorInput';

export interface IModelDefsConstructor {
	(args: IModelDefsConstructorInput): IModelDefs;
}
