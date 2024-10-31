import { DefsModel } from '@app/models';
import { ICommonJsonDef } from '@app/interfaces/common';
import { IModelDefs } from '@app/interfaces/models/DefsModel';
import { jsonDefFake } from '@test/doubles/fakes';

describe('DefsModel', (): void => {
	describe('getDefModels', (): void => {
		describe('should throw an error', (): void => {
			test("when 'isValid' was not called before 'getDefModels'", (): void => {
				/*
				 * Arrange
				 */
				const errorExpected = "Negative 'condition'";
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: 'TEST_JSON_DEF' });
				const json = {
					defs: [jsonDef],
					dirs: [],
				};

				/*
				 * Act
				 */
				const defsModel: IModelDefs = DefsModel({ json });
				const handler = () => {
					defsModel.getDefModels();
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
		});
	});
});
