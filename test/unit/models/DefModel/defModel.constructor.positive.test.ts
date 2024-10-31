import { DefModel } from '@app/models';
import { ICommonJsonDef } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { jsonDefFake } from '@test/doubles/fakes';

describe('DefModel', () => {
	describe('constructor', () => {
		describe('should instantiate', () => {
			test("when receiving a 'jsonDef'", () => {
				/*
				 * Arrange
				 */
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: 'TEST_JSON_DEF' });

				/*
				 * Act
				 */
				const defModel: IModelDef = DefModel({ jsonDef });

				/*
				 * Assert
				 */
				expect(defModel).toBeTruthy();
			});
		});
	});
});
