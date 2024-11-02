import { deriveFileNameCodeHelperBase } from '@app/helpers';
import { DefModel } from '@app/models';
import { ICommonNameStr } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { deriveFileNameCodeHelperBaseNegativeFixture } from '@test/fixtures/helpers';
import { IFixtureDeriveFileNameCodeHelperNegative } from '@test/interfaces/fixtures/helpers';

describe('deriveFileNameCodeHelperBase', (): void => {
	describe('should throw the expected error', (): void => {
		test.each(deriveFileNameCodeHelperBaseNegativeFixture)(
			"when 'defTypeEnum' is $defTypeEnum and 'templateTypeEnum' is $templateTypeEnum",
			({
				errorExpected,
				jsonDef,
				templateTypeEnum,
			}: IFixtureDeriveFileNameCodeHelperNegative): void => {
				/*
				 * Arrange
				 */
				const defModel: IModelDef = DefModel({ jsonDef });

				/*
				 * Act
				 */
				const handler = (): void => {
					defModel.isValid();
					const defNameStr: ICommonNameStr = defModel.getName();

					deriveFileNameCodeHelperBase({
						defNameStr,
						templateTypeEnum,
					});
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			},
		);
	});
});
