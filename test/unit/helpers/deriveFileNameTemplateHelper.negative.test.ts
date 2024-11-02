import { deriveFileNameTemplateHelper } from '@app/helpers';
import { DefModel } from '@app/models';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { deriveFileNameTemplateHelperNegativeFixture } from '@test/fixtures/helpers';
import { IFixtureDeriveFileNameTemplateHelperNegative } from '@test/interfaces/fixtures/helpers';

describe('deriveFileNameTemplateHelper', (): void => {
	describe('should throw the expected error', (): void => {
		test.each(deriveFileNameTemplateHelperNegativeFixture)(
			"when 'defTypeEnum' is $defTypeEnum and 'templateTypeEnum' is $templateTypeEnum",
			({
				errorExpected,
				jsonDef,
				templateTypeEnum,
			}: IFixtureDeriveFileNameTemplateHelperNegative): void => {
				/*
				 * Arrange
				 */
				const defModel: IModelDef = DefModel({ jsonDef });

				/*
				 * Act
				 */
				const handler = (): void => {
					deriveFileNameTemplateHelper({
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
