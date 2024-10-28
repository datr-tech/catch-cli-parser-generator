import { IModelFileName } from 'src/interfaces/services/fileService/FileNameService';
import { IModelFileNameHOFConstructorInput } from './IModelFileNameHOFConstructorInput';

export interface IModelFileNameHOFConstructor {
	(args: IModelFileNameHOFConstructorInput): IModelFileName;
}
