import { FilePathService } from './FilePathService';
import { IFileServiceFilePath } from '@app/interfaces/services/fileService/FilePathService';
import {
	IFileServiceFilePathHOCConstructor,
	IFileServiceFilePathHOCConstructorInput,
} from '@app/interfaces/services/fileService/FilePathServicelHOC';

/**
 * Construct a FilePathService for a template.
 *
 * @param {IFileServiceFilePathHOCConstructorInput} args
 * @param {IFileServiceDir} args.dirModel
 * @param {IFileServiceFileName} args.fileNameModel
 * @returns {IFileServiceFilePath}
 * @constructor
 */
export const TemplateFilePathService: IFileServiceFilePathHOCConstructor = ({
	dirModel,
	fileNameModel,
}: IFileServiceFilePathHOCConstructorInput): IFileServiceFilePath =>
	FilePathService({
		dirModel,
		fileNameModel,
		shouldFileCurrentlyExist: true,
	});
