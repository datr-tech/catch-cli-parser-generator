import { DefTypeEnum } from '@app/config/enums';
import { DefModel } from '@app/models';
import { ICommonJsonDef } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { jsonDefFake } from '@test/doubles/fakes';

describe('DefModel', () => {
	describe('getType', () => {
		describe('should throw an error', () => {
			test("when 'isValid' is not called before 'getType'", () => {
				/*
				 * Arrange
				 */
				const errorExpected = "Negative 'condition'";
				const defTypeEnumExpected: DefTypeEnum = DefTypeEnum.DEF_TYPE_ITER;
				const jsonDef: ICommonJsonDef = jsonDefFake({
					name: 'TEST_JSON_DEF',
					type: defTypeEnumExpected,
				});

				/*
				 * Act
				 */
				const defModel: IModelDef = DefModel({ jsonDef });
				const handler = (): void => {
					defModel.getType();
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
			test("when 'isValid' is called before 'getType', but 'jsonDef.type' is invalid", () => {
				/*
				 * Arrange
				 */
				const errorExpected = "Negative 'condition'";
				const jsonDef: ICommonJsonDef = jsonDefFake({
					name: 'TEST_JSON_DEF',
					type: undefined,
					useDefaultType: false,
				});

				/*
				 * Act
				 */
				const defModel: IModelDef = DefModel({ jsonDef });
				defModel.isValid();
				const handler = (): void => {
					defModel.getType();
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
		});
	});
});
