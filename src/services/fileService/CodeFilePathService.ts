import { FilePathService } from './FilePathService';
import {
	IModelFilePathHOC,
	IModelFilePathHOCConstructor,
	IModelFilePathHOCConstructorInput
} from 'src/interfaces/services/fileService/FilePathServicelHOC';

/**
 * @public
 *
 * Construct a FilePathService to represent a code path.
 *
 * @param {IModelFilePathHOCConstructorInput} args
 * @param {IModelDir} args.dirModel
 * @param {IModelFileName} args.fileNameModel
 * @returns {IModelFilePathHOC}
 * @constructor
 */
export const CodeFilePathService: IModelFilePathHOCConstructor = ({
	dirModel,
	fileNameModel
}: IModelFilePathHOCConstructorInput): IModelFilePathHOC =>
	FilePathService({
		dirModel,
		fileNameModel,
		shouldFileCurrentlyExist: false,
	});
