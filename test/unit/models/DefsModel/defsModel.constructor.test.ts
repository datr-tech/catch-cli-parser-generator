import { DefsModel } from '@app/models';
import { ICommonJsonDef } from '@app/interfaces/common';
import { IModelDefs } from '@app/interfaces/models/DefsModel';
import { jsonDefFake } from '@test/doubles/fakes';

describe('DefsModel', (): void => {
	describe('constructor', (): void => {
		describe('should instantiate', (): void => {
			test("when receiving an 'ICommonJson' obj", (): void => {
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

				/*
				 * Assert
				 */
				expect(defsModel).toBeTruthy();
			});
		});
	});
});
