import fs from 'node:fs';
import { assertCondition } from '@app/assertions';
import { isValidTeeHelper } from '@app/helpers';
import {
	ICommonBool,
	ICommonFuncIsValid,
	ICommonFuncMain,
	ICommonNameStr,
	ICommonPathStr,
	ICommonValidityFlag
} from '@app/interfaces/common';
import {
	IModelFilePath,
	IModelFilePathConstructor,
	IModelFilePathConstructorInput,
	IModelFilePathFuncGetFilePath,
	IModelFilePathFuncGetFilePathOutput
} from 'src/interfaces/services/fileService/FilePathService';

/**
 * @public
 *
 * Construct a service to represent a file path.
 *
 * @param {IModelFilePathConstructorInput)} args
 * @param {IModelDir} args.dirModel
 * @param {IModelFileName} args.fileNameModel
 * @param {ICommonBool} args.shouldFileCurrentlyExist
 * @returns {IModelFilePath}
 * @constructor
 */
export const FilePathService: IModelFilePathConstructor = ({
	dirModel,
	fileNameModel,
	shouldFileCurrentlyExist,
}: IModelFilePathConstructorInput): IModelFilePath => {
	const isFilePathValidFlag: ICommonValidityFlag = { value: false };
	let filePathStr: ICommonPathStr;

	/**
	 * @public
	 *
	 * Returns the file path
	 *
	 * @returns {IModelFilePathFuncGetFilePathOutput}
	 *
	 * @throws When 'isValid' was not called before 'getFilePath'
	 * @throws When 'filePathStr' does not identify an existing file AND 'shouldFileCurrentlyExist' is true
	 * @throws When 'filePathStr' identifies an existing file AND 'shouldFileCurrentlyExist' is false
	 */
	const getFilePath: IModelFilePathFuncGetFilePath = (): IModelFilePathFuncGetFilePathOutput => {
		assertCondition({
			condition: isFilePathValidFlag.value,
		});

		return filePathStr;
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
			condition: fs.existsSync(filePathStr) === shouldFileCurrentlyExist,
			validityFlagToUpdate: isFilePathValidFlag,
		});

	/**
	 * @private
	 *
	 * Main is called by default during the construction of FilePathModels.
	 * It asserts the validity of the received 'dir' and 'fileName' models,
	 * ensuring that an instance can not be constructed when they are invalid.
	 *
	 * @throws When 'dirModel' is invalid
	 * @throws When 'fileNameModel' is invalid
	 */
	const main: ICommonFuncMain = (): void => {
		assertCondition({
			condition: dirModel.isValid() && fileNameModel.isValid(),
		});

		const dirPathStr: ICommonPathStr = dirModel.getDirPath();
		const fileNameStr: ICommonNameStr = fileNameModel.getFileName();
		filePathStr = `${dirPathStr}/${fileNameStr}`;
	};

	main();

	return {
		getFilePath,
		isValid,
	};
};
