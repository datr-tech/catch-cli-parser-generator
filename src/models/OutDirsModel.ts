import { assertCondition } from '@app/assertions';
import {
	ICommonBool,
	ICommonFuncIsValid,
	ICommonFuncMain,
	ICommonJsonDir,
} from '@app/interfaces/common';
import { IFileServiceDir } from 'src/interfaces/services/fileService/DirService';
import { IFileServiceOutDir } from '@app/interfaces/services/fileService/OutDirService';
import {
	IModelOutDirs,
	IModelOutDirsConstructor,
	IModelOutDirsConstructorInput,
	IModelOutDirsFuncGetFirstOutDirModelByType,
	IModelOutDirsFuncGetFirstOutDirModelByTypeInput,
	IModelOutDirsFuncGetNumOutDirModels,
} from '@app/interfaces/models/OutDirsModel';
import { OutDirService } from '@app/services/fileService/OutDirService';

/**
 * @public
 *
 * Construct a model which will instantiate child OutDir models
 * based upon the received 'json' definitions.
 *
 * @param {IModelOutDirsConstructorInput} args
 * @param {ICommonJson} args.json
 * @returns {IModelOutDirs}
 * @constructor
 */
export const OutDirsModel: IModelOutDirsConstructor = ({
	json,
}: IModelOutDirsConstructorInput): IModelOutDirs => {
	let areModelsValidFlag: ICommonBool = false;
	let outDirModels: IFileServiceOutDir[];

	/**
	 * @public
	 *
	 * Returns the first OutDirService matching the received outDirType. Otherwise, undefined.
	 *
	 * @param {IModelOutDirsFuncGetFirstOutDirModelByTypeInput} args
	 * @param {OutDirTypeEnum} args.outDirType
	 * @returns {IFileServiceOutDir | undefined}
	 *
	 * @throws When 'isValid' was not called before 'getFirstOutDirModelByType'
	 * @throws When one or more 'outDirModels' is invalid
	 */
	const getFirstOutDirModelByType: IModelOutDirsFuncGetFirstOutDirModelByType = ({
		outDirType,
	}: IModelOutDirsFuncGetFirstOutDirModelByTypeInput): IFileServiceOutDir => {
		assertCondition({
			condition: areModelsValidFlag,
		});

		return outDirModels.find(
			(outDirModel: IFileServiceOutDir): ICommonBool => outDirModel.getOutDirType() === outDirType,
		);
	};

	/**
	 * @public
	 *
	 * Returns true when every child 'outDirModels' is valid. Otherwise, false.
	 *
	 * @returns {ICommonBool}
	 */
	const isValid: ICommonFuncIsValid = (): ICommonBool => {
		if (outDirModels.length === 0) {
			areModelsValidFlag = false;
		} else {
			const firstInvalidModel: IFileServiceOutDir = outDirModels.find(
				(outDirModel: IFileServiceDir): ICommonBool => outDirModel.isValid() === false,
			);
			areModelsValidFlag = typeof firstInvalidModel === 'undefined';
		}

		return areModelsValidFlag;
	};

	/**
	 * @public
	 *
	 * A utility func which returns the current number of 'child' outDirModels,
	 * and which has proved useful for testing purposes.
	 *
	 * @returns {number}
	 */
	const _getNumOutDirModels: IModelOutDirsFuncGetNumOutDirModels = (): number =>
		outDirModels.length;

	/**
	 * @private
	 *
	 * Main is called by default during the construction of OutDirsModels,
	 * and it populates the local 'outDirModels' var with instances of OutDirModels
	 * constructed according to the definitions within the received 'json'.
	 */
	const main: ICommonFuncMain = (): void => {
		outDirModels =
			typeof json.dirs !== 'undefined' && Array.isArray(json.dirs)
				? json.dirs.map(
						({ path, type }: ICommonJsonDir): IFileServiceOutDir =>
							OutDirService({ dirPathStr: path, outDirTypeEnum: type }),
					)
				: [];
	};

	main();

	return {
		getFirstOutDirModelByType,
		isValid,
		_getNumOutDirModels,
	};
};
