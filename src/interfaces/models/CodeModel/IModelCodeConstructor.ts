import { IModelCode } from './IModelCode';
import { IModelCodeConstructorInput } from './IModelCodeConstructorInput';

export interface IModelCodeConstructor {
	(args: IModelCodeConstructorInput): IModelCode;
}
