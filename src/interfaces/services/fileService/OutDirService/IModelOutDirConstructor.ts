import { IModelOutDir } from './IModelOutDir';
import { IModelOutDirConstructorInput } from './IModelOutDirConstructorInput';

export interface IModelOutDirConstructor {
	(args: IModelOutDirConstructorInput): IModelOutDir;
}
