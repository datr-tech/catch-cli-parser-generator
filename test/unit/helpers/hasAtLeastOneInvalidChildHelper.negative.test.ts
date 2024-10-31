import { hasAtLeastOneInvalidChildHelper } from '@app/helpers';
import { DefModel } from '@app/models';
import { ICommonBool, ICommonJsonDef } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { jsonDefFake } from '@test/doubles/fakes';

describe('hasAtLeastOneInvalidChildHelper', (): void => {
	describe('should return false', (): void => {
		test('when a single child model is valid', (): void => {
			/*
			 * Arrange
			 */
			const jsonDefInvalid: ICommonJsonDef = jsonDefFake({ name: 'VALID_JSON_DEF' });
			const defModelInvalid: IModelDef = DefModel({ jsonDef: jsonDefInvalid });
			const children: IModelDef[] = [defModelInvalid];

			/*
			 * Act
			 */
			const response: ICommonBool = hasAtLeastOneInvalidChildHelper({ children });

			/*
			 * Assert
			 */
			expect(response).toBe(false);
		});
		test('when all of the child models are valid', (): void => {
			/*
			 * Arrange
			 */
			const jsonDefValidOne: ICommonJsonDef = jsonDefFake({ name: 'VALID_JSON_DEF_1' });
			const jsonDefValidTwo: ICommonJsonDef = jsonDefFake({ name: 'VALID_JSON_DEF_2' });
			const defModelValidOne: IModelDef = DefModel({ jsonDef: jsonDefValidOne });
			const defModelValidTwo: IModelDef = DefModel({ jsonDef: jsonDefValidTwo });

			/*
			 * Act
			 */
			const children: IModelDef[] = [defModelValidOne, defModelValidTwo];
			const response: ICommonBool = hasAtLeastOneInvalidChildHelper({ children });

			/*
			 * Assert
			 */
			expect(response).toBe(false);
		});
	});
});
