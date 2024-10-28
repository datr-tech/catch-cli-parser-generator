import { deriveFileNameCodeHelper } from '@app/helpers';
import {
	IFileServiceFileNameHOF,
	IFileServiceFileNameHOFConstructor,
	IFileServiceFileNameHOFConstructorInput,
} from '@app/interfaces/services/fileService/FileNameServiceHOC';
import { FileNameService } from './FileNameService';

/**
 * @public
 *
 * Construct a FileNameService to represent the name of a code file.
 *
 * @param {IFileServiceFileNameHOFConstructorInput} args
 * @param {IModelDef} args.defModel
 * @param {TemplateTypeEnum} args.templateTypeEnum
 * @returns {IFileServiceFileNameHOF}
 * @constructor
 */
export const CodeFileNameService: IFileServiceFileNameHOFConstructor = ({
	defModel,
	templateTypeEnum,
}: IFileServiceFileNameHOFConstructorInput): IFileServiceFileNameHOF =>
	FileNameService({
		defModel,
		getFileNameHelper: deriveFileNameCodeHelper,
		templateTypeEnum,
	});
