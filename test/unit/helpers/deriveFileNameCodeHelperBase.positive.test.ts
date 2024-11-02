import { deriveFileNameCodeHelperBase } from '@app/helpers';
import { DefModel } from '@app/models';
import { ICommonNameStr } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { deriveFileNameCodeHelperCommonPositiveFixture } from '@test/fixtures/helpers';
import { IFixtureDeriveFileNameCodeHelperPositive } from '@test/interfaces/fixtures/helpers';

describe('deriveFileNameCodeHelperBase', () => {
	describe("should return the expected 'codeFileName'", () => {
		test.each(deriveFileNameCodeHelperCommonPositiveFixture)(
			"when 'jsonDefName' is $jsonDef.name and 'templateTypeEnum' is $templateTypeEnum",
			({
				codeFileNameExpected,
				jsonDef,
				templateTypeEnum,
			}: IFixtureDeriveFileNameCodeHelperPositive): void => {
				/*
				 * Arrange
				 */
				const defModel: IModelDef = DefModel({ jsonDef });
				defModel.isValid();
				const defNameStr: ICommonNameStr = defModel.getName();

				/*
				 * Act
				 */
				const codeFileNameFound: ICommonNameStr = deriveFileNameCodeHelperBase({
					defNameStr,
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
