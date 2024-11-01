import { deriveFileNameCodeHelper } from '@app/helpers';
import { DefModel } from '@app/models';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { deriveFileNameCodeHelperNegativeFixture } from '@test/fixtures/helpers';
import { IFixtureDeriveFileNameCodeHelperNegative } from '../../interfaces/fixtures/helpers';

describe('deriveFileNameCodeHelper', (): void => {
	describe('should throw the expected error', (): void => {
		test.each(deriveFileNameCodeHelperNegativeFixture)(
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
					deriveFileNameCodeHelper({
						defModel,
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
