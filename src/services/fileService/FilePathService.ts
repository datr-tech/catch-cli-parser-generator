import fs from 'node:fs';
import { assertCondition } from '@app/assertions';
import { isValidTeeHelper } from '@app/helpers';
import {
	ICommonBool,
	ICommonFuncIsValid,
	ICommonFuncMain,
	ICommonNameStr,
	ICommonPathStr,
	ICommonValidityFlag,
} from '@app/interfaces/common';
import {
	IFileServiceFilePath,
	IFileServiceFilePathConstructor,
	IFileServiceFilePathConstructorInput,
	IFileServiceFilePathFuncGetFilePath,
	IFileServicesFilePathFuncGetFilePathOutput,
} from '@app/interfaces/services/fileService/FilePathService';

/**
 * @public
 *
 * Construct a services to represent a file path.
 *
 * @param {IFileServiceFilePathConstructorInput)} args
 * @param {IFileServiceDir} args.dirModel
 * @param {IFileServiceFileName} args.fileNameModel
 * @param {ICommonBool} args.shouldFileCurrentlyExist
 * @returns {IFileServiceFilePath}
 * @constructor
 */
export const FilePathService: IFileServiceFilePathConstructor = ({
	dirModel,
	fileNameModel,
	shouldFileCurrentlyExist,
}: IFileServiceFilePathConstructorInput): IFileServiceFilePath => {
	const isFilePathValidFlag: ICommonValidityFlag = { value: false };
	let filePathStr: ICommonPathStr;

	/**
	 * @public
	 *
	 * Returns the file path
	 *
	 * @returns {IFileServicesFilePathFuncGetFilePathOutput}
	 *
	 * @throws When 'isValid' was not called before 'getFilePath'
	 * @throws When 'filePathStr' does not identify an existing file AND 'shouldFileCurrentlyExist' is true
	 * @throws When 'filePathStr' identifies an existing file AND 'shouldFileCurrentlyExist' is false
	 */
	const getFilePath: IFileServiceFilePathFuncGetFilePath =
		(): IFileServicesFilePathFuncGetFilePathOutput => {
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
