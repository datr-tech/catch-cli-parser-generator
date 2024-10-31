import {
	IFileServiceFilePathHOC,
	IFileServiceFilePathHOCConstructor,
	IFileServiceFilePathHOCConstructorInput,
} from '@app/interfaces/services/fileService/FilePathServicelHOC';
import { FilePathService } from './FilePathService';

/**
 * @public
 *
 * Construct a FilePathService to represent a code path.
 *
 * @param {IFileServiceFilePathHOCConstructorInput} args
 * @param {IFileServiceDir} args.dirService
 * @param {IFileServiceFileName} args.fileNameService
 * @returns {IFileServiceFilePathHOC}
 * @constructor
 */
export const CodeFilePathService: IFileServiceFilePathHOCConstructor = ({
	dirService,
	fileNameService,
}: IFileServiceFilePathHOCConstructorInput): IFileServiceFilePathHOC =>
	FilePathService({
		dirService,
		fileNameService,
		shouldFileCurrentlyExist: false,
	});
