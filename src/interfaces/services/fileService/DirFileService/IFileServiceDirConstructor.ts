import { IFileServiceDir } from './IFileServiceDir';
import { IFileServiceDirConstructorInput } from './IFileServiceDirConstructorInput';

export interface IFileServiceDirConstructor {
	(args: IFileServiceDirConstructorInput): IFileServiceDir;
}
