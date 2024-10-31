import fs from 'node:fs';
import { assertCondition } from '@app/assertions';
import { isValidTeeHelper } from '@app/helpers';
import {
	ICommonBool,
	ICommonFuncIsValid,
	ICommonFuncMain,
	ICommonValidityFlag,
} from '@app/interfaces/common';
import {
	IFileServiceDir,
	IFileServiceDirConstructor,
	IFileServiceDirConstructorInput,
	IFileServiceDirFuncGetDirPath,
	IFileServiceDirFuncGetDirPathOutput,
} from '@app/interfaces/services/fileService/DirService';

/**
 * @public
 *
 * Construct a services to represent a dir.
 *
 * @param {IFileServiceDirConstructorInput} args
 * @param {ICommonPathStr} args.dirPathStr
 * @returns {IFileServiceDir}
 * @constructor
 */
export const DirService: IFileServiceDirConstructor = ({
	dirPathStr,
}: IFileServiceDirConstructorInput): IFileServiceDir => {
	const isDirPathValidFlag: ICommonValidityFlag = { value: false };

	/**
	 * @public
	 *
	 * Returns the path to the dir: 'dirPathStr'
	 *
	 * @returns {IFileServiceDirFuncGetDirPathOutput}
	 *
	 * @throws When 'isValid' was not called before 'getDirPath'
	 * @throws When 'dirPathStr' does not represent an existing dir
	 */
	const getDirPath: IFileServiceDirFuncGetDirPath = (): IFileServiceDirFuncGetDirPathOutput => {
		assertCondition({
			condition: isDirPathValidFlag.value,
			errorMessage: "Negative 'isDirPathValidFlag'",
		});
		return dirPathStr;
	};

	/**
	 * @public
	 *
	 * Returns true when 'dirPathStr' identifies an existing dir. Otherwise, false.
	 *
	 * @returns {ICommonBool}
	 */
	const isValid: ICommonFuncIsValid = (): ICommonBool =>
		isValidTeeHelper({
			condition: !!dirPathStr && fs.existsSync(dirPathStr) && fs.statSync(dirPathStr).isDirectory(),

			validityFlagToUpdate: isDirPathValidFlag,
		});

	/**
	 * @private
	 *
	 * Main is called by default during the construction of DirModels,
	 * and it asserts the validity of the received 'dirPathStr',
	 * ensuring that an instance can not be constructed when 'dirPathStr'
	 * is invalid (not truthy).
	 *
	 * @throws When 'dirPathStr' is not truthy
	 */
	const main: ICommonFuncMain = (): void => {
		assertCondition({
			condition: !!dirPathStr,
			errorMessage: "Invalid 'dirPathStr'",
		});
	};

	main();

	return {
		getDirPath,
		isValid,
	} as IFileServiceDir;
};
