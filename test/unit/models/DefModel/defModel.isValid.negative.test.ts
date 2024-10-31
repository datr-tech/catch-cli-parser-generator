import { DefModel } from '@app/models';
import { ICommonBool, ICommonJsonDef } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { jsonDefFake } from '@test/doubles/fakes';

describe('DefModel', () => {
	describe('isValid', () => {
		describe('should return false', () => {
			test("when receiving a valid 'jsonDef'", () => {
				/*
				 * Arrange
				 */
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: undefined, useDefaultName: false });

				/*
				 * Act
				 */
				const defModel: IModelDef = DefModel({ jsonDef });
				const isValidFound: ICommonBool = defModel.isValid();

				/*
				 * Assert
				 */
				expect(isValidFound).toBe(false);
			});
		});
	});
});
