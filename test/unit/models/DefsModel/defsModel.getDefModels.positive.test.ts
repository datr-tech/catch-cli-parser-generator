import { DefsModel } from '@app/models';
import { ICommonJsonDef } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IModelDefs } from '@app/interfaces/models/DefsModel';
import { jsonDefFake } from '@test/doubles/fakes';

describe('DefsModel', (): void => {
	describe('getDefModels', (): void => {
		describe("should return the expected number of 'defModels'", (): void => {
			test("when 'isValid' was called before 'getDefModels'", (): void => {
				/*
				 * Arrange
				 */
				const numDefModelsExpected: number = 3;
				const jsonDefOne: ICommonJsonDef = jsonDefFake({ name: 'TEST_JSON_DEF_ONE' });
				const jsonDefTwo: ICommonJsonDef = jsonDefFake({ name: 'TEST_JSON_DEF_TWO' });
				const jsonDefThree: ICommonJsonDef = jsonDefFake({ name: 'TEST_JSON_DEF_THREE' });
				const json = {
					defs: [jsonDefOne, jsonDefTwo, jsonDefThree],
					dirs: [],
				};

				/*
				 * Act
				 */
				const defsModel: IModelDefs = DefsModel({ json });
				defsModel.isValid();
				const defModels: IModelDef[] = defsModel.getDefModels();
				const numDefModelsFound: number = defModels.length;

				/*
				 * Assert
				 */
				expect(numDefModelsFound).toBe(numDefModelsExpected);
			});
		});
	});
});
