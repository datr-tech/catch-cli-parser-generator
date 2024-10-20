import { IFileServiceDoesFileExistInput } from './IFileServiceDoesFileExistInput';
import { IFileServiceDoesFileExistOutput } from './IFileServiceDoesFileExistOutput';

export interface IFileServiceDoesFileExist {
	(args: IFileServiceDoesFileExistInput): IFileServiceDoesFileExistOutput;
}
