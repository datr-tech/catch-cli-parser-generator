import { deriveFileNameCodeHelper } from '@app/helpers';
import { DefModel } from '@app/models';
import { ICommonNameStr } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { deriveFileNameCodeHelperPositiveFixture } from '@test/fixtures/helpers';
import { IFixtureDeriveFileNameCodeHelperPositive } from '../../interfaces/fixtures/helpers';

describe('deriveFileNameCodeHelper', () => {
	describe("should return the expected 'codeFileName'", () => {
		test.each(deriveFileNameCodeHelperPositiveFixture)(
			"when 'jsonDef.name' is $jsonDef.name and 'templateTypeEnum' is $templateTypeEnum",
			({
				codeFileNameExpected,
				jsonDef,
				templateTypeEnum,
			}: IFixtureDeriveFileNameCodeHelperPositive): void => {
				/*
				 * Arrange
				 */
				const defModel: IModelDef = DefModel({ jsonDef });

				/*
				 * Act
				 */
				const codeFileNameFound: ICommonNameStr = deriveFileNameCodeHelper({
					defModel,
					templateTypeEnum,
				});

				/*
				 * Assert
				 */
				expect(codeFileNameFound).toBe(codeFileNameExpected);
			},
		);
	});
});
