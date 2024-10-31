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
 * @param {IFileServiceDir} args.dirService
 * @param {IFileServiceFileName} args.fileNameService
 * @returns {IFileServiceFilePath}
 * @constructor
 */
export const TemplateFilePathService: IFileServiceFilePathHOCConstructor = ({
	dirService,
	fileNameService,
}: IFileServiceFilePathHOCConstructorInput): IFileServiceFilePath =>
	FilePathService({
		dirService,
		fileNameService,
		shouldFileCurrentlyExist: true,
	});
