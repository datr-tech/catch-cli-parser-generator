import { isValidTeeHelper } from '@app/helpers';
import { assertCondition } from '@app/assertions';
import {
	ICommonBool,
	ICommonFuncIsValid,
	ICommonFuncMain,
	ICommonJsonDef,
	ICommonValidityFlag,
} from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import {
	IModelDefs,
	IModelDefsConstructor,
	IModelDefsConstructorInput,
	IModelDefsFuncGetDefs,
	IModelDefsFuncGetDefsOutput,
} from '@app/interfaces/models/DefsModel';
import { DefModel } from './DefModel';

/**
 * @public
 *
 * Construct a model representing definitions
 * derived from the received 'json'.
 *
 * @param {IModelDefsConstructorInput} args
 * @param {ICommonJson} args.json
 * @returns {IModelDefs}
 * @constructor
 */
export const DefsModel: IModelDefsConstructor = ({
	json,
}: IModelDefsConstructorInput): IModelDefs => {
	const areAllDefModelsValidFlag: ICommonValidityFlag = { value: false };
	let defModels: IModelDef[];

	/**
	 * @public
	 *
	 * Returns an array of valid defModels.
	 *
	 * @returns {IModelDefsFuncGetDefsOutput}
	 *
	 * @throws When 'isValid' was not called before 'getDefs'
	 * @throws When one or more of the defModels is invalid
	 */
	const getDefs: IModelDefsFuncGetDefs = (): IModelDefsFuncGetDefsOutput => {
		assertCondition({
			condition: areAllDefModelsValidFlag.value,
		});
		return defModels;
	};

	/**
	 * @public
	 *
	 * Returns true when each defModel within defModels is valid. Otherwise, false.
	 *
	 * @returns {ICommonBool}
	 */
	const isValid: ICommonFuncIsValid = (): ICommonBool =>
		isValidTeeHelper({
			condition: !defModels.find(
				(defModel: IModelDef): ICommonBool => defModel.isValid() === false,
			),
			validityFlagToUpdate: areAllDefModelsValidFlag,
		});

	/**
	 * @private
	 *
	 * Main is called during the construction of instances of DefsModel.
	 * When successful, it populates the local 'defModels' array with
	 * instances of DefModel (based upon the received json).
	 */
	const main: ICommonFuncMain = (): void => {
		if (typeof json.defs !== 'undefined' && Array.isArray(json.defs)) {
			defModels = json.defs.map((jsonDef: ICommonJsonDef): IModelDef => DefModel({ jsonDef }));
		}
	};

	main();

	return { getDefs, isValid } as IModelDefs;
};
