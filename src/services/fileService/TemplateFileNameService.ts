import { getFileNameTemplateHelper } from '@app/helpers';
import { FileNameService } from '@app/services/fileService/FileNameService';
import { IModelFileName } from 'src/interfaces/services/fileService/FileNameService';
import {
	IModelFileNameHOFConstructor,
	IModelFileNameHOFConstructorInput
} from 'src/interfaces/services/fileService/FileNameServiceHOC';

/**
 * Construct a FileNameService for a template.
 *
 * @param {IModelFileNameHOFConstructorInput} args
 * @param {IModelDef} args.defModel
 * @param {TemplateTypeEnum} args.templateTypeEnum
 * @returns {IModelFileName}
 * @constructor
 */
export const TemplateFileNameService: IModelFileNameHOFConstructor = ({
	defModel,
	templateTypeEnum,
}: IModelFileNameHOFConstructorInput): IModelFileName =>
	FileNameService({
		defModel,
		getFileNameHelper: getFileNameTemplateHelper,
		templateTypeEnum,
	});
