import { IModelFilePath } from './IModelFilePath';
import { IModelFilePathConstructorInput } from './IModelFilePathConstructorInput';

export interface IModelFilePathConstructor {
	(args: IModelFilePathConstructorInput): IModelFilePath;
}
