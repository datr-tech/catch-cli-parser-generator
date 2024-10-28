import { deriveFileNameTemplateHelper } from '@app/helpers';
import { FileNameService } from '@app/services/fileService/FileNameService';
import { IFileServiceFileName } from '@app/interfaces/services/fileService/FileNameService';
import {
	IFileServiceFileNameHOFConstructor,
	IFileServiceFileNameHOFConstructorInput,
} from '@app/interfaces/services/fileService/FileNameServiceHOC';

/**
 * Construct a FileNameService for a template.
 *
 * @param {IFileServiceFileNameHOFConstructorInput} args
 * @param {IModelDef} args.defModel
 * @param {TemplateTypeEnum} args.templateTypeEnum
 * @returns {IFileServiceFileName}
 * @constructor
 */
export const TemplateFileNameService: IFileServiceFileNameHOFConstructor = ({
	defModel,
	templateTypeEnum,
}: IFileServiceFileNameHOFConstructorInput): IFileServiceFileName =>
	FileNameService({
		defModel,
		getFileNameHelper: deriveFileNameTemplateHelper,
		templateTypeEnum,
	});
