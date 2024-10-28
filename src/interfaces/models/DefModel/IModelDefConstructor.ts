import { IModelDef } from './IModelDef';
import { IModelDefConstructorInput } from './IModelDefConstructorInput';

export interface IModelDefConstructor {
	(args: IModelDefConstructorInput): IModelDef;
}
