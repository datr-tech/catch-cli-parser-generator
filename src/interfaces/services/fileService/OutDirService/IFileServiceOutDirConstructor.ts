import { IFileServiceOutDir } from './IFileServiceOutDir';
import { IFileServiceOutDirConstructorInput } from './IFileServiceOutDirConstructorInput';

export interface IFileServiceOutDirConstructor {
	(args: IFileServiceOutDirConstructorInput): IFileServiceOutDir;
}
