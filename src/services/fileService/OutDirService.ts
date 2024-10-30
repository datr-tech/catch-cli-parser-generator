import { isValidTeeHelper } from '@app/helpers';
import { assertCondition } from '@app/assertions';
import {
	ICommonBool,
	ICommonFuncIsValid,
	ICommonPathStr,
	ICommonValidityFlag,
} from '@app/interfaces/common';
import {
	IFileServiceDir,
	IFileServiceDirFuncGetDirPath,
} from '@app/interfaces/services/fileService/DirFileService';
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
	const dirModel: IFileServiceDir = DirService({ dirPathStr });
	const isDirValidFlag: ICommonValidityFlag = { value: false };

	/**
	 * @public
	 *
	 * Returns the path to the dir represented by 'dirModel'
	 *
	 * @returns {IFileServiceDirFuncGetDirPathOutput}
	 *
	 * @throws When 'isValid' was not called before 'getDirPath'
	 * @throws When 'dirModel' was not valid
	 */
	const getDirPath: IFileServiceDirFuncGetDirPath = (): ICommonPathStr => {
		assertCondition({
			condition: isDirValidFlag.value,
		});

		return dirModel.getDirPath();
	};

	/**
	 * Return the 'out dir' type
	 *
	 * @returns {IFileServiceOutDirFuncGetOutDirTypeOutput}
	 *
	 * @throws When 'isValid' was not called before 'getOutDirPath'
	 * @throws When 'dirModel' was not valid
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
	 * Returns true when 'dirModel' is valid. Otherwise, false.
	 *
	 * @returns {ICommonBool}
	 */
	const isValid: ICommonFuncIsValid = (): ICommonBool =>
		isValidTeeHelper({
			condition: dirModel.isValid(),
			validityFlagToUpdate: isDirValidFlag,
		});

	return {
		getDirPath,
		getOutDirType,
		isValid,
	} as IFileServiceOutDir;
};
