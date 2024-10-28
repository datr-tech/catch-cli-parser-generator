import { assertCondition } from '@app/assertions';
import { isValidTeeHelper } from '@app/helpers';
import {
	ICommonBool,
	ICommonFuncIsValid,
	ICommonFuncMain,
	ICommonNameStr,
	ICommonValidityFlag
} from '@app/interfaces/common';
import {
	IModelFileName,
	IModelFileNameConstructor,
	IModelFileNameConstructorInput,
	IModelFileNameFuncGetFileName,
	IModelFileNameFuncGetFileNameOuput
} from 'src/interfaces/services/fileService/FileNameService';

/**
 * @public
 *
 * Construct a service to represent the name of a file.
 *
 * @param {IModelFileNameConstructorInput} args
 * @param {IModelDef} args.defModel
 * @param {IHelperGetFileName} args.getFileNameHelper
 * @param {TemplateTypeEnum} args.templateTypeEnum
 * @returns {IModelFileName}
 * @constructor
 */
export const FileNameService: IModelFileNameConstructor = ({
	defModel,
	getFileNameHelper,
	templateTypeEnum,
}: IModelFileNameConstructorInput): IModelFileName => {
	const isFileNameValidFlag: ICommonValidityFlag = { value: false };
	let fileNameStr: ICommonNameStr;

	/**
	 * @public
	 *
	 * Returns the name of the file
	 *
	 * @returns {IModelFileNameFuncGetFileNameOuput }
	 *
	 * @throws When 'isValid' was not called before 'getFileName'
	 * @throws When 'fileNameStr' was not truthy
	 */
	const getFileName: IModelFileNameFuncGetFileName = (): IModelFileNameFuncGetFileNameOuput => {
		assertCondition({
			condition: isFileNameValidFlag.value,
		});

		return fileNameStr;
	};

	/**
	 * @public
	 *
	 * Returns true when 'fileNameStr' is truthy. Otherwise, false.
	 *
	 * @returns {ICommonBool}
	 */
	const isValid: ICommonFuncIsValid = (): ICommonBool =>
		isValidTeeHelper({
			condition: !!fileNameStr,
			validityFlagToUpdate: isFileNameValidFlag,
		});

	/**
	 * @private
	 *
	 * Main is called by default during the construction of FileNameModels.
	 * It asserts the validity of the received 'defModel',
	 * ensuring that an instance can not be constructed when 'defModel'
	 * is invalid.
	 *
	 * @throws When 'derModel' is invalid
	 */
	const main: ICommonFuncMain = (): void => {
		assertCondition({
			condition: defModel.isValid(),
		});

		fileNameStr = getFileNameHelper({ defModel, templateTypeEnum });
	};

	main();

	return { getFileName, isValid } as IModelFileName;
};
