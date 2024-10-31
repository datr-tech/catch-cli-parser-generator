import { DefModel } from '@app/models';
import { ICommonJsonDef, ICommonNameStr } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { jsonDefFake } from '@test/doubles/fakes';

describe('DefModel', () => {
	describe('getName', () => {
		describe("should return the expected 'name' property", () => {
			test("when 'isValid' is called before 'getType'", () => {
				/*
				 * Arrange
				 */
				const nameExpected: ICommonNameStr = 'TEST_JSON_DEF';
				const jsonDef: ICommonJsonDef = jsonDefFake({
					name: nameExpected,
				});

				/*
				 * Act
				 */
				const defModel: IModelDef = DefModel({ jsonDef });
				defModel.isValid();
				const nameFound: ICommonNameStr = defModel.getName();

				/*
				 * Assert
				 */
				expect(nameFound).toBe(nameExpected);
			});
		});
	});
});
