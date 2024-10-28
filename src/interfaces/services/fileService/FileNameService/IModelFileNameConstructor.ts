import { IModelFileName } from './IModelFileName';
import { IModelFileNameConstructorInput } from './IModelFileNameConstructorInput';

export interface IModelFileNameConstructor {
	(args: IModelFileNameConstructorInput): IModelFileName;
}
