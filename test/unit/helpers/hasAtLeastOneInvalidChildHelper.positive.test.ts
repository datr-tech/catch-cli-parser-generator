import { hasAtLeastOneInvalidChildHelper } from '@app/helpers';
import { DefModel } from '@app/models';
import { ICommonBool, ICommonJsonDef } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { jsonDefFake } from '@test/doubles/fakes';

describe('hasAtLeastOneInvalidChildHelper', (): void => {
	describe('should return true', (): void => {
		test('when a single child model is invalid', (): void => {
			/*
			 * Arrange
			 */
			const jsonDefInvalid: ICommonJsonDef = jsonDefFake({ name: '', useDefaultName: false });
			const defModelInvalid: IModelDef = DefModel({ jsonDef: jsonDefInvalid });
			const children: IModelDef[] = [defModelInvalid];

			/*
			 * Act
			 */
			const response: ICommonBool = hasAtLeastOneInvalidChildHelper({ children });

			/*
			 * Assert
			 */
			expect(response).toBe(true);
		});
		test('when one of the child models is invalid', (): void => {
			/*
			 * Arrange: valid models
			 */
			const jsonDefValidOne: ICommonJsonDef = jsonDefFake({ name: 'VALID_JSON_DEF_1' });
			const jsonDefValidTwo: ICommonJsonDef = jsonDefFake({ name: 'VALID_JSON_DEF_2' });
			const defModelValidOne: IModelDef = DefModel({ jsonDef: jsonDefValidOne });
			const defModelValidTwo: IModelDef = DefModel({ jsonDef: jsonDefValidTwo });

			/*
			 * Arrange: invalid models
			 */
			const jsonDefInvalid: ICommonJsonDef = jsonDefFake({ name: '', useDefaultName: false });
			const defModelInvalid: IModelDef = DefModel({ jsonDef: jsonDefInvalid });

			/*
			 * Act
			 */
			const children: IModelDef[] = [defModelValidOne, defModelValidTwo, defModelInvalid];
			const response: ICommonBool = hasAtLeastOneInvalidChildHelper({ children });

			/*
			 * Assert
			 */
			expect(response).toBe(true);
		});
	});
});
