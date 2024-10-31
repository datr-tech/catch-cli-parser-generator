import { DefTypeEnum } from '@app/config/enums';
import { DefModel } from '@app/models';
import { ICommonJsonDef } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { jsonDefFake } from '@test/doubles/fakes';

describe('DefModel', () => {
	describe('getType', () => {
		describe('should return the expected type', () => {
			test("when 'isValid' is called before 'getType'", () => {
				/*
				 * Arrange
				 */
				const defTypeEnumExpected: DefTypeEnum = DefTypeEnum.DEF_TYPE_ITER;
				const jsonDef: ICommonJsonDef = jsonDefFake({
					name: 'TEST_JSON_DEF',
					type: defTypeEnumExpected,
				});

				/*
				 * Act
				 */
				const defModel: IModelDef = DefModel({ jsonDef });
				defModel.isValid();
				const defTypeEnumFound: DefTypeEnum = defModel.getType();

				/*
				 * Assert
				 */
				expect(defTypeEnumFound).toBe(defTypeEnumExpected);
			});
		});
	});
});
