import { IFileServiceFilePath } from './IFileServiceFilePath';
import { IFileServiceFilePathConstructorInput } from './IFileServiceFilePathConstructorInput';

export interface IFileServiceFilePathConstructor {
	(args: IFileServiceFilePathConstructorInput): IFileServiceFilePath;
}
