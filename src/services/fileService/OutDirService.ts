import { isValidTeeHelper } from '@app/helpers';
import { assertCondition } from '@app/assertions';
import {
	ICommonBool,
	ICommonFuncIsValid,
	ICommonFuncMain,
	ICommonPathStr,
	ICommonValidityFlag,
} from '@app/interfaces/common';
import {
	IFileServiceDir,
	IFileServiceDirFuncGetDirPath,
} from '@app/interfaces/services/fileService/DirService';
import {
	IFileServiceOutDir,
	IFileServiceOutDirConstructor,
	IFileServiceOutDirConstructorInput,
	IFileServiceOutDirFuncGetOutDirType,
	IFileServiceOutDirFuncGetOutDirTypeOutput,
} from '@app/interfaces/services/fileService/OutDirService';
import { DirService } from './DirService';

/**
 * @public
 *
 * Construct a services to represent an output dir.
 *
 * @param {IFileServiceOutDirConstructorInput} args
 * @param {ICommonPathStr} args.dirPathStr
 * @param {OutDirTypeEnum} args.outDirTypeEnum
 * @returns {IFileServiceOutDir}
 * @constructor
 */
export const OutDirService: IFileServiceOutDirConstructor = ({
	dirPathStr,
	outDirTypeEnum,
}: IFileServiceOutDirConstructorInput): IFileServiceOutDir => {
	let dirService: IFileServiceDir;
	const isDirValidFlag: ICommonValidityFlag = { value: false };

	/**
	 * @public
	 *
	 * Returns the path to the dir represented by 'dirService'
	 *
	 * @returns {IFileServiceDirFuncGetDirPathOutput}
	 *
	 * @throws When 'isValid' was not called before 'getDirPath'
	 * @throws When 'dirService' was not valid
	 */
	const getDirPath: IFileServiceDirFuncGetDirPath = (): ICommonPathStr => {
		assertCondition({
			condition: isDirValidFlag.value,
		});

		return dirService.getDirPath();
	};

	/**
	 * Return the 'out dir' type
	 *
	 * @returns {IFileServiceOutDirFuncGetOutDirTypeOutput}
	 *
	 * @throws When 'isValid' was not called before 'getOutDirPath'
	 * @throws When 'dirService' was not valid
	 */
	const getOutDirType: IFileServiceOutDirFuncGetOutDirType =
		(): IFileServiceOutDirFuncGetOutDirTypeOutput => {
			assertCondition({
				condition: isDirValidFlag.value,
			});

			return outDirTypeEnum;
		};

	/**
	 * @public
	 *
	 * Returns true when 'dirService' is valid. Otherwise, false.
	 *
	 * @returns {ICommonBool}
	 */
	const isValid: ICommonFuncIsValid = (): ICommonBool =>
		isValidTeeHelper({
			condition: dirService.isValid(),
			validityFlagToUpdate: isDirValidFlag,
		});

	/**
	 * @private
	 *
	 * Main is called by default during the construction of an OutDirService.
	 * It asserts the validity of the received 'dirPathStr',
	 * ensuring that an instance can not be constructed when the string is invalid.
	 *
	 * @throws When 'dirPathStr' is invalid
	 */
	const main: ICommonFuncMain = (): void => {
		assertCondition({
			condition: !!dirPathStr,
			errorMessage: "Invalid 'dirPathStr'",
		});

		dirService = DirService({ dirPathStr });
	};
	main();

	return {
		getDirPath,
		getOutDirType,
		isValid,
	} as IFileServiceOutDir;
};
