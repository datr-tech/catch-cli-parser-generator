import { assertCondition } from '@app/assertions';
import {
	ICommonBool,
	ICommonFuncIsValid,
	ICommonFuncMain,
	ICommonJsonDir
} from '@app/interfaces/common';
import { IFileServiceDir } from 'src/interfaces/services/fileService/DirFileService';
import { IModelOutDir } from 'src/interfaces/services/fileService/OutDirService';
import {
	IModelOutDirs,
	IModelOutDirsConstructor,
	IModelOutDirsConstructorInput,
	IModelOutDirsFuncGetFirstOutDirModelByType,
	IModelOutDirsFuncGetFirstOutDirModelByTypeInput
} from '@app/interfaces/models/OutDirsModel';
import { OutDirService } from '../services/fileService/OutDirService';

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
	json
}: IModelOutDirsConstructorInput): IModelOutDirs => {
	let areModelsValidFlag: ICommonBool = false;
	let outDirModels: IModelOutDir[];

	/**
	 * @public
	 *
	 * Returns the first OutDirService matching the received outDirType. Otherwise, undefined.
	 *
	 * @param {IModelOutDirsFuncGetFirstOutDirModelByTypeInput} args
	 * @param {OutDirTypeEnum} args.outDirType
	 * @returns {IModelOutDir | undefined}
	 *
	 * @throws When 'isValid' was not called before 'getFirstOutDirModelByType'
	 * @throws When one or more 'outDirModels' is invalid
	 */
	const getFirstOutDirModelByType: IModelOutDirsFuncGetFirstOutDirModelByType = ({
		outDirType
	}: IModelOutDirsFuncGetFirstOutDirModelByTypeInput): IModelOutDir => {
		assertCondition({
			condition: areModelsValidFlag,
		});

		return outDirModels.find((outDirModel: IModelOutDir): ICommonBool =>
			outDirModel.getOutDirType() === outDirType);
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
		}

		const firstInvalidModel = outDirModels.find((outDirModel: IFileServiceDir): ICommonBool =>
				outDirModel.isValid() === false);

		areModelsValidFlag = typeof firstInvalidModel === 'undefined';

		return areModelsValidFlag;
	};

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
				? json.dirs.map(({ path, type }: ICommonJsonDir): IModelOutDir =>
					OutDirService({ dirPathStr: path, outDirTypeEnum: type }))
				: [];
	};

	main();

	return {
		getFirstOutDirModelByType,
		isValid,
	};
};
