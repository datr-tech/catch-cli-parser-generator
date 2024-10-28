import { IFileServiceFileName } from './IFileServiceFileName';
import { IFileServiceFileNameConstructorInput } from './IFileServiceFileNameConstructorInput';

export interface IFileServiceFileNameConstructor {
	(args: IFileServiceFileNameConstructorInput): IFileServiceFileName;
}
