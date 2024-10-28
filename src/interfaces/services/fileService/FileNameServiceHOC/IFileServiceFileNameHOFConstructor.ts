import { IFileServiceFileName } from '@app/interfaces/services/fileService/FileNameService';
import { IFileServiceFileNameHOFConstructorInput } from './IFileServiceFileNameHOFConstructorInput';

export interface IFileServiceFileNameHOFConstructor {
	(args: IFileServiceFileNameHOFConstructorInput): IFileServiceFileName;
}
