import { DefModel } from '@app/models';
import { ICommonJsonDef } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { jsonDefFake } from '@test/doubles/fakes';

describe('DefModel', () => {
	describe('getName', () => {
		describe('should throw an error', () => {
			test("when 'isValid' is not called before 'getType'", () => {
				/*
				 * Arrange
				 */
				const errorExpected = "Negative 'condition'";
				const jsonDef: ICommonJsonDef = jsonDefFake({
					name: 'TEST_JSON_DEF',
				});

				/*
				 * Act
				 */
				const defModel: IModelDef = DefModel({ jsonDef });
				const handler = (): void => {
					defModel.getName();
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
			test("when 'isValid' is called before 'getName', but 'jsonDef.name' is invalid", () => {
				/*
				 * Arrange
				 */
				const errorExpected = "Negative 'condition'";
				const jsonDef: ICommonJsonDef = jsonDefFake({
					name: undefined,
					useDefaultName: false,
				});

				/*
				 * Act
				 */
				const defModel: IModelDef = DefModel({ jsonDef });
				defModel.isValid();
				const handler = (): void => {
					defModel.getName();
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
		});
	});
});
