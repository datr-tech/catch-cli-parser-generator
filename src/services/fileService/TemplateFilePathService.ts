import { FilePathService } from './FilePathService';
import { IModelFilePath  } from 'src/interfaces/services/fileService/FilePathService';
import {
	IModelFilePathHOCConstructor,
	IModelFilePathHOCConstructorInput
} from 'src/interfaces/services/fileService/FilePathServicelHOC';

/**
 * Construct a FilePathService for a template.
 *
 * @param {IModelFilePathHOCConstructorInput} args
 * @param {IModelDir} args.dirModel
 * @param {IModelFileName} args.fileNameModel
 * @returns {IModelFilePath}
 * @constructor
 */
export const TemplateFilePathService: IModelFilePathHOCConstructor = ({
	dirModel,
	fileNameModel
}: IModelFilePathHOCConstructorInput): IModelFilePath =>
	FilePathService({
		dirModel,
		fileNameModel,
		shouldFileCurrentlyExist: true,
	});
