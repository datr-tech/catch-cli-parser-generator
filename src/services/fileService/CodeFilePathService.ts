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
 * @param {IFileServiceDir} args.dirModel
 * @param {IFileServiceFileName} args.fileNameModel
 * @returns {IFileServiceFilePathHOC}
 * @constructor
 */
export const CodeFilePathService: IFileServiceFilePathHOCConstructor = ({
	dirModel,
	fileNameModel,
}: IFileServiceFilePathHOCConstructorInput): IFileServiceFilePathHOC =>
	FilePathService({
		dirModel,
		fileNameModel,
		shouldFileCurrentlyExist: false,
	});
