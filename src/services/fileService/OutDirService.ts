import { isValidTeeHelper } from '@app/helpers';
import { assertCondition } from '@app/assertions';
import {
	ICommonBool,
	ICommonFuncIsValid,
	ICommonPathStr,
	ICommonValidityFlag
} from '@app/interfaces/common';
import {
	IFileServiceDir,
	IFileServiceDirFuncGetDirPath
} from 'src/interfaces/services/fileService/DirFileService';
import {
	IModelOutDir,
	IModelOutDirConstructor,
	IModelOutDirConstructorInput,
	IModelOutDirFuncGetOutDirType,
	IModelOutDirFuncGetOutDirTypeOutput
} from 'src/interfaces/services/fileService/OutDirService';
import { DirService } from './DirService';

/**
 * @public
 *
 * Construct a service to represent an output dir.
 *
 * @param {IModelOutDirConstructorInput} args
 * @param {ICommonPathStr} args.dirPathStr
 * @param {OutDirTypeEnum} args.outDirTypeEnum
 * @returns {IModelOutDir}
 * @constructor
 */
export const OutDirService: IModelOutDirConstructor = ({
	dirPathStr,
	outDirTypeEnum
}: IModelOutDirConstructorInput): IModelOutDir => {
	const dirModel: IFileServiceDir = DirService({ dirPathStr });
	const isDirValidFlag: ICommonValidityFlag = { value: false };

	/**
	 * @public
	 *
	 * Returns the path to the dir represented by 'dirModel'
	 *
	 * @returns {IModelDirFuncGetDirPathOutput}
	 *
	 * @throws When 'isValid' was not called before 'getDirPath'
	 * @throws When 'dirModel' was not valid
	 */
	const getDirPath: IFileServiceDirFuncGetDirPath = (): ICommonPathStr => {
		assertCondition({
			condition: isDirValidFlag,
		});

		return dirModel.getDirPath();
	};

	/**
	 * Return the 'out dir' type
	 *
	 * @returns {IModelOutDirFuncGetOutDirTypeOutput}
	 *
	 * @throws When 'isValid' was not called before 'getOutDirPath'
	 * @throws When 'dirModel' was not valid
	 */
	const getOutDirType: IModelOutDirFuncGetOutDirType = (): IModelOutDirFuncGetOutDirTypeOutput => {
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
	} as IModelOutDir;
};