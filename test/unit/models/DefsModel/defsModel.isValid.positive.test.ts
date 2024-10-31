import { DefsModel } from '@app/models';
import { ICommonBool, ICommonJsonDef } from '@app/interfaces/common';
import { IModelDefs } from '@app/interfaces/models/DefsModel';
import { jsonDefFake } from '@test/doubles/fakes';

describe('DefsModel', (): void => {
	describe('isValid', (): void => {
		describe('should return true', (): void => {
			test("when one or more child 'defModels' have been constructed", (): void => {
				/*
				 * Arrange
				 */
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
				const response: ICommonBool = defsModel.isValid();

				/*
				 * Assert
				 */
				expect(response).toBe(true);
			});
		});
	});
});
