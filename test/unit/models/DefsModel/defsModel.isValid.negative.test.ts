import { DefsModel } from '@app/models';
import { ICommonBool, ICommonJsonDef } from '@app/interfaces/common';
import { IModelDefs } from '@app/interfaces/models/DefsModel';
import { jsonDefFake } from '@test/doubles/fakes';

describe('DefsModel', (): void => {
	describe('isValid', (): void => {
		describe('should return false', (): void => {
			test("when no 'defModels' have been constructed", (): void => {
				/*
				 * Arrange
				 */
				const json = {
					defs: [],
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
				expect(response).toBe(false);
			});
			test("when no 'defModels' have been constructed, because 'json.defs' was not an array", (): void => {
				/*
				 * Arrange
				 */
				const json = {
					defs: undefined,
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
				expect(response).toBe(false);
			});
			test("when one or more of the constructed child 'defModels' is invalid", (): void => {
				/*
				 * Arrange
				 */
				const jsonDefOne: ICommonJsonDef = jsonDefFake({ name: 'TEST_JSON_DEF_ONE' });
				const jsonDefTwo: ICommonJsonDef = jsonDefFake({ name: 'TEST_JSON_DEF_TWO' });
				const jsonDefThree: ICommonJsonDef = jsonDefFake({
					name: undefined,
					useDefaultName: false,
				});
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
				expect(response).toBe(false);
			});
		});
	});
});
