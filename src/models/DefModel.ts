import { assertCondition } from '@app/assertions';
import { isValidTeeHelper } from '@app/helpers';
import {
	ICommonBool,
	ICommonFuncIsValid,
	ICommonFuncMain,
	ICommonValidityFlag,
} from '@app/interfaces/common';
import {
	IModelDef,
	IModelDefConstructor,
	IModelDefConstructorInput,
	IModelDefFuncGetName,
	IModelDefFuncGetNameOutput,
	IModelDefFuncGetPayload,
	IModelDefFuncGetPayloadOutput,
	IModelDefFuncGetProp,
	IModelDefFuncGetPropInput,
	IModelDefFuncGetPropOutput,
	IModelDefFuncGetType,
	IModelDefFuncGetTypeOutput,
} from '@app/interfaces/models/DefModel';

/**
 * @public
 *
 * Construct a model representing a single definition.
 *
 * @param {IModelDefConstructorInput} args
 * @param {ICommonJsonDef} args.jsonDef
 * @returns {IModelDef}
 * @constructor
 */
export const DefModel: IModelDefConstructor = ({
	jsonDef,
}: IModelDefConstructorInput): IModelDef => {
	const isDefModelValidFlag: ICommonValidityFlag = { value: false };

	/**
	 * @public
	 *
	 * Get the name of the definition (from the 'jsonDef' object)
	 *
	 * @returns {IModelDefFuncGetNameOutput}
	 */
	const getName: IModelDefFuncGetName = (): IModelDefFuncGetNameOutput =>
		getProp({
			propName: 'name',
		}) as IModelDefFuncGetNameOutput;

	/**
	 * @public
	 *
	 * Get the payload associated with the definition (from the 'jsonDef' object)
	 *
	 * @returns {IModelDefFuncGetPayloadOutput}
	 */
	const getPayload: IModelDefFuncGetPayload = (): IModelDefFuncGetPayloadOutput =>
		getProp({
			propName: 'payload',
		}) as IModelDefFuncGetPayloadOutput;

	/**
	 * @public
	 *
	 * Get the definition's type (from the 'jsonDef' object)
	 *
	 * @returns {IModelDefFuncGetPayloadOutput}
	 */
	const getType: IModelDefFuncGetType = (): IModelDefFuncGetTypeOutput =>
		getProp({
			propName: 'type',
		}) as IModelDefFuncGetTypeOutput;

	/**
	 * @public
	 *
	 * Returns true if 'name', 'payload' and 'type' are properties of 'jsonDef'. Otherwise, false.
	 *
	 * @returns {ICommonBool}
	 */
	const isValid: ICommonFuncIsValid = (): ICommonBool =>
		isValidTeeHelper({
			condition: !!jsonDef.name && !!jsonDef.payload && !!jsonDef.type,
			validityFlagToUpdate: isDefModelValidFlag,
		});

	/**
	 * @private
	 *
	 * Retrieve the value of 'propName' from the 'jsonDef' object.
	 *
	 * @param {IModelDefFuncGetPropInput} args
	 * @param {ICommonNameStr} args.propName
	 * @returns {IModelDefFuncGetPropOutput}
	 *
	 * @throws When 'isValid' was not called before one of the public 'getters'
	 * @throws When one of the expected 'jsonDef' properties was not found
	 */
	const getProp: IModelDefFuncGetProp = ({
		propName,
	}: IModelDefFuncGetPropInput): IModelDefFuncGetPropOutput => {
		assertCondition({
			condition: isDefModelValidFlag.value,
		});
		return jsonDef[propName];
	};

	/**
	 * @private
	 *
	 * Main is called during the construction of instances of DefModel,
	 * and it ensures that 'jsonDef' is not undefined.
	 */
	const main: ICommonFuncMain = (): void => {
		assertCondition({
			condition: !!jsonDef,
			errorMessage: "Invalid 'jsonDef'",
		});
	};

	main();
	return {
		getName,
		getPayload,
		getType,
		isValid,
	} as IModelDef;
};
