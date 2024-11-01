import { deriveFileNameTemplateHelper } from '@app/helpers';
import { DefModel } from '@app/models';
import { ICommonJsonDef, ICommonNameStr } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { jsonDefFake } from '@test/doubles/fakes';
import { deriveFileNameTemplateHelperPositiveFixture } from '@test/fixtures/helpers';
import { IFixtureDeriveFileNameTemplateHelperPositive } from '../../interfaces/fixtures/helpers';

describe('deriveFileNameTemplateHelper', () => {
	describe("should return the expected 'templateFileName'", () => {
		test.each(deriveFileNameTemplateHelperPositiveFixture)(
			"when 'defTypeEnum' is $defTypeEnum and 'templateTypeEnum' is $templateTypeEnum",
			({
				defTypeEnum,
				templateFileNameExpected,
				templateTypeEnum,
			}: IFixtureDeriveFileNameTemplateHelperPositive): void => {
				/*
				 * Arrange
				 */
				const jsonDef: ICommonJsonDef = jsonDefFake({ type: defTypeEnum });
				const defModel: IModelDef = DefModel({ jsonDef });

				/*
				 * Act
				 */
				const templateFileNameFound: ICommonNameStr = deriveFileNameTemplateHelper({
					defModel,
					templateTypeEnum,
				});

				/*
				 * Assert
				 */
				expect(templateFileNameFound).toBe(templateFileNameExpected);
			},
		);
	});
});
