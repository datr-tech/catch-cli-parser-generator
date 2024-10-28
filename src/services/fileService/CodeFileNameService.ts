import { getFileNameCodeHelper } from '@app/helpers';
import { FileNameService } from '@app/services/fileService/FileNameService';
import {
	IModelFileNameHOF,
	IModelFileNameHOFConstructor,
	IModelFileNameHOFConstructorInput
} from 'src/interfaces/services/fileService/FileNameServiceHOC';

/**
 * @public
 *
 * Construct a FileNameService to represent the name of a code file.
 *
 * @param {IModelFileNameHOFConstructorInput} args
 * @param {IModelDef} args.defModel
 * @param {TemplateTypeEnum} args.templateTypeEnum
 * @returns {IModelFileNameHOF}
 * @constructor
 */
export const CodeFileNameService: IModelFileNameHOFConstructor = ({
	defModel,
	templateTypeEnum
}: IModelFileNameHOFConstructorInput): IModelFileNameHOF =>
	FileNameService({
		defModel,
		getFileNameHelper: getFileNameCodeHelper,
		templateTypeEnum,
	});
