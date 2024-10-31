import { isValidTeeHelper } from '@app/helpers';
import { assertCondition } from '@app/assertions';
import {
	hasAtLeastOneInvalidChildHelper,
	hasMinimumChildrenHelper,
	isJsonPropArrayHelper,
} from '@app/helpers';
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
	IModelDefsFuncGetDefModels,
	IModelDefsFuncGetDefModelsOutput,
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
	 * @returns {IModelDefsFuncGetDefModelsOutput}
	 *
	 * @throws When 'isValid' was not called before 'getDefs'
	 * @throws When one or more of the defModels is invalid
	 */
	const getDefModels: IModelDefsFuncGetDefModels = (): IModelDefsFuncGetDefModelsOutput => {
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
			condition:
				hasMinimumChildrenHelper({ numChildren: defModels.length }) &&
				!hasAtLeastOneInvalidChildHelper({ children: defModels }),
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
		if (isJsonPropArrayHelper({ jsonProp: json.defs })) {
			defModels = json.defs.map((jsonDef: ICommonJsonDef): IModelDef => DefModel({ jsonDef }));
		} else {
			defModels = [];
		}
	};

	main();

	return { getDefModels, isValid } as IModelDefs;
};
